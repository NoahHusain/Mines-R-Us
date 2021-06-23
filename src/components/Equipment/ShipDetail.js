import React, { useContext, useEffect, useState } from "react";
import { EquipmentContext, EquipmentProvider } from "./EquipmentProvider";
import "./Equipment.css";
import { useParams, useHistory } from "react-router-dom";

export const ShipDetail = () => {
  const { ships, getShipById } = useContext(EquipmentContext);

  const history = useHistory();

  const { shipId } = useParams();

  useEffect(() => {
    getShipById(shipId);
  }, []);

  return (
    <section className="post center">
        <h1 className="goldenRodText">Detailed View</h1>
      <h3 className="goldenRodText">{ships.manufacturer} {ships.name}</h3>
      <div className="blueText">Price: {ships.price} UEC</div>
    </section>
  );
};