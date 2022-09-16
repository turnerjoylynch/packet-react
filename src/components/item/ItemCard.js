import React from "react"
import { Link } from 'react-router-dom';
import "./Item.css"
import "../../modules/ItemManager"


export const ItemCard = ({ item, handleDeleteItem}) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3> <span className="content-itemname">
            {item.itemName}
          </span></h3>
          <Link to={`/item/${item.itemId}`}>
            <button>Details</button>
          </Link>
          <Link to={`/item/${item.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button type="button" onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </div>
      </div>
    );
  }