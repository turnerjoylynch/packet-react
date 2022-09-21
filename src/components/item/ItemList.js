import React, { useEffect, useState, useHistory } from "react"
import { getAllItems, deleteItem } from "../../modules/ItemManager";
import "./Item.css"
import { ItemCard } from "./ItemCard";

export const ItemList = () => {
    const [ items, setItems ] = useState([]);
    const history = useHistory()

    const getItems = () => {
        return getAllItems().then(data => {
            setItems(data)
        });
    };

    useEffect(() => {
        getItems();
    }, []);

    const handleDeleteItem = id => {
        deleteItem(id)
        .then(() => getAllItems().then(setItems));
    };


    return (
        <>
            <div className="container-cards">

                <button className="btn"
                    onClick={() => {
                        history.push({ pathname: `/idea/create` })
                    }}
                >Create New Idea</button>

            </div>
            <article className="lists__list">
                <h2>All Ideas</h2>
                {items.map(item =>
                    <ItemCard
                        key={item.id}
                        item={item}
                        />
                )}
            </article>
            

        </>
    )
}
