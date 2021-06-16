import React, { useContext, useEffect, useState } from "react"
import "./Post.css"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider";
import { OreContext } from "../Ores/OreProvider";
import { MoonContext } from "../Moons/MoonProvider";
import { PlanetContext } from "../Planets/PlanetProvider";

export const PostForm = () => {
    const { addPost, updatePost } = useContext(PostContext)
    const {ores, getOres} = useContext(OreContext)
    const {moons, getMoons} = useContext(MoonContext)
    const {planets, getPlanets} = useContext(PlanetContext)


    
    const [posts, setPosts] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const {postId} = useParams();
	  const history = useHistory();

    const handleControlledInputChange = (event) => {
      const newPost = { ...posts }
      newPost[event.target.name] = event.target.value
      setPosts(newPost)
    }

    useEffect(() => {
        getOres()
    }, [])

    useEffect(() => {
        getPlanets()
    }, [])

    useEffect(() => {
        getMoons()
    }, [])

    const handleSavePost = () => {
        const userId = localStorage.getItem("mines_customer")  
        const postMoonId = posts.moonId
        const moonId = (postMoonId) => {
          debugger
          if (postMoonId === null || postMoonId === undefined){
            const moonId = "Ore was found on the planet."
            return moonId
          }
          else {
            const moonId = parseInt(postMoonId)
            return moonId
          }
        }
        addPost({
              userId: parseInt(userId),
              oreId: parseInt(posts.oreId),
              planetId: parseInt(posts.planetId),
              moonId: moonId(),
              landingPoint: posts.landingPoint,
              description: posts.description,
              rockData: posts.rockData,
          })
          .then(() => history.push("/posts"))
        }


    return (
      <>
      <h1 className="goldenRodText center">New Post</h1>

        <form className="flex">
      <fieldset>
          <div className="center posts blueText">
            <label htmlFor="ore">Ore:</label>
            <select value={posts.oreId} name="oreId" id="oreId" className="center post blueText" onChange={handleControlledInputChange}>
              <option value="0">Select an Ore</option>
              {ores.map(ore => (
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
            <select value={posts.planetId} name="planetId" id="planetId" className="center post blueText" onChange={handleControlledInputChange}>
              <option value="0">Select Planet</option>
              {planets.map(planet => (
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
            <select value={posts.moonId} name="moonId" id="moonId" className="center post blueText" onChange={handleControlledInputChange}>
              <option value="0">Select Moon (if applicable)</option>
              {moons.map(moon => (
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
            <input value={posts.landingPoint} type="landingPoint" id="landingPoint" name="landingPoint" className="center post blueText" onChange={handleControlledInputChange}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts blueText">
            <label htmlFor="description">Description:</label>
            <input value={posts.description} type="description" id="description" name="description" className="center post blueText" onChange={handleControlledInputChange}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts blueText">
            <label htmlFor="rockData">Rock Data:</label>
            <input value={posts.rockData} type="rockData" id="rockData" name="rockData" className="center post blueText" onChange={handleControlledInputChange}/>
          </div>
        </fieldset>
        
        <button className="btn btn-primary"
          onClick={event => {
            event.preventDefault() 
            handleSavePost()
          }}>Save Post</button>
        </form>
        </>
    )
}
