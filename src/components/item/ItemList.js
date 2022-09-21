import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
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

                <button className="btn"
                    onClick={() => {
                        history.push({ pathname: `/item/create` })
                    }}
                >Create New Item</button>

            </div>
            <article className="items__list">
                <h2>All Items</h2>
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