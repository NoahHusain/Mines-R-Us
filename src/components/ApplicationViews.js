import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./Posts/PostProvider"
import { PostList } from "./Posts/PostList"
import { PostForm } from "./Posts/PostForm"
import { OreProvider } from "./Ores/OreProvider"
import { MoonProvider } from "./Moons/MoonProvider"

export const ApplicationViews = () => {
    return (
        <>
            <PostProvider>
                <MoonProvider>
                <OreProvider>

                <Route exact path="/">
                    <PostList />
                </Route>
                
                <Route exact path="/posts">
                    <PostList />
                </Route>

                <Route exact path="/posts/create">
                    <PostForm />
                </Route>

                </OreProvider>
                </MoonProvider>
            </PostProvider>
        </>
    )
}