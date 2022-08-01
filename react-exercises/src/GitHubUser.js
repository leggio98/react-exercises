//Create a GithubUser component that fetches the data of the username passed as
// a prop, and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.

import { useEffect, useState } from "react"



export function GitHubUser ({username}) {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then (response => {
            if (response.status !== 200) {
                setError(new Error('User not found'))
            } 
            return response.json()
        }).then (json => {
        setData(json)
        })

    }, [username])

    return (
        <div>
            {data && <h1>{data.name}</h1>}
        </div>
    )
}