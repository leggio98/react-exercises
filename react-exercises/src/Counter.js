//Create a Counter class component with an internal state containing a count property, initialized to 0. The Counter
//component should render the count property within an h1 tag, and the count property should be incremented by 1 every second;

//Modify the Counter component so that the initial value of the counter,
// the increment interval and the increment amount are passed as props to the component.

//Extract the h1 tag showing the count state variable into a new component
// called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop.

//Modify the Counter component so that the interval is initialized within the componentDidMount
// life cycle method instead of the constructor. Is the constructor still required?

import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";



export function Counter () {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    }, [counter])

    return (
        <div>
            <h2> Count: {counter}</h2>
        </div>
    )
}