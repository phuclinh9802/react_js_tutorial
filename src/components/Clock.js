import React, { Component } from 'react';

// when we create a clock class, we can set the prop as the state 
// so that we can only update the clock itself without affecting other components
class Clock extends React.Component {
    // create constructor
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    // set up timer whenever Clock is rendered
    componentDidMount() {
        this.timerID = setInterval (
            () => this.tick(), 
            1000
        );
    }
    
    // clear the timer whenever DOM produced by the Clock is removed
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // setup tick function to initialize date
    tick () {
        this.setState({
            date: new Date()
        })
    }

    // render the clock
    render() {
        return (
            <div className='clock'>
                {this.state.date.toLocaleTimeString()}
            </div>

        )
    }
}

export default Clock;