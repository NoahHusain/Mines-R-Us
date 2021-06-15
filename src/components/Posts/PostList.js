import { PostContext } from "./PostProvider";
import React, { useContext, useEffect } from "react";
import {useHistory, Link} from 'react-router-dom'
import "./Post.css"

export const PostList = () => {

    const { getPosts, posts } = useContext(PostContext)
    const history = useHistory()
    const { addPost } = useContext(PostContext)

    useEffect(() => {
        getPosts()
    }, [])
 
    return (
        <>
            <h1 className="goldenRodText center">Posts</h1>

            <button className='create__button' onClick={() => history.push("/Posts/create")}>
               Found an Ore Patch?
            </button>
        
                {
                    posts.map(post =>
                        <section className="posts">
                        <article className="post" id={`post--${post.id}`}>

                        
                        <div className="post__oreId blueText opaque">
                        Ore: { post.ore.name }
                        </div>
                        <div className="post__planetId blueText opaque">
                        Planet: { post.planet.name}
                        </div>
                        <div className="post__moonId blueText opaque">
                        Moon: { post.moon.name }
                        </div>
                        <div className="post__landingPoint blueText opaque">
                        Landing Point: { post.landingPoint }
                        </div>
                        <div className="post__description blueText opaque">
                        Description: { post.description }
                        </div>
                        <div className="post_rockData blueText opaque">
                        Largest Rock Found: { post.rockData }
                        </div>
                        <div className="post__userId blueText opaque">
                        Posted By: { post.user.name }
                        </div>
                        </article> 
                        </section>
                    )
                }
        </>
    )
}