import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { getAllItems, deleteItem } from "../../modules/ItemManager";
import "./Item.css"
import { ItemCard } from "./ItemCard";

export const ItemList = () => {
    const [items, setItem] = useState([])
    const history = useHistory()
    const handleItemDelete = (id) => {
        deleteItem(id).then(() => getAllItems().then(data => setItem(data)))
    }

    useEffect(() => {
        getAllItems().then(data => setItem(data))
    }, [])

    return (
        <>
            <div className="container-cards">

            <Button variant="outline-success" size="md"
                    onClick={() => {
                        history.push({ pathname: `/item/create` })
                    }}
                >Create New Item</Button>

            </div>
            <article className="items__list">
            <center><h2>All Items</h2></center>
                {items.map(item =>
                    <ItemCard
                        key={item.id}
                        item={item}
                        deleteItem={handleItemDelete} />
                )}
            </article>


        </>
    )
}