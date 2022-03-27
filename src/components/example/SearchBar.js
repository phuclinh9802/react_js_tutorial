import React from 'react';
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';
// import { Check } from '@mui/icons-material';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }

    
    handleChange(e) {
        this.props.onSearchBarChange(e.target.value)
    }   

    handleCheckbox(e) {
        this.props.onCheckBoxChange(e.target.checked)
    }


    render() {
        return (
            <FormGroup>
                <div className='search-bar'>
                    <input type="text" onChange={this.handleChange} placeholder="Search..." />
                        <FormControlLabel onChange={this.handleCheckbox} control={<Checkbox />} label="Only show product in stock" />    
                </div>
            </FormGroup>

        )
    }
}

export default SearchBar;