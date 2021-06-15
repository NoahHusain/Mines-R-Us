import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./Posts/PostProvider"
import { PostList } from "./Posts/PostList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <PostProvider>
                <Route exact path="/">
                    <PostList />
                </Route>
            </PostProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <PostProvider>
                <Route exact path="/posts">
                    <PostList />
                </Route>
            </PostProvider>
        </>
    )
}