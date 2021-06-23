import React, { useContext, useEffect, useState } from "react";
import { EquipmentContext, EquipmentProvider } from "./EquipmentProvider";
import "./Equipment.css";
import { useParams, useHistory } from "react-router-dom";

export const ConsumableDetail = () => {
  const { consumables, getConsumableById } = useContext(EquipmentContext);
  

  const history = useHistory();

  const { consumableId } = useParams();

  useEffect(() => {
    getConsumableById(consumableId);
  }, []);

  return (
    <section className="post center">
        <h1 className="goldenRodText">Detailed View</h1>
      <h3 className="goldenRodText">{consumables.name}</h3>
      <div className="blueText">Manufacturer: {consumables.manufacturer}</div>
      <div className="blueText">Price: {consumables.price} UEC</div>
    </section>
  );
};