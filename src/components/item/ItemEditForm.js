import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getItemById, updateItem } from "../../modules/ItemManager.js"
import { getAllLists } from "../../modules/ListManager.js"

export const ItemEditForm = () => {
    const history = useHistory();
    const { itemId } = useParams();
    const [lists, setLists] = useState([]);

    const loadLists = () => {
        return getAllLists().then(data => {
            setLists(data)
        })
    }

    useEffect(() => {
        loadLists()
    }, [])

    const [currentItem, setCurrentItem] = useState({
        item_name: "",
        lists: [],
        created_on: ""
    })

    const loadItem = () => {
        if (itemId) {
            getItemById(itemId)
                .then(data => {
                    setCurrentItem({
                        id: itemId,
                        item_name: data.item_name,
                        lists: data.lists,
                        created_on: data.created_on
                    })
                })
        }

    }

    useEffect(() => {
        loadItem()
    }, [itemId])


    // const handleFieldChange = (domEvent) => {
    //     const updatedItem = {...currentItem}
    //     let selectedVal = domEvent.target.value
    //     updatedItem[domEvent.target.name] = selectedVal
    //     setCurrentItem(updatedItem)
    // }

    const handleFieldChange = (domItem) => {
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
            <h2 className="itemForm__title">Update {currentItem.item_name}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="list">List: </label>
                    <select
                        name="listId"
                        id="list"
                        required
                        className="form-control"
                        value=""
                        onChange={handleFieldChange}>
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
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="item_name"
                        id="item_name"
                        required autoFocus
                        className="form-control"
                        value={currentItem.item_name}
                        onChange={handleFieldChange}

                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={t => {
                    t.preventDefault()

                    const editedItem = {
                        id: itemId,
                        lists: currentItem.lists,
                        item_name: currentItem.item_name,
                        created_on: currentItem.created_on
                    }

                    updateItem(editedItem)
                        .then(() => history.push('/item'))
                }}
                className="btn btn-primary"
                id="createBtn">Update</button>
        </form>
    )
}