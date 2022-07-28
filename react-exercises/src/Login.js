//Create a Login component containing three inputs: a username input,
// a password input and a remember checkbox. All three inputs should be controlled components.

//Add a "login" button to the Login component. This button should be disabled as long as
// the username and password inputs are empty. When clicked, the event handler attached to
//  the button should call an onLogin function passed as a prop to the Login component, passing it the state.


import React, { useState } from "react";

export function Login (){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })
   function handleChanger (event) {
       const {name, value, type, checked} = event.target

    setData((data) => {
        return {
            ...data,
       [name]: type === 'checkbox' ? checked : value

        }
    }
    )
   }
   function formReset () {
   setData(() => {
    return {
        username: '',
        password: '',
        remember: false
    }
   })
   }

        return (
            <div>
            <input 
            name = 'username'
            value = {data.username}
            onChange = {handleChanger}
            />
            <input 
            name = 'password'
            value = {data.password}
            type = 'password'
            onChange = {handleChanger}
            />
            <input
            name = 'remember'
            type = 'checkbox'
            checked = {data.remember}
            onChange = {handleChanger}
            />
            <button
            onClick={formReset}>
                Reset
            </button>
            </div>
        )
    }
