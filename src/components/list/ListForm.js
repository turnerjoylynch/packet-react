import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAllItems } from "../../modules/ItemManager.js"
import { addList } from "../../modules/ListManager";
import "./List.css"

export const ListForm = () => {
    const history = useHistory()
    const [items, setAllItems] = useState([])

    const [currentList, setCurrentList] = useState({
        list_name: "",
        items: []
    })

    useEffect(() => {
        getAllItems().then((data) => setAllItems(data))
    }, [])

    const changeListState = (domList) => {
        const newList = {...currentList}
        const name = domList.target.name
        if (name === 'itemId') {
            const id = parseInt(domList.target.value)
            if (!newList['items'].includes(id)) {
                newList['items'].push(id)
            }
        }
        else {
            newList[name] = domList.target.value
        }
        setCurrentList(newList)
        console.log(currentList)
    }


    return (
        <form className="listForm">
            <h2 className="listForm__title">Create New List</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="list_name">List Name: </label>
                    <input type="text" name="list_name" required autoFocus className="form-control"
                        value={currentList.list_name}
                        onChange={changeListState}
                    />
                </div>
            </fieldset>

            <fieldset>
            <div className="form-group">
                    <label htmlFor="items">Items: </label>
                    <select name="itemId" required autoFocus className="form-control"
                        value={currentList.itemId}
                        onChange={changeListState}>
                        <option value="0">Select Items</option>
                        {
                            items.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.item_name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <div>
            <fieldset> 
                <div className="form-group"> Create New List </div>
            </fieldset>
            </div>
            <button type="submit"
                onClick={t => {
                    t.preventDefault()

                    const list = {
                        list_name: currentList.list_name,
                        items: currentList.items
                    }

                    // Send POST request to your API
                    addList(list)
                        .then(() => history.push("/list"))
                }}
                className="btn btn-primary">Create List</button>
        </form>
    )
}