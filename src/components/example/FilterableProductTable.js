import React from 'react';
import SearchBar from './SearchBar';
import data from './data';
import ProductTable from './ProductTable';
import { DataGrid } from '@mui/x-data-grid';

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
                <SearchBar 
                    onSearchBarChange={this.handleSearchBarChange}
                    onCheckBoxChange={this.handleCheckBoxChange}
                />
                <ProductTable data={data} columns={columns}/>
            </div>
     
        );
    }
}

export default FilterableProducTable;