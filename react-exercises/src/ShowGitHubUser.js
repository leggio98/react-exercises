import { useParams } from 'react-router-dom'
import {GitHubUser} from './GitHubUser'
import React from 'react'


function ShowGitHubUser () {
    const {username ='mario'} = useParams()
    return (
        <div>
            <GitHubUser username={username}  />
        </div>
    )
}

export default ShowGitHubUser