import React, { useContext, useEffect, useState } from "react";
import { RefineryContext } from "./RefineriesProvider";
import "./Refineries.css";
import { useParams, useHistory } from "react-router-dom";

export const RefineryDetail = () => {
  const { getRefineryById } = useContext(RefineryContext);
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


  const history = useHistory();

  const { refineryId } = useParams();

  useEffect(() => {
    getRefineryById(refineryId).then(setRefinery);
  }, []);

  return (
    <section className="post center">
      <h1 className="goldenRodText">Detailed View</h1>
      <h3 className="goldenRodText">{refinery.name}</h3>
      <div className="blueText">Planet: {refinery.planet.name}</div>
    </section>
  );
};