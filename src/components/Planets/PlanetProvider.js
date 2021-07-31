import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const PlanetContext = createContext();

// This component establishes what data can be used.
export const PlanetProvider = (props) => {
  const [planets, setPlanets] = useState([]);

  const getPlanets = () => {
    return fetch("https://mines-r-us-api-44tok.ondigitalocean.app/planets")
      .then((res) => res.json())
      .then(setPlanets);
  };

  const addPlanet = (planetObject) => {
    return fetch("https://mines-r-us-api-44tok.ondigitalocean.app/moons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planetObject),
    }).then(getPlanets);
  };

  const deletePlanet = (planetId) => {
    return fetch(
      `https://mines-r-us-api-44tok.ondigitalocean.app/planets/${planetId}`,
      {
        method: "DELETE",
      }
    ).then(getPlanets);
  };

  const updatePlanet = (planetId) => {
    return fetch(
      `https://mines-r-us-api-44tok.ondigitalocean.app/planets/${planetId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(planetId),
      }
    ).then(getPlanets);
  };

  const getPlanetById = (planetId) => {
    return fetch(
      `https://mines-r-us-api-44tok.ondigitalocean.app/planets/${planetId}`
    ).then((res) => res.json());
  };

  return (
    <PlanetContext.Provider
      value={{
        planets,
        getPlanets,
        addPlanet,
        deletePlanet,
        updatePlanet,
        getPlanetById,
      }}
    >
      {props.children}
    </PlanetContext.Provider>
  );
};
