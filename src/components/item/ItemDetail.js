import React, { useState, useEffect } from "react";
import {useParams, Link, useHistory } from "react-router-dom"
import { getItemById, deleteItem } from "../../modules/ItemManager";
import { ListList } from "../list/ListList";

import "./ItemDetail.css";

export const ItemDetail = () => {
  const [item, setItem] = useState({ item_name: ""});
  const [isLoading, setIsLoading] = useState(true);

  const {itemId} = useParams();
  const navigate = useHistory();

  useEffect(() => {
    console.log("useEffect", itemId)
    getItemById(itemId)
      .then(item => {
        setItem(item);
        setIsLoading(false);
      });
  }, [itemId]);

  const handleDelete = () => {
    setIsLoading(true);
    deleteItem(itemId).then(() =>
      navigate("/items")
    );
  };

  return (
    < >
    <section className="item">
      <h3 className="item__name" >{item.item_name}</h3>
      </section>
      <Link to={`/item/${item.id}/edit`}>
            <button className="btn-small">Edit</button>
          </Link>
      <button type="button" className="btn-small" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button> 
        <div className="item-container-cards">
          {<ListList />}
        </div>
        </>
     );
};