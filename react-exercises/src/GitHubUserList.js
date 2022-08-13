// Create a GithubUserList component that maintains an array of usernames, showing a
// GithubUser component for each username entered. The usernames should be added to the array using an input field and a button.

import { useState } from "react"
import { GitHubUser } from "./GitHubUser"



export function GitHubUserList () {
const [usersArray, setUsersArray] = useState([])
const [userToPush, setUserToPush] = useState('')


function addUser () {
    setUsersArray((array) => [...array, userToPush])
}

function inputBinder (e) {
    setUserToPush(e.target.value)
}
    return (
        <div>
            <input name = {userToPush} onChange ={inputBinder}/>
            <button onClick={addUser}> Add user</button>
            {usersArray.map((user,index) => (
                <GitHubUser key={user + index} username={user}/>
            ))}
        </div>
    )
}