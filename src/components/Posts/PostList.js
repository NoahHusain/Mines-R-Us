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
 
    const html = posts.map(post => {
        return (
            <>

            <button onClick={() => history.push("/Posts/create")}>
                Found an Ore Patch?
            </button>

            <section className="posts">

        <div className="post" id={`post--${post.id}`}>
            
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
            <div className="post__userId blueText opaque">
            Posted By: { post.user.name }
            </div>
            </div>
            </div>
            </section>
        </>
        )
    })
    return html
}