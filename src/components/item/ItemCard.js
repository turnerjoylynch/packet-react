import React from "react"
import { Link } from 'react-router-dom';
import { Card, CardGroup, Button } from "react-bootstrap";
import "./Item.css"
import "../../modules/ItemManager"



export const ItemCard = ({ item, deleteItem }) => {
    return (
      <Card >
            <Card.Body>
      <div className="card">
        <div className="card-content">
        <Card.Subtitle>{item.item_name}</Card.Subtitle>
          <Link to={`/item/${item.id}/edit`}>
          <Button variant="outline-danger" size="sm">Edit</Button>{'  '}
          </Link>
          <Button variant="outline-danger" size="sm" onClick={() => { deleteItem(item.id) }}>x</Button>
        </div>
      </div>
      </Card.Body>
      </Card >
    );
  }