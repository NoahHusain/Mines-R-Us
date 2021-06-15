import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./Posts/PostProvider"
import { PostList } from "./Posts/PostList"

export const ApplicationViews = () => {
    return (
        <>
            <PostProvider>
                <Route exact path="/">
                    <PostList />
                </Route>
                
                <Route exact path="/posts">
                    <PostList />
                </Route>
            </PostProvider>
        </>
    )
}