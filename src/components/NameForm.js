import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : '',
            select: 'coconut'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    // handleChange function is to handle and update the 
    // value inside the input to the value variable
    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }

    handleSelect(event) {
        this.setState({
            select: event.target.value
        })
    }

    // handle submit button with the updated value variable
    handleSubmit(event) {
        alert("A name has been submitted: " + this.state.value + " " + this.state.select)
    }


    render() {
        return (
            <div className="NameForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text"  placeholder='Name...' onChange={this.handleChange}/>
                        <select value={this.state.select} onChange={this.handleSelect}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default NameForm;