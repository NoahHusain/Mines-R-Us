import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const MoonContext = createContext()

// This component establishes what data can be used.
export const MoonProvider = (props) => {
    const [moons, setMoons] = useState([])

    const getMoons = () => {
        return fetch("http://localhost:8088/moons?_expand=planet")
        .then(res => res.json())
        .then(setMoons)
    }

    const addMoon = moonObject => {
        return fetch("http://localhost:8088/moons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(oreOmoonObjectbject)
        })
        .then(getMoons)
    }

    const deleteMoon = moonId => {
        return fetch(`http://localhost:8088/moons/${moonId}`, {
            method: "DELETE"
        })
            .then(getMoons)
    }

    const updateMoon = moonId => {
        return fetch(`http://localhost:8088/moons/${moonId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(moonId)
        })
          .then(getMoons)
      }

      const getMoonById = moonId => {
        return fetch(`http://localhost:8088/moons/${moonId}`)
        .then(res => res.json())
    }

    return (
        <MoonContext.Provider value={{
            moons, getMoons, addMoon, deleteMoon, updateMoon, getMoonById
        }}>
            {props.children}
        </MoonContext.Provider>
    )
}