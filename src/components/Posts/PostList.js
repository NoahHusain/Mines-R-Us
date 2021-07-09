import { PostContext } from "./PostProvider";
import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Post.css";

export const PostList = () => {
  const { getPosts, posts, deletePost } = useContext(PostContext);
  const history = useHistory();

  useEffect(() => {
    getPosts();
  }, []);

  const handleDeletePost = (postId) => {
    deletePost(postId);
  };

  const handleUpdatePost = (postId) => {
    console.log(postId);
    history.push(`/posts/edit/${postId}`);
  };

  const deletePostButton = (userId, postId) => {
    if (userId == localStorage.getItem("mines_customer") || localStorage.getItem("mines_customer") === 5) {
      return <button
      className="post blueText"
      id={`post--${postId}`}
      onClick={(event) => {
        event.preventDefault();
        handleDeletePost(postId);
      }}
    >
      Delete Post
    </button>
    }
    else {
      return 
    }
  }
  
  const editPostButton = (userId, postId) => {
    if (userId == localStorage.getItem("mines_customer") || localStorage.getItem("mines_customer") === 5 ) {
      return <button
      className="post blueText"
      id={`post--${postId}`}
      onClick={(event) => {
        event.preventDefault();
        handleUpdatePost(postId);
      }}
    >
      Edit Post
    </button>
    }
    else {
      return 
    }
  }

  return (
    <>
      <h1 className="goldenRodText center">Posts</h1>

      <button
        className="create__button"
        onClick={() => history.push("/Posts/create")}
      >
        Found an Ore Patch?
      </button>

      {posts.map((post) => (
        <section className="posts">
          <article className="post" id={`post--${post.id}`}>
            <div className="post__oreId blueText">Ore: {post.ore.name}</div>
            <div className="post__planetId blueText">
              Planet: {post.planet.name}
            </div>
            <div className="post__moonId blueText">
              {post.moon ? `Moon: ${post.moon.name}` : null}
              {/* If moon has an ID, render the div. If not, do not render the div */}
            </div>
            <div className="post__landingPoint blueText">
              Landing Point: {post.landingPoint}
            </div>
            <div className="post__description blueText">
              Description: {post.description}
            </div>
            <div className="post_rockData blueText">
              Largest Rock Found: {post.rockData}
            </div>
            <div className="post__userId blueText">
              Posted By: {post.user.name} on {post.timestamp}
            </div>
            {deletePostButton(post.userId, post.id)}
            {editPostButton(post.userId, post.id)}
            
          </article>
        </section>
      ))}
    </>
  );
};






