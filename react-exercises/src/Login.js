//Create a Login component containing three inputs: a username input,
// a password input and a remember checkbox. All three inputs should be controlled components.

//Add a "login" button to the Login component. This button should be disabled as long as
// the username and password inputs are empty. When clicked, the event handler attached to
//  the button should call an onLogin function passed as a prop to the Login component, passing it the state.


import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }
loginButtonClick = () => {
    this.props.onLogin(this.state)
}

formReset = () => {
    this.setState({
        username: '',
        password: '',
        remember: false
    })
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
            checked = {this.state.remember}
            onChange = {this.handleChanger}
            />
            <button 
            style= {{backgroundColor: (this.state.password.length) < 8 ? 'green' : 'red' }}
            data-testid="login"
            disabled = {!this.state.username || !this.state.password}
             onClick={this.loginButtonClick}>
                Login
            </button>
            <button
            onClick={this.formReset}>
                Reset
            </button>
            </div>
        )
    }
}