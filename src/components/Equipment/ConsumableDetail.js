import React, { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "./EquipmentProvider";
import "./Equipment.css";
import { useParams, useHistory } from "react-router-dom";

export const ConsumableDetail = () => {
  const { getConsumableById } = useContext(EquipmentContext);
  const [consumable, setConsumable] = useState({})


  

  const history = useHistory();

  const { consumableId } = useParams();

  useEffect(() => {
    getConsumableById(consumableId).then(setConsumable);
  }, []);

  return (
    <section className="post center">
        <h1 className="goldenRodText">Detailed View</h1>
      <h3 className="goldenRodText">Mining Consumable - {consumable.name}</h3>
      <img src={consumable.img}></img>
      <div className="blueText">Manufacturer: {consumable.manufacturer}</div>
      <div className="blueText">Price: {consumable.price} UEC</div>
      <div className="blueText">Charges: {consumable.charges}</div>

    </section>
  );
};