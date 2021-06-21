import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Noobs.css"
import { Prelude, PartOne, PartTwo } from "./NoobsContent";

export const NoobsList = () => {

  return (
    <>
    <h1 className="goldenRodText center">Noobs Guide</h1>

    <img className="prospector" src="https://starcitizen.tools/images/d/dd/Prospector_-_Hovering_mining_on_cliffside_1.jpg?version=d91df8db9e0385c14393bbef6e39c5f1"></img>
    
    <h2 className="goldenRodText center">Prelude: Introduction</h2>
    <p className="blueText post">{Prelude()}</p>

    <h2 className="goldenRodText center">Part One: Ships</h2>
    <p className="blueText post">{PartOne()}</p>

    <h2 className="goldenRodText center">Part Two: Equipment</h2>
    <p className="blueText post">{PartTwo()}</p>


    </>
  );
};