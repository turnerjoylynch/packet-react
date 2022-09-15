import React, { useEffect, useState } from "react"
import { getItemById } from "../../modules/ItemManager";
import { getAllLists } from "../../modules/ListManager";
import "./List.css"

export const ListList = () => {
    const [ items, setItems ] = useState([])
    const [ lists, setLists ] = useState([])

    useEffect(() => {
        getAllLists().then(listsData => setLists(listsData))
        getItemById().then(itemsData => setItems(itemsData))
    }, [])

    // My code seems to kick off an infinite loop when this module loads
    // useEffect(() => {
    //     if (lists && items) {
    //         getAllLists().then(listsData => {
    //             const combined = listsData.map(lists => {
    //                 lists.items = items.filter(i => i.listId === lists.id)
    //                 return lists
    //             })
    //             setLists(combined)
    //         })
    //     }
    // }, [lists, items])

    return (
        <div style={{ margin: "0rem 3rem"}}>
            <h1>Lists</h1>
            <article className="lists">
                {
                    lists.map(list => {
                        list.item = items.filter(i => list.id === i.list_id) || []
                        return <section key={list.id} className="list">
                            <h2>{list.name}</h2>

                            {/* <h4>Items</h4>
                            { list.items && list.items.map(a => <div key={`list--${i.id}`}>{i.name}</div>)} */}
                        </section>
                    })
                }
            </article>
        </div>
    )
}