import React from "react"
import { Route } from "react-router-dom"
import { ListList } from "./list/ListList"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <ListList />
            </Route>
            </>
    )
}