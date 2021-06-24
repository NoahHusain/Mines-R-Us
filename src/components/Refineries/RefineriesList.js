import { RefineryContext } from "./RefineriesProvider";
import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Refineries.css"

export const RefineriesList = () => {
    const { refineries, getRefineries } = useContext(RefineryContext);

    const history = useHistory();
  
    useEffect(() => {
        getRefineries()
    }, []);

  return (
    <>
      <h1 className="goldenRodText center">Refineries</h1>
        
        <div className="flexEquipment goldenRodBox blueText center">
        {/* map through ships and display manufacturer and name */}

        {refineries.map(refinery => ( <Link to={`/refineries/detail/${refinery.id}`}><div className="post">{refinery.name}</div> </Link>))}
        </div>
      

      
    </>
  );
};