import React, { useEffect, useState } from "react";

export function useGitHubUser (username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    async function fetchGitHubUser(username) {
        setLoading(true)
        setErr(null)
        try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        
        if(response.status !== 200) {
            setErr(new Error('User does not exist'))
        }

        setData(json)
        } catch (err) {
            setErr(err)
            setData(null)
        } finally {
            setLoading(false)
        }
        
    }


    return {
        data,
        err,
        loading,
        onFetch: fetchGitHubUser
    }
}

//Pensavo di dover passare tutte le funzioni nell'esercizio precedente, quindi è uguale
