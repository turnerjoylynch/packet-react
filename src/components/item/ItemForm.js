import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAllLists } from './ListManager.js'
import { addItem  } from './ItemManager.js'
import "./Item.css"

// export const Item = () => (
//     <section className="item">
//         <h3 className="item__name">Itemz</h3>
//     </section>
// )

export const ItemForm = () => {
    const history = useHistory()
    const [lists, setAllLists] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentItem, setCurrentItem] = useState({
        listId: 0,
        name: ""
    })

    useEffect(() => {
        getAllLists().then((data) => setAllLists(data))
    }, [])

    const changeItemState = (domItem) => {
        const newItem = {...currentItem}
        newItem[domItem.target.name] = domItem.target.value
        setCurrentItem(newItem)
    }

    return (
        <form className="itemForm">
            <h2 className="itemForm__title">Create New Item</h2>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="list">List: </label>
                    <select name="listId" required autoFocus className="form-control"
                        value={currentItem.listId}
                        onChange={changeItemState}>
                        <option value="0">Select List</option>
                        {
                            lists.map((list) => (
                                <option key={list.id} value={list.id}>
                                    {list.list_name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="item_name">Title: </label>
                    <input type="text" name="item_name" required autoFocus className="form-control"
                        value={currentItem.item_name}
                        onChange={changeItemState}
                    />
                </div>
            </fieldset>

            <div>
            <fieldset> 
                <div className="form-group"> Create New Item </div>
            </fieldset>
            </div>
            <button type="submit"
                onClick={t => {
                    t.preventDefault()

                    const item = {
                        list: parseInt(currentItem.listId),
                        item_name: currentItem.item_name
                    }

                    createItem(item)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Add</button>
        </form>
    )
}