import { useCallback, useState } from "react"

function useCounter ({initialValue = 0} ) {
    const [counter, setCounter] = useState(initialValue)

    const handleIncrementCounter = useCallback(function handleIncrementCounter() {
        setCounter(c => c + 1 )
    }, [])

    const handleDecrementCounter = useCallback(function handleDecrementCounter() {
        setCounter(c => c - 1)
    }, [])

    const handleResetCounter = useCallback(function handleResetCounter() {
        setCounter(initialValue)
    }, [initialValue])

    return{
        counter: counter,
        onIncrement: handleIncrementCounter,
        onDecrement: handleDecrementCounter,
        onReset: handleResetCounter
    }
}


export default useCounter


//Lo avevo già fatto con useCallback