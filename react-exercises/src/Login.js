//Create a Login component containing three inputs: a username input,
// a password input and a remember checkbox. All three inputs should be controlled components.

import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
    }

    handleChanger = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox'
            ? checked 
            : value
        })
    }

    render() {
        return (
            <div>
            <input 
            name = 'username'
            value = {this.state.username}
            onChange = {this.handleChanger}
            />
            <input 
            name = 'password'
            value = {this.state.password}
            type = 'password'
            onChange = {this.handleChanger}
            />
            <input
            name = 'remember'
            type = 'checkbox'
            value = {this.state.remember}
            onChange = {this.handleChanger}
            />
            </div>
        )
    }
}