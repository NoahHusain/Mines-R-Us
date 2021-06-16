import React, { useContext, useEffect, useState } from "react"
import "./Post.css"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider";
import { OreContext } from "../Ores/OreProvider";

export const PostForm = () => {
    const { addPost, updatePost } = useContext(PostContext)
    const {ores, getOres} = useContext(OreContext)

    
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

    // const handleSavePost = () => {
    //   if (postId){
    //       //PUT - update
    //       updatePost({
    //           id: post.id,
    //           userId: post.userId,
    //           oreId: post.oreId,
    //           planetId: post.planetId,
    //           moonId: post.moonId,
    //           landingPoint: post.landingPoint,
    //           description: post.description,
    //           rockData: post.rockData,
    //       })
    //       .then(() => history.push(`/posts`))
    //     }else {
    //       //POST - add
    //       addPost({
    //           userId: parseInt(post.userId),
    //           oreId: parseInt(post.oreId),
    //           planetId: parseInt(post.planetId),
    //           moonId: parseInt(post.moonId),
    //           landingPoint: post.landingPoint,
    //           description: post.description,
    //           rockData: post.rockData,
    //       })
    //       .then(() => history.push("/posts"))
    //     }
    //   }


    return (
      <>
      <h1 className="goldenRodText center">New Post</h1>

        <form className="flex">
      <fieldset>
          <div className="center posts blueText">
            <label htmlFor="location">Ore:</label>
            <select value={null} name="oreId" id="oreId" className="center post blueText" onChange={handleControlledInputChange}>
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
            <label htmlFor="location">Planet:</label>
            <select value={null} name="oreId" id="oreId" className="center post blueText" onChange={handleControlledInputChange}>
              <option value="0">Select Planet</option>
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
            <label htmlFor="location">Moon:</label>
            <select value={null} name="oreId" id="oreId" className="center post blueText" onChange={handleControlledInputChange}>
              <option value="0">Select Moon (if applicable)</option>
              {ores.map(ore => (
                <option key={ore.id} value={ore.id}>
                  {ore.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        </form>
        </>
    )
}
