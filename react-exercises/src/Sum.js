import React from "react"

export function Sum(numbers = [2, 5, 7, 9]) {
    return (
        <h1>
            Sum is : {numbers.reduce((totalValue, currentValue) => totalValue += currentValue, 0)}
        </h1>
    )
}