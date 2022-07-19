// Write a class component called App that renders the Hello component within a div tag.

import React from "react"
import { ClickCounter } from "./ClickCounter"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"


export class App extends React.Component {
    render () {
        return <div>
            <Hello />
            <Welcome value= {17} name={<strong>Andrea</strong>}  />
            <Counter />
            <ClickCounter />
            </div>
    }
}