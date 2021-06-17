import React, { useContext, useEffect, useState } from "react";
import "./Post.css";
import { useHistory, useParams } from "react-router-dom";
import { PostContext } from "./PostProvider";
import { OreContext } from "../Ores/OreProvider";
import { MoonContext } from "../Moons/MoonProvider";
import { PlanetContext } from "../Planets/PlanetProvider";

export const PostEdit = () => {
  const { updatePost, getPostById } = useContext(PostContext);
  const { ores, getOres } = useContext(OreContext);
  const { moons, getMoons } = useContext(MoonContext);
  const { planets, getPlanets } = useContext(PlanetContext);

  // const [posts, setPosts] = useState({});
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { postId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newPost = { ...post };
    newPost[event.target.name] = event.target.value;
    setPost(newPost);
  };

  useEffect(() => {
    getOres();
  }, []);

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    getMoons();
  }, []);
  
  useEffect(() => {
    getPostById(postId).then(post => {
      setPost(post)
    })
  }, [postId]);

  const handleSavePost = (postId) => {
    const userId = localStorage.getItem("mines_customer");
    updatePost({
          id: postId,
          userId: parseInt(userId),
          oreId: parseInt(post.oreId),
          planetId: parseInt(post.planetId),
          moonId: parseInt(post.moonId),
          landingPoint: post.landingPoint,
          description: post.description,
          rockData: post.rockData,
      })
      .then(() => history.push("/posts"))
    }

  return (
    <>
      <h1 className="goldenRodText center">Edit Post</h1>

      <form className="flex">
        <fieldset>
          <div className="center posts blueText">
            <label htmlFor="ore">Ore:</label>
            <select
              value={post.oreId}
              name="oreId"
              id="oreId"
              className="center post blueText"
              onChange={handleControlledInputChange}
            >
              <option value="0">Select an Ore</option>
              {ores.map((ore) => (
                <option key={ore.id} value={ore.id}>
                  {ore.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts blueText">
            <label htmlFor="planet">Planet:</label>
            <select
              value={post.planetId}
              name="planetId"
              id="planetId"
              className="center post blueText"
              onChange={handleControlledInputChange}
            >
              <option value="0">Select Planet</option>
              {planets.map((planet) => (
                <option key={planet.id} value={planet.id}>
                  {planet.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts blueText">
            <label htmlFor="moon">Moon:</label>
            <select
              value={post.moonId}
              name="moonId"
              id="moonId"
              className="center post blueText"
              onChange={handleControlledInputChange}
            >
              <option value="0">Select Moon (if applicable)</option>
              {moons.map((moon) => (
                <option key={moon.id} value={moon.id}>
                  {moon.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts blueText">
            <label htmlFor="landingPoint">Landing Point:</label>
            <input
              value={post.landingPoint}
              type="landingPoint"
              id="landingPoint"
              name="landingPoint"
              className="center post blueText"
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts blueText">
            <label htmlFor="description">Description:</label>
            <input
              value={post.description}
              type="description"
              id="description"
              name="description"
              className="center post blueText"
              defaultValue={post.description}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts blueText">
            <label htmlFor="rockData">Rock Data:</label>
            <input
              value={post.rockData}
              type="rockData"
              id="rockData"
              name="rockData"
              className="center post blueText"
              defaultValue={post.rockData}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>

        <button
          className="center post blueText"
          onClick={(event) => {
            event.preventDefault();
            handleSavePost(postId);
          }}
        >
          Edit Post
        </button>
      </form>
    </>
  );
};
