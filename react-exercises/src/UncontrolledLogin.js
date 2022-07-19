//Implement an UncontrolledLogin component that
// implements all the operations of the Login component, but does so using uncontrolled components.

import React, {createRef} from "react";

export class UncontrolledLogin extends React.Component {
    _formRef = createRef()

    state = {
        loginButton: false
    }
    componentDidMount() {
		this._formRef.current.elements.username.focus()
	}
    handleFormSubmit = (event) => {
        event.preventDefault()

        const password = event.target.elements.password.value
        const username = event.target.elements.username.value
        const remember = event.target.elements.remember.checked

        this.props.onLogin({username, password, remember})
    }
    loginButtonEnabled = () => {
		const username = this._formRef.current.elements.username.value
		const password = this._formRef.current.elements.password.value

		this.setState({
			loginButton: !!username && !!password 
		})
	}

    render () {
        return (
            <div>
                <h3> My uncontrolled form</h3>
                <form ref={this._formRef} onSubmit ={this.handleFormSubmit}>
                    <input name= 'username' defaultValue="Alessandro" onChange={this.loginButtonEnabled}/>
                    <input name= 'password' type='password' onChange={this.loginButtonEnabled}/>
                    <input name= 'remember' type='checkbox' />
                    <button type="submit" disabled={!this.state.loginButton}>Login</button>
                    <button type="reset">Reset</button>

                </form>

            </div>
        )
    }
}