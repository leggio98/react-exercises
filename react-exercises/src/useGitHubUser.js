import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

export function useGitHubUser (username) {

    const {data, error, mutate} = useSWR('https://api.github.com/user', fetcher)

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

