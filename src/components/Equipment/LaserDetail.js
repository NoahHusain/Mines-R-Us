import React, { useContext, useEffect, useState } from "react";
import { EquipmentContext, EquipmentProvider } from "./EquipmentProvider";
import "./Equipment.css";
import { useParams, useHistory } from "react-router-dom";

export const LaserDetail = () => {
  const { miningLasers, getMiningLaserById } = useContext(EquipmentContext);
 

  const history = useHistory();

  const { laserId } = useParams();

   
  useEffect(() => {
    getMiningLaserById(laserId);
  }, []);

  return (
    <section className="post center">
        <h1 className="goldenRodText">Detailed View</h1>
      <h3 className="goldenRodText">{miningLasers.name}</h3>
      <div className="blueText">Manufacturer: {miningLasers.manufacturer}</div>
      <div className="blueText">Power Output: {miningLasers.powerOutput}</div>
      <div className="blueText">Price: {miningLasers.price} UEC</div>
    </section>
  );
};