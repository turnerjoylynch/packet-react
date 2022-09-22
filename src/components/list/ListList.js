import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getAllLists } from "../../modules/ListManager";
import { Button } from "react-bootstrap";
import "./List.css"
import { ListCard } from "./ListCard";

export const ListList = () => {
    const [lists, setList] = useState([])
    const history = useHistory()

    useEffect(() => {
        getAllLists().then(data => setList(data))
    }, [])

    return (
        <>
            <div className="container-cards">

            <Button variant="outline-success" size="md"
                    onClick={() => {
                        history.push({ pathname: `/list/create` })
                    }}
                >Create New List</Button>

            </div>
            <article className="lists__list">
            <center><h2>All Lists</h2></center>
                {lists.map(list =>
                    <ListCard
                        key={list.id}
                        list={list} />
                )}
            </article>
            

        </>
    )
}