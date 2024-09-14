import {createContext}from 'react'
import run from '../config/gemini'

export const context=createContext()

const contextProvider=(props) => {
        const onSent=async(prompt) => {
            await run(prompt)
        }

onSent("Describe about cricket")

const contextValue={}

return(
    <context.Provider value={contextValue}>{props.children}</context.Provider>
)
}
export default contextProvider