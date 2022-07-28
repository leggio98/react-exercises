// Create a ClickCounter class component that increments a counter every time a user clicks on a button. 
// Render both the current value of the counter and the button within the ClickCounter component.

import React, { useState } from "react";


export function ClickCounter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    function handleIncrementCounter () {
        setCounter((c) => c + 1)
    }

    function handleDecreaseCounter () {
        if (counter > 0) {
            setCounter((c) => c - 1)
        }
    }
    
        return (
            <div>
                <h2> Count: {counter}</h2>
                <button onClick={handleDecreaseCounter} disabled={(counter === 0) ? true : false}>Decrease</button>
                <button onClick={handleIncrementCounter}>Increment</button>
            </div>
        )
    }
