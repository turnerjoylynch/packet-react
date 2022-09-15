import React from "react"
import { Route } from "react-router-dom"
import { ListList } from "./list/ListList"
import { ItemList } from "./item/ItemList"
import { Home } from "../Home.js"


export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/list">
                <ListList />
            </Route>
            <Route exact path="/item">
                <ItemList />
            </Route>
            </>
    )
}