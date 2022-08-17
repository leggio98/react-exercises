import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

export function useGitHubUser (username) {

    const {data, error, mutate} = useSWR(
        username ? `https://api.github.com/users/${username}` : null,
    fetcher)

    function fetchGitHubUser() {
        mutate()
    }

    return {
        data,
        error,
        loading: !data && !error,
        onFetch: fetchGitHubUser
    }
}

//Avevo già implementato la funziona onFetch per rifetchare

