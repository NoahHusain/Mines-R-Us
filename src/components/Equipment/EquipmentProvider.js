import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EquipmentContext = createContext()

// This component establishes what data can be used.
export const EquipmentProvider = (props) => {
    const [ships, setShips] = useState([])
    const [miningLasers, setMiningLasers] = useState([])
    const [consumables, setConsumables] = useState([])


    const getShips = () => {
        return fetch("http://localhost:8088/ships")
        .then(res => res.json())
        .then(setShips)
    }

    const getMiningLasers = () => {
        return fetch("http://localhost:8088/miningLasers")
        .then(res => res.json())
        .then(setMiningLasers)
    }

    const getConsumables = () => {
        return fetch("http://localhost:8088/consumables")
        .then(res => res.json())
        .then(setConsumables)
    }


    return (
        <EquipmentContext.Provider value={{
            ships, miningLasers, consumables, getShips, getMiningLasers, getConsumables
        }}>
            {props.children}
        </EquipmentContext.Provider>
    )
}