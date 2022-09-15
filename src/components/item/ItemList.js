import React, { useEffect, useState, useNavigate } from "react"
import { getAllItems, deleteItem } from "../../modules/ItemManager";
import "./Item.css"
import { ItemCard } from "./ItemCard";

export const ItemList = () => {
    const [ items, setItems ] = useState([]);

    const navigate = useNavigate();

    const getItems = () => {
        return getAllItems().then(itemsFromAPI => {
            setItems(itemsFromAPI)
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
        < >
        <section className="section-content">
        <button type="button"
         className="btn"
         onClick={() => {navigate("/item/create")}}>
             Create New item
        </button>
    </section>
         <div className="container-cards">
          {items.map(item => <ItemCard
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem} 
        />)}
        </div>
    </>
    );

};

//     const [ items, setItems ] = useState([])
//     const [ lists, setLists ] = useState([])

//     useEffect(() => {
//         getList().then(listsData => setLists(listsData))
//         getItem().then(itemsData => setItems(itemsData))
//     }, [])

//     useEffect(() => {
//         if (lists && items) {
//             getList().then(listsData => {
//                 const combined = listsData.map(lists => {
//                     lists.items = items.filter(i => i.listId === lists.id)
//                     return lists
//                 })
//                 setLists(combined)
//             })
//         }
//     }, [lists, items])

//     return (
//         <div style={{ margin: "0rem 3rem"}}>
//             <h1>Items</h1>
//             <article className="lists">
//                 {
//                     lists.map(list => {
//                         list.item = items.filter(i => list.id === i.list_id) || []
//                         return <section key={list.id} className="list">
//                             <h2>{list.name}</h2>

//                             {/* <h4>Items</h4>
//                             { list.items && list.items.map(a => <div key={`list--${i.id}`}>{i.name}</div>)} */}
//                         </section>
//                     })
//                 }
//             </article>
//         </div>
//     )
// }