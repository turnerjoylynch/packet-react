import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAllLists } from "../../modules/ListManager.js"
import { addItem } from "../../modules/ItemManager.js"
import "./Item.css"


export const ItemForm = () => {
    const history = useHistory()
    const [lists, setAllLists] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentItem, setCurrentItem] = useState({
        item_name: "",
        lists: []
    })

    useEffect(() => {
        getAllLists().then((data) => setAllLists(data))
    }, [])

    const changeItemState = (domItem) => {
        const newItem = { ...currentItem }
        const name = domItem.target.name
        if (name === 'listId') {
            const id = parseInt(domItem.target.value)
            if (!newItem['lists'].includes(id)) {
                newItem['lists'].push(id)
            }
        }
        else {
            newItem[name] = domItem.target.value
        }
        setCurrentItem(newItem)
        console.log(currentItem)
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
                    <label htmlFor="item_name">Item Name: </label>
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
                        lists: currentItem.lists,
                        item_name: currentItem.item_name
                    }

                    addItem(item)
                        .then(() => history.push("/list"))
                }}
                className="btn btn-primary">Add</button>
        </form>
    )
}