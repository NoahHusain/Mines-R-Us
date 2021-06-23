import React from "react";
import { Route } from "react-router-dom";
import { PostProvider } from "./Posts/PostProvider";
import { PostList } from "./Posts/PostList";
import { PostEdit } from "./Posts/PostEdit";
import { PostForm } from "./Posts/PostForm";
import { OreProvider } from "./Ores/OreProvider";
import { MoonProvider } from "./Moons/MoonProvider";
import { PlanetProvider } from "./Planets/PlanetProvider";
import { OreList } from "./Ores/OreList";
import { NoobsList } from "./Noobs-Guide/NoobsList";
import { EquipmentList } from "./Equipment/EquipmentList";
import { EquipmentProvider } from "./Equipment/EquipmentProvider";
import { ShipDetail } from "./Equipment/ShipDetail";
import { LaserDetail } from "./Equipment/LaserDetail";
import { ConsumableDetail } from "./Equipment/ConsumableDetail";


export const ApplicationViews = () => {
  return (
    <>
      <PostProvider>
        <EquipmentProvider>
        <PlanetProvider>
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

              <Route exact path="/posts/edit/:postId(\d+)">
                <PostEdit />
              </Route>

              <Route exact path="/Ores">
                <OreList />
              </Route>

              <Route exact path="/Noobs-Guide">
                <NoobsList />
              </Route>

              <Route exact path="/Equipment">
                <EquipmentList />
              </Route>

              <Route exact path="/ships/detail/:shipId(\d+)">
              <ShipDetail />
            </Route>

            <Route exact path="/lasers/detail/:laserId(\d+)">
              <LaserDetail />
            </Route>

            <Route exact path="/consumables/detail/:consumableId(\d+)">
              <ConsumableDetail />
            </Route>
              
            </OreProvider>
          </MoonProvider>
        </PlanetProvider>
        </EquipmentProvider>
      </PostProvider>
    </>
  );
};
