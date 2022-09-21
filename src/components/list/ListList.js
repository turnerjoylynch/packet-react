import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getAllLists } from "../../modules/ListManager";
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

                <button className="btn"
                    onClick={() => {
                        history.push({ pathname: `/list/create` })
                    }}
                >Create New List</button>

            </div>
            <article className="lists__list">
                <h2>All Lists</h2>
                {lists.map(list =>
                    <ListCard
                        key={list.id}
                        list={list} />
                )}
            </article>
            

        </>
    )
}