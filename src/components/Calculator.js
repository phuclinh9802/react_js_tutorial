import React from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c',
            temperature: null
        }

        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
    }

    handleCelsius(temperature) {
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    }
    handleFahrenheit(temperature) {
        this.setState({
            temperature: temperature,
            scale: 'f'
        })
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
        return (
            <div className='Calculator'>
                <TemperatureInput 
                    scale="c"
                    temperature={celsius} // just pass in the number
                    onTemperatureChange={this.handleCelsius}
                />
                <TemperatureInput 
                    scale="f"
                    temperature={fahrenheit} // just pass in the number
                    onTemperatureChange={this.handleFahrenheit}
                />      
            </div>
            

        )
    }
}


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9; 
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; 
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature) // convert to float

    // check if temperature is a number or not
    if (Number.isNaN(temperature)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}   


export default Calculator;
