import React, { useState, useEffect, useHistory } from "react";
import { Card, Button, CardGroup, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { deleteItem } from "../../modules/ItemManager";
import { getAllLists } from "../../modules/ListManager";
import { ListCard } from "./ListCard";

import "./List.css";

export const ListDetail = () => {
  // const [lists, setList] = useState([])

  // useEffect(() => {
  //     getAllLists().then(data => setList(data))
  // }, []);

  <article className="lists__list">
  <h2> List Detail </h2>
  {lists.map(list =>
      <ListCard
          key={list.id}
          list={list} />
  )}
</article>
}