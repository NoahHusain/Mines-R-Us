import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const PostContext = createContext();

// This component establishes what data can be used.
export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    return fetch(
      "https://mines-r-us-api-44tok.ondigitalocean.app/orePatches?_expand=user&_expand=ore&_expand=planet&_expand=moon"
    )
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (postObject) => {
    return fetch("https://mines-r-us-api-44tok.ondigitalocean.app/orePatches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObject),
    }).then(getPosts);
  };

  const deletePost = (orePatchId) => {
    return fetch(
      `https://mines-r-us-api-44tok.ondigitalocean.app/orePatches/${orePatchId}`,
      {
        method: "DELETE",
      }
    ).then(getPosts);
  };

  const updatePost = (orePatch) => {
    return fetch(
      `https://mines-r-us-api-44tok.ondigitalocean.app/orePatches/${orePatch.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orePatch),
      }
    ).then(getPosts);
  };

  const getPostById = (orePatchId) => {
    return fetch(
      `https://mines-r-us-api-44tok.ondigitalocean.app/orePatches/${orePatchId}`
    ).then((res) => res.json());
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
        addPost,
        deletePost,
        updatePost,
        getPostById,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
