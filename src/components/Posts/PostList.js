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
              Posted By: {post.user.name}
            </div>
            <button
              className="post blueText"
              id={`post--${post.id}`}
              onClick={(event) => {
                event.preventDefault();
                handleDeletePost(post.id);
              }}
            >
              Delete Post
            </button>
            <button
              className="post blueText"
              id={`post--${post.id}`}
              onClick={(event) => {
                event.preventDefault();
                handleUpdatePost(post.id);
              }}
            >
              Edit Post
            </button>
          </article>
        </section>
      ))}
    </>
  );
};
