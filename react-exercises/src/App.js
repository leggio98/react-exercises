// Write a class component called App that renders the Hello component within a div tag.

import React from "react"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { Container } from "./Container"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import TodoList from "./TodoList"
import { UncontrolledLogin } from "./UncontrolledLogin"


export class App extends React.Component {
    render () {
        return <div>
            <Container title={<Hello />}>
            <InteractiveWelcome value= {17} name={<strong>Andrea</strong>}  />
            <Counter />
            <ClickCounter />
            <ClickTracker />
            <Login />
            <UncontrolledLogin />
            <TodoList />
            </Container>
            </div>
    }
}