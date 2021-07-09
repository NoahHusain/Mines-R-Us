import React, { useContext, useEffect, useState } from "react"
import "./Post.css"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider";
import { OreContext } from "../Ores/OreProvider";
import { MoonContext } from "../Moons/MoonProvider";
import { PlanetContext } from "../Planets/PlanetProvider";

export const PostForm = () => {
    const { addPost, updatePost, getPostById } = useContext(PostContext)
    const {ores, getOres} = useContext(OreContext)
    const {moons, getMoons} = useContext(MoonContext)
    const {planets, getPlanets} = useContext(PlanetContext)


    
    const [posts, setPosts] = useState({moonId: 0})
    const [isLoading, setIsLoading] = useState(false);

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

    useEffect(() => {
      if (isLoading === false) {
        return
      }
      else {
        
        handleSavePost()
      }
  }, [isLoading])


    const checkForm = () => {
      if (
        posts.oreId === undefined ||
        posts.planetId === undefined ||
        posts.landingPoint === undefined ||
        posts.description === undefined ||
        posts.rockData === undefined
      ){return false}
      else {return true}
    }



    const handleSavePost = () => {
        const userId = localStorage.getItem("mines_customer")
        if (checkForm() === true) {
          addPost({
            userId: parseInt(userId),
            oreId: parseInt(posts.oreId),
            planetId: parseInt(posts.planetId),
            moonId: parseInt(posts.moonId),
            landingPoint: posts.landingPoint,
            description: posts.description,
            rockData: posts.rockData,
            timestamp: new Date().toISOString().slice(0, 10)
        })
        .then(() => history.push("/posts"))
        }  
        else {
          window.alert('Please fill in all form fields before submitting post. Moon field can be left blank if not applicable.')
          setIsLoading(false)
        }
      }


    return (
      <>
      <h1 className="goldenRodText center">New Post</h1>

        <form className="flex post">
      <fieldset>
          <div className="center posts  blueText">
            <label className="centerLabel" htmlFor="ore">Ore:</label>
            <select value={posts.oreId} name="oreId" id="oreId" className="center  post blueText" onChange={handleControlledInputChange}>
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
          <div className="center posts  blueText">
            <label htmlFor="planet">Planet:</label>
            <select value={posts.planetId} name="planetId" id="planetId" className="center  post blueText" onChange={handleControlledInputChange}>
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
          <div className="center posts  blueText">
            <label htmlFor="moon">Moon:</label>
            <select value={posts.moonId} name="moonId" id="moonId" className="center  post blueText" onChange={handleControlledInputChange}>
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
          <div className="center posts  blueText">
            <label htmlFor="landingPoint">Landing Point:</label>
            <input value={posts.landingPoint} type="landingPoint" id="landingPoint" name="landingPoint" className="center  post blueText" onChange={handleControlledInputChange}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts  blueText">
            <label htmlFor="description">Description:</label>
            <textarea value={posts.description} type="description" id="description" name="description" className="center  post blueText" onChange={handleControlledInputChange}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="center posts  blueText">
            <label htmlFor="rockData">Rock Data:</label>
            <input value={posts.rockData} type="rockData" id="rockData" name="rockData" className="center  post blueText" onChange={handleControlledInputChange}/>
          </div>
        </fieldset>
        
        <button className="center post blueText"
          disabled={isLoading}
          onClick={event => {
            setIsLoading(true)
            event.preventDefault() 
          }}>Save Post</button>
        </form>
        </>
    )
}
