import React, { useState, useEffect, useHistory } from "react";
import { getListById, getAllLists } from "../../modules/ListManager";
import { ListCard } from "./ListCard";

import "./List.css";

export const ListDetail = () => {
  const [lists, setList] = useState([])

  useEffect(() => {
      getAllLists().then(data => setList(data))
  }, [])

  return (
    <>
        <article className="lists__list">
        <h2> List Detail </h2>
            <ListCard/>
      </article>
    </>
  )
}