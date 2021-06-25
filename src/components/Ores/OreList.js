import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Ore.css";
import { OreContext } from "./OreProvider";

export const OreList = () => {
  const { getOres, ores } = useContext(OreContext);
  const history = useHistory();

  useEffect(() => {
    getOres();
  }, []);


  const exceedinglyRareOres = []
  const rareOres = []
  const lessCommonOres = []
  const commonOres = []
  const exceedinglyCommonOres = []

  const sortedOres = ores.map(ore => {
    switch (ore.rarity) {
      case 'Exceedingly Rare':
        exceedinglyRareOres.push(ore)
        break;
      
        case 'Rare':
        rareOres.push(ore)
        break;
      
        case 'Less Common':
        lessCommonOres.push(ore)
        break;
      
        case 'Common':
        commonOres.push(ore)
        break;
  
        case 'Exceedingly Common':
        exceedinglyCommonOres.push(ore)
        break;
      
        default:
        break;
      }
    }
  )


  return (
    <>
      <h1 className="goldenRodText center">Ore</h1>

      <h2 className="goldenRodText center">Exceedingly Rare Ores</h2>
      <section className="flexOres goldenRodBox">
      {exceedinglyRareOres.map((ore) => (
          <article className="post centerOres">
            <div className="post__oreId blueText">Name: {ore.name}</div>
            <div className="post__landingPoint blueText">
              Value Raw: {ore.valueRaw} UEC
            </div>
            <div className="post__description blueText">
            Value Refined: {ore.valueRefined} UEC
            </div>
          </article>
      ))}
      </section>
      <h2 className="goldenRodText center">Rare Ores</h2>
      <section className="flexOres goldenRodBox">
      {rareOres.map((ore) => (
          <article className="post centerOres">
            <div className="post__oreId blueText">Name: {ore.name}</div>
            <div className="post__landingPoint blueText">
              Value Raw: {ore.valueRaw} UEC
            </div>
            <div className="post__description blueText">
            Value Refined: {ore.valueRefined} UEC
            </div>
          </article>
      ))}
      </section>
      <h2 className="goldenRodText center">Less Common Ores</h2>
      <section className="flexOres goldenRodBox">
      {lessCommonOres.map((ore) => (
          <article className="post centerOres">
            <div className="post__oreId blueText">Name: {ore.name}</div>
            <div className="post__landingPoint blueText">
              Value Raw: {ore.valueRaw} UEC
            </div>
            <div className="post__description blueText">
            Value Refined: {ore.valueRefined} UEC
            </div>
          </article>
      ))}
      </section>
      <h2 className="goldenRodText center">Common Ores</h2>
      <section className="flexOres goldenRodBox">
      {commonOres.map((ore) => (
          <article className="post centerOres">
            <div className="post__oreId blueText">Name: {ore.name}</div>
            <div className="post__landingPoint blueText">
              Value Raw: {ore.valueRaw} UEC
            </div>
            <div className="post__description blueText">
            Value Refined: {ore.valueRefined} UEC
            </div>
          </article>
      ))}
        </section>
      <h2 className="goldenRodText center">Exceedingly Common Ores</h2>
      {exceedinglyCommonOres.map((ore) => (
        <section className="flexOres goldenRodBox">
          <article className="post centerOres">
            <div className="post__oreId blueText">Name: {ore.name}</div>
            <div className="post__landingPoint blueText">
              Value Raw: {ore.valueRaw} UEC
            </div>
            <div className="post__description blueText">
            Value Refined: {ore.valueRefined}UEC
            </div>
          </article>
        </section>
      ))}
    </>
  );
};