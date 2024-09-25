import {createContext, useState}from 'react'
import run from '../config/gemini'

export const Context=createContext()

const ContextProvider=(props) => {
    const[input,setInput]=useState("")
    const[recentPrompt,setrecentPrompt]=useState("")
    const[prevPrompt,setprevPrompt]=useState([])
    const[showResult,setShowResult]=useState(false)
    const[loading,setloading]=useState(false)
    const[resultData,setResultData]=useState("")
    

        const onSent=async(prompt) => {
            setResultData("")
            setloading(true)
            setShowResult(true)
           const response= await run(prompt)
           setResultData(response)
           setloading(false)
           setInput("")
        }

const contextValue={
    input,
    setInput,
    recentPrompt,
    setrecentPrompt,
    prevPrompt,
    setprevPrompt,
    showResult,
    loading,
    resultData,
    onSent
}

return(
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
)
}
export default ContextProvider