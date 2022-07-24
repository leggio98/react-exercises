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
            <InteractiveWelcome value= {17} name={<strong>Andrea</strong>}  />
            <Counter />
            <ClickCounter />
            <ClickTracker />
            <Login />
            <UncontrolledLogin />
            <TodoList
          render = {(items) => {
            return (
              <div>
              <ul>
                    {items.map((item, index) =><li key={item + index}>{item}
                    <button  onClick={() => {items.splice(index, 1);
                    this.setState({
                            items: items });}}>Remove Item</button>
                    </li>)}
                </ul>
                </div>
            )
          }}>
          </TodoList>
          <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
          </LanguageContext.Provider>
            </Container>
            </div>
    }
}