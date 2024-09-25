import {createContext, useState}from 'react'
import run from '../config/gemini'

export const Context=createContext()

const ContextProvider=(props) => {
    const[input,setInput]=useState("")
    const[recentPrompt,setRecentPrompt]=useState("")
    const[prevPrompt,setprevPrompt]=useState([])
    const[showResult,setShowResult]=useState(false)
    const[loading,setloading]=useState(false)
    const[resultData,setResultData]=useState("")
    
        const delayPara=(index,nextWord)=> {
            setTimeout(function() {
                setResultData((prev) => prev + nextWord)
            }, 75 * index);
        }
        const onSent=async(prompt) => {
            setResultData("")
            setloading(true)
            setShowResult(true)

            let response
            if(prompt !== undefined){
                response=await run (prompt)
                setRecentPrompt(prompt)
            }else{
                
                setRecentPrompt(input)
                setprevPrompt((prev) => [...prev,input] )
                response=await run (input)
            }
            
            
           const responseArray=response.split("**")
           let newResponse=" "

           for(let i=0; i<responseArray.length; i++){
            if(i == 0 || i % 2 !==1){
                newResponse +=responseArray[i]
            }else{
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
           }
           let newResponse2=newResponse.split("*").join("</br>")
           let newResponseArray=newResponse2.split(" ")
           for(let i = 0; i<newResponseArray.length; i++){
                const nextWord=newResponseArray[i]

                delayPara(i,nextWord + " ")
           }
           
        
           setloading(false)
           setInput("")
        }

const contextValue={
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
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