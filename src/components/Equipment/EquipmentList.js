import { EquipmentContext } from "./EquipmentProvider";
import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Equipment.css"

export const EquipmentList = () => {
    const { ships, getShips, miningLasers, getMiningLasers, consumables, getConsumables } = useContext(EquipmentContext);

    const history = useHistory();
  
    useEffect(() => {
      getShips().then(getConsumables).then(getMiningLasers)
    }, []);

  return (
    <>
      <h1 className="goldenRodText center">Equipment</h1>

      <h2 className="goldenRodText center">Ships</h2>
        
        <div className="flexEquipment goldenRodBox blueText center">
        {/* map through ships and display manufacturer and name */}

        {ships.map(ship => ( <Link to={`/ships/detail/${ship.id}`}><div className="post">{ship.manufacturer} {ship.name}</div> </Link>))}
        </div>
      

      <h2 className="goldenRodText center">Mining Lasers</h2>
      

        <div className="flexEquipment goldenRodBox blueText center">
        {/* map through lasers and display name */}

        { miningLasers.map(laser => ( <Link to={`/lasers/detail/${laser.id}`}> <div className="post">{laser.manufacturer} {laser.name}</div></Link>))}
        </div>
        
      

      <h2 className="goldenRodText center">Mining Consumables</h2>
      
        <div className="flexEquipment goldenRodBox blueText center">
        {/* map through ships and display name */}

        {consumables.map(consumable => ( <Link to={`/consumables/detail/${consumable.id}`}> <div className="post">{consumable.manufacturer} {consumable.name}</div> </Link>))}
        </div>
        
      
    </>
  );
};