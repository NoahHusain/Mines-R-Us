import React, { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "./EquipmentProvider";
import "./Equipment.css";
import { useParams, useHistory } from "react-router-dom";

export const LaserDetail = () => {
  const { getMiningLaserById } = useContext(EquipmentContext);
  const [laser, setLaser] = useState({})

 

  const history = useHistory();

  const { laserId } = useParams();

   
  useEffect(() => {
    getMiningLaserById(laserId).then(setLaser);
  }, []);

  return (
    <section className="post center">
        <h1 className="goldenRodText">Detailed View</h1>
      <h3 className="goldenRodText">Mining Laser - {laser.name}</h3>
      <img src={laser.img}></img>
      <div className="blueText">Manufacturer: {laser.manufacturer}</div>
      <div className="blueText">Power Output: {laser.powerOutput}</div>
      <div className="blueText">Optimal Range: {laser.rangeOptimal} Meters</div>
      <div className="blueText">Maximum Range: {laser.rangeMax} Meters</div>
      <div className="blueText">Optimal Window Size Modifier: {laser.optimalWindowSize}% </div>
      <div className="blueText">Instability Modifier: {laser.instability}% </div>
      <div className="blueText">Resistance Modifier: {laser.resistance}% </div>
      <div className="blueText">Consumable Slots: {laser.consumables} </div>
      <div className="blueText">Price: {laser.price} UEC</div>
    </section>
  );
};