import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const RefineryContext = createContext()

// This component establishes what data can be used.
export const RefineryProvider = (props) => {
    const [refineries, setRefineries] = useState([])


    const getRefineries = () => {
        return fetch("http://localhost:8088/refineries")
        .then(res => res.json())
        .then(setRefineries)
    }

    const getRefineryById = (id) => {
        return fetch(`http://localhost:8088/refineries/${id}?_expand=planet`)
        .then(res => res.json())
    }

    


    return (
        <RefineryContext.Provider value={{
            refineries, getRefineries, getRefineryById
        }}>
            {props.children}
        </RefineryContext.Provider>
    )
}