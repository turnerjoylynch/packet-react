import React from "react"
import { Route } from "react-router-dom"
import { ListList } from "./list/ListList.js"
import { ListDetail } from "./list/ListDetail.js"
import { ListEditForm } from "./list/ListEditForm.js"
import { ListForm } from "./list/ListForm.js"
import { ItemList } from "./item/ItemList.js"
import { ItemDetail } from "./item/ItemDetail.js"
import { ItemForm } from "./item/ItemForm.js"
import { ItemEditForm } from "./item/ItemEditForm.js"
import { Home } from "../Home.js"


export const ApplicationViews = () => {
    return <>
                <Route exact path="/">
                    <Home /> 
                </Route> 
                <Route exact path="/list">
                    <ListList />
                </Route>
                <Route exact path="/list/create">
                    <ListForm />
                </Route>
                <Route exact path="/list/:listId(\d+)">
                    <ListDetail />
                </Route>
                <Route exact path="/list/:listId(\d+)/edit">
                    <ListEditForm />
                </Route>
                <Route exact path="/item">
                    <ItemList />
                </Route>
                <Route exact path="/item/create">
                    <ItemForm />
                </Route>
                <Route exact path="/item/:itemId(\d+)">
                    <ItemDetail />
                </Route>
                <Route exact path="/item/:itemId(\d+)/edit">
                    <ItemEditForm />
                </Route>
    </>
}