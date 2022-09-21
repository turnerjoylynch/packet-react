import React from "react"
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./Item.css"
import "../../modules/ItemManager"



export const ItemCard = ({ item, deleteItem }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3> <span className="content-itemname">
            {item.item_name}
          </span></h3>
          <Link to={`/item/${item.id}/edit`}>
            <button>Edit</button>
          </Link>
          <Button variant="outline-danger" size="sm" onClick={() => { deleteItem(item.id) }}>x</Button>
        </div>
      </div>
    );
  }