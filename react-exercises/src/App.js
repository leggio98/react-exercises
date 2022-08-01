// Write a class component called App that renders the Hello component within a div tag.

import React from "react"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { Container } from "./Container"
import { Counter } from "./Counter"
import { DisplayLanguage } from "./DisplayLanguage"
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { LanguageContext } from "./LanguageContext"
import { Login } from "./Login"
import { Sum } from "./Sum"
import TodoList from "./TodoList"
import { UncontrolledLogin } from "./UncontrolledLogin"



export class App extends React.Component {
    state = {
        language: 'en',
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render () {
        return <div>
            <Container title={<Hello />}>
            
            <ClickCounter initialValue={0} />
            <Login />
            
            </Container>
            </div>
    }
}