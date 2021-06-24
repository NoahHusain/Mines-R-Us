import React, { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "./EquipmentProvider";
import "./Equipment.css";
import { useParams, useHistory } from "react-router-dom";

export const ShipDetail = () => {
  const { getShipById } = useContext(EquipmentContext);
  const [ship, setShip] = useState({})


  const history = useHistory();

  const { shipId } = useParams();

  useEffect(() => {
    getShipById(shipId).then(setShip);
  }, []);

  return (
    <section className="post center">
        <h1 className="goldenRodText">Detailed View</h1>
      <h3 className="goldenRodText">{ship.manufacturer} {ship.name}</h3>
      <img src={ship.img}></img>
      <div className="blueText">Role: {ship.role}</div>
      <div className="blueText">Cargo Capactiy: {ship.cargoCapacity} SCU</div>
      <div className="blueText">{ship.description}</div>
      <div className="blueText">Price: {ship.price} UEC</div>

    </section>
  );
};