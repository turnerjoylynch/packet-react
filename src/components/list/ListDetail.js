import React, { useState, useEffect } from "react";
import { Card, Button, CardGroup, ListGroup } from "react-bootstrap"
import {useParams, Link, useHistory } from "react-router-dom"
import { deleteItem } from "../../modules/ItemManager";
// import { getItemByListId, deleteItem } from "../../modules/ItemManager";
import { getAllLists } from "../../modules/ListManager";
import { ListList } from "../list/ListList";

import "./List.css";

export const ListDetail = () => {
  const [list, setList] = useState([])
  const [items, setItems] = useState([])

  const { listId } = useParams();
  const navigate = useHistory();

  useEffect(() => {
    getAllLists().then(data =>
        setList(data))
      }, [])

  const listItems =items.map(item =>
    <CardGroup >
        <Card >
            <Card.Body>
                <Card.Subtitle>{item.item_name}</Card.Subtitle>
                <Card.Text className="text-center">
                    <Link to={`tasks/${item.id}`}>
                        <Button variant="outline-danger" size="sm" onClick={() => {deleteItem(item.id)}}>x</Button>
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    </CardGroup>
)

  return (
      <Card >
          <Card.Body>
              <Card.Title className="text-center"> {list.list_name} </Card.Title>
              <Card.Body>
                  <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                          {listItems}
                      </ListGroup.Item>
                  </ListGroup>
              </Card.Body>
          </Card.Body>
      </Card>
  )
}