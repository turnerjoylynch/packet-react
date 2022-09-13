import React, { useEffect, useState } from "react"
import { getItem} from "../item/ItemManager";
import { getList } from "./ListManager";
import "./List.css"

export const ListList = () => {
    const [ items, setItems ] = useState([])
    const [ lists, setLists ] = useState([])

    useEffect(() => {
        getList().then(listsData => setLists(listsData))
        getItem().then(itemsData => setItems(itemsData))
    }, [])

    // useEffect(() => {
    //     if (lists && items) {
    //         getLocations().then(locationsData => {
    //             const combined = locationsData.map(location => {
    //                 location.employees = employees.filter(e => e.location_id === location.id)
    //                 location.animals = animals.filter(a => a.location_id === location.id)
    //                 return location
    //             })
    //             setLocations(combined)
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