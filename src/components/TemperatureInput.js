import React from 'react'


const scaleNames = {
    'c': 'celsius',
    'f': 'fahrenheit'
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        // state will be handled in the parent comp
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        // this will pass in the value filled in the input
        // to the parent component
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const scale = this.props.scale;
        // get the temperature from parent to update 
        // multiple variables concurrently
        const temperature = this.props.temperature;

        return (
            <div className='temperature-input'>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange} />
            </div>
        )
    }
}

export default TemperatureInput;