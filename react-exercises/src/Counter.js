//Create a Counter class component with an internal state containing a count property, initialized to 0. The Counter
//component should render the count property within an h1 tag, and the count property should be incremented by 1 every second;

//Modify the Counter component so that the initial value of the counter,
// the increment interval and the increment amount are passed as props to the component.

import React from "react";

export class Counter extends React.Component {
    
    state = {
        count: this.props.initialValue,

    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementBy)
                }
            })
        }, (this.props.intervalTime))
    }
    render() {
        return (
            <h1>Count: {this.state.count}</h1>
        )
    }
}

Counter.propsDefault = {
    intervalTime: 1000,
    initialValue: 0,
    incrementBy: 1,
}