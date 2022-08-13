import { useState } from "react"

function useHandleForm () {
const [data, setData] = useState({
    username: '',
    password: '',
})

function handleInputChange (e) {
    const [name, value] = e.target;

    setData(data => {
        return {
            ...data,
            [name]: value,
        }

        
    })
}
    return {
        data:data,
        inputChange: handleInputChange
    }
}



export default useHandleForm