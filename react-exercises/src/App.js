// Write a class component called App that renders the Hello component within a div tag.

import React from "react"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin"


export class App extends React.Component {
    render () {
        return <div>
            <Hello />
            <InteractiveWelcome value= {17} name={<strong>Andrea</strong>}  />
            <Counter />
            <ClickCounter />
            <ClickTracker />
            <Login />
            <UncontrolledLogin />
            </div>
    }
}