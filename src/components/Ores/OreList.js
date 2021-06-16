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

  return (
    <>
      <h1 className="goldenRodText center">Ores</h1>

      {ores.map((ore) => (
        <section className="posts">
          <article className="post">
            <div className="post__oreId blueText">Name: {ore.name}</div>
            <div className="post__planetId blueText">
              Rarity: {ore.rarity}
            </div>
            <div className="post__landingPoint blueText">
              Value Raw: {ore.valueRaw}
            </div>
            <div className="post__description blueText">
            Value Refined: {ore.valueRefined}
            </div>
          </article>
        </section>
      ))}
    </>
  );
};
