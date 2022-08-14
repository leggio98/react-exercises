// Write a class component called App that renders the Hello component within a div tag.

import React from "react"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { Container } from "./Container"
import { Counter } from "./Counter"
import { DisplayLanguage } from "./DisplayLanguage"
import { GitHubUser } from "./GitHubUser"
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { LanguageContext } from "./LanguageContext"
import { Login } from "./Login"
import { Sum } from "./Sum"
import TodoList from "./TodoList"
import { UncontrolledLogin } from "./UncontrolledLogin"
import {Routes, Route, Link} from 'react-router-dom'
import { Welcome } from "./Welcome"
import ShowGitHubUser from "./ShowGitHubUser"



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
                <div>
                    <Link to='/'>Welcome</Link>
                    <Link to='/counter'>Counter</Link>
                    <Link to="users/mario">My Github Username</Link>

                </div>
            <Routes>
                <Route path='/' element={<Welcome name={'Jimmy'}/>}/>
                <Route path='/counter' element={<Counter/>} />
                <Route path="users" element={<GithubUserList />}>
						<Route path=":username" element={<ShowGithubUser />} />
					</Route>
                <Route path='*' element={<div>
                    <p>Path not found</p>
                    <Link to='/'>Home</Link>
                    </div>} />
            </Routes>
            </Container>
            </div>
    }
}