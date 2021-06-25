import React, { useContext, useEffect, useState } from "react";
import { RefineryContext } from "./RefineriesProvider";
import "./Refineries.css";
import { useParams, useHistory } from "react-router-dom";

export const RefineryDetail = () => {
  const { getRefineryById, getRefineryEfficiency } = useContext(RefineryContext);
  const [refinery, setRefinery] = useState({
    "id": 0,
    "name": "",
    "planetId": 0,
    "planet": {
        "id": 0,
        "system": "",
        "name": ""
    }
})

  const [refineryEfficiency, setRefineryEfficiency] = useState([])

  const history = useHistory();

  const { refineryId } = useParams();

  useEffect(() => {
    getRefineryById(refineryId).then(setRefinery);
  }, []);

  useEffect(() => {
    getRefineryEfficiency(refineryId).then(setRefineryEfficiency);
  }, []);

  const efficientOre = refineryEfficiency.filter(ore => ore.efficient === true)
  const inefficientOre = refineryEfficiency.filter(ore => ore.efficient === false && ore.efficiencyBonus != null)

  console.log(efficientOre)
  console.log(inefficientOre)

  return (
    <section className="post center">
      <h1 className="goldenRodText">Detailed View</h1>
      <h3 className="goldenRodText">{refinery.name}</h3>
      <div className="blueText">Planet: {refinery.planet.name}</div>
      <div className="blueText">Efficiency Bonus: {efficientOre.map(ore => {
        return `${ore.ore.name} ${ore.efficiencyBonus}% `
      })}</div>
      <div className="blueText">Efficiency Penalty: {inefficientOre.map(ore => {
        return `${ore.ore.name} ${ore.efficiencyBonus}% `
      })}</div>
      
    </section>
  );
};