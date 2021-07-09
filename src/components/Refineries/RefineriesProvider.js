import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const RefineryContext = createContext()

// This component establishes what data can be used.
export const RefineryProvider = (props) => {
    const [refineries, setRefineries] = useState([])


    const getRefineries = () => {
        return fetch("https://mines-r-us-api-rly2l.ondigitalocean.app/refineries")
        .then(res => res.json())
        .then(setRefineries)
    }

    const getRefineryById = (id) => {
        return fetch(`https://mines-r-us-api-rly2l.ondigitalocean.app/refineries/${id}?_expand=planet`)
        .then(res => res.json())
    }

    const getRefineryEfficiency = (refineryId) => {
        return fetch (`https://mines-r-us-api-rly2l.ondigitalocean.app/oreRefineries/?refineryId=${refineryId}&_expand=ore`)
        .then(res => res.json())
    }

    

    


    return (
        <RefineryContext.Provider value={{
            refineries, getRefineries, getRefineryById, getRefineryEfficiency
        }}>
            {props.children}
        </RefineryContext.Provider>
    )
}