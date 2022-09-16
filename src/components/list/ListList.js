import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getItemById } from "../../modules/ItemManager";
import { getAllLists } from "../../modules/ListManager";
import "./List.css"

export const ListList = () => {
    const history = useHistory()
    const [ items, setItems ] = useState([])
    const [ lists, setLists ] = useState([])

    useEffect(() => {
        getAllLists().then(listsData => setLists(listsData))
        getItemById().then(itemsData => setItems(itemsData))
    }, [])

    // My code seems to kick off an infinite loop when this module loads
    useEffect(() => {
        if (lists && items) {
            getAllLists().then(listsData => {
                const combined = listsData.map(lists => {
                    lists.items = items.filter(i => i.listId === lists.id)
                    return lists
                })
                setLists(combined)
            })
        }
    }, [lists, items])


    return (
        <div className="container-cards">
          
          <button className="btn"
            onClick={() => {
              history.push({ pathname: `/list/create` })
            }}
          >Create New Trip</button>
    
          {lists.map(list => <ListCard
            key={list.id}
            list={list} />)}
        </div>
      );
    }

    // return (
    //     <div style={{ margin: "0rem 3rem"}}>
    //         <h1>Lists</h1>
    //         <article className="games">
    //         {
    //             lists.map(list => {
    //                 return <section key={`list--${list.id}`} className="list">
    //                     <div className="list__title">{list.title}</div>
    //                     <div className="list__items">{items.listId}</div>
    //                     <button className="btn btn-2 btn-sep icon-create"
    //                         onClick={() => {
    //                             history.push({ pathname: "/list/new" })
    //                         }}
    //                     > New List</button>
    //                 </section>

    //             })
    //         }

    //         </article>
    //     </div>
    // )
}