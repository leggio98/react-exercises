//Implement an UncontrolledLogin component that
// implements all the operations of the Login component, but does so using uncontrolled components.

import React, {createRef} from "react";

export class UncontrolledLogin extends React.Component {
    _formRef = createRef()

    handleFormSubmit = (event) => {
        event.preventDefault()

        const password = event.target.elements.password.value
        const username = event.target.elements.username.value
        const remember = event.target.elements.remember.checked

        console.log(
            password,
            username,
            remember
        )
    }

    render () {
        return (
            <div>
                <h3> My uncontrolled form</h3>
                <form ref={this._formRef} onSubmit ={this.handleFormSubmit}>
                    <input name= 'username' defaultValue="Alessandro" />
                    <input name= 'password' type='password' />
                    <input name= 'remember' type='checkbox' />
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>

                    <button></button>

                </form>

            </div>
        )
    }
}