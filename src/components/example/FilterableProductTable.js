import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import data from './data';
const SearchBar = React.lazy(() => import('./SearchBar'));
const ProductTable = React.lazy(() => import('./ProductTable'));



class FilterableProducTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                    {field: 'category', headerName: 'Category', width: 130},
                    {field: 'id', headerName: 'ID', width: 70},
                    {field: 'price', headerName: 'Price', width: 90},
                    {field: 'stocked', headerName: 'Stocked', type: 'boolean', width: 90},
                    {field: 'name', headerName: 'Product Name', width: 90},
                    ],
            data: data,
            checked: false
                       
        }
        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        
    }

    // technique used for this: Lifting state up to be in synce between 2 child components.
    handleSearchBarChange(category) {
        // this will search by category (might be better to create a select option)
        // reset the data if search text input is null
        this.setState({
            data: category ? data.filter(d => d.category === category) : data
        })
    }

    // this handles the checkbox
    handleCheckBoxChange(checked) {
        this.setState({
            checked: checked,
            data: checked ? data.filter(d => d.stocked) : data
        })
    }

    render() {

        const columns = this.state.columns;
        const data = this.state.data;
        return (
            <div className="table">
                <Suspense fallback={<CircularProgress />}>
                    <SearchBar 
                        onSearchBarChange={this.handleSearchBarChange}
                        onCheckBoxChange={this.handleCheckBoxChange}
                    />
                    <ProductTable data={data} columns={columns}/>
                </Suspense>
               
            </div>
     
        );
    }
}

export default FilterableProducTable;