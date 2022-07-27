import React from "react"

export function Sum({numbers = [1,2,3,4,5]}) {
    return (
        <h1>
           {numbers && <h1>Sum is : {numbers.reduce((totalValue, currentValue) => totalValue += currentValue, 0)} </h1> }
        </h1>
    )
}