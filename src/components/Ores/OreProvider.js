import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const OreContext = createContext()

// This component establishes what data can be used.
export const OreProvider = (props) => {
    const [ores, setOres] = useState([])

    const getOres = () => {
        return fetch("http://localhost:8088/ores")
        .then(res => res.json())
        .then(setOres)
    }

    const addOre = oreObject => {
        return fetch("http://localhost:8088/ores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(oreObject)
        })
        .then(getOres)
    }

    const deleteOre = oreId => {
        return fetch(`http://localhost:8088/ores/${oreId}`, {
            method: "DELETE"
        })
            .then(getOres)
    }

    const updateOre = oreId => {
        return fetch(`http://localhost:8088/ores/${oreId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(oreId)
        })
          .then(getOres)
      }

      const getOreById = oreId => {
        return fetch(`http://localhost:8088/ores/${oreId}`)
        .then(res => res.json())
    }

    return (
        <OreContext.Provider value={{
            ores, getOres, addOre, deleteOre, updateOre, getOreById
        }}>
            {props.children}
        </OreContext.Provider>
    )
}