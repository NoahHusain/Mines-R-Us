import { EquipmentContext } from "./EquipmentProvider";
import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

export const EquipmentList = () => {
    const { ships, getShips, miningLasers, getMiningLasers, consumables, getConsumables } = useContext(EquipmentContext);
    const history = useHistory();
  
    useEffect(() => {
      getShips().then(getMiningLasers).then(getConsumables);
    }, []);

    

  return (
    <>
      <h1 className="goldenRodText center">Equipment</h1>

      <h2 className="goldenRodText center">Ships</h2>
        <div className="flexEquipment blueText center">
        {/* map through ships and display manufacturer and name */}

        {ships.map(ship => ( <div className="post">{ship.manufacturer} {ship.name}</div>))}
        </div>
      

      <h2 className="goldenRodText center">Mining Lasers</h2>
        <div className="flexEquipment blueText center">
        {/* map through lasers and display name */}

        {miningLasers.map(laser => ( <div className="post">{laser.manufacturer} {laser.name}</div>))}
        </div>
      

      <h2 className="goldenRodText center">Mining Consumables</h2>
        <div className="flexEquipment blueText center">
        {/* map through ships and display name */}

        {consumables.map(consumable => ( <div className="post">{consumable.manufacturer} {consumable.name}</div>))}
        </div>
      
    </>
  );
};