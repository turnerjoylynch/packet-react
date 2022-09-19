import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
// import { getItemByListId } from "../../modules/ItemManager";
import { getAllLists } from "../../modules/ListManager";
import "./List.css"
import { ListCard } from "./ListCard";

export const ListList = () => {
    const [lists, setList] = useState([])

    useEffect(() => {
        getAllLists().then(data => setList(data))
    }, [])

    return (
        <>
        <article className="lists__list">
        <h2>All Lists</h2>
            {lists.map(list =>
                <ListCard
                key={list.listId}
                list={list} />
            )}
        </article> 
        </>
    )





//     const [items, setItems] = useState([])
//     const [lists, setLists] = useState([])

    const history = useHistory()

//     const getLists = () => {
//         return getAllLists().then(data => {
//             setLists(data)
//         });
//     };

//     const getItems = () => {
//         return getItemByListId().then(data => {
//             setItems(data)
//         });
//     };

//     useEffect(() => {
//         getLists();
//         getItems();
//     }, [])

//     // My code seems to kick off an infinite loop when this module loads
//     useEffect(() => {
//         if (lists && items) {
//             getAllLists().then(listsData => {
//                 const combined = listsData.map(lists => {
//                     lists.items = items.filter(i => i.listId === lists.id)
//                     return lists
//                 })
//                 setLists(combined)
//             })
//         }
//     }, [lists, items])


    return (
        <div className="container-cards">

            <button className="btn"
                onClick={() => {
                    history.push({ pathname: `/list/create` })
                }}
            >Create New List</button>

            {lists.map(list => <ListCard
                key={list.id}
                list={list} />)}
        </div>
    );
}
