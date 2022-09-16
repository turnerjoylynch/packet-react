import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { addList } from './ListManager.js'
import "./List.css"

export const List = () => (
    <section className="list">
        <h3 className="list__name">List.js List text display</h3>
    </section>
)

export const ListForm = () => {
    const history = useHistory()

    const [currentList, setCurrentList] = useState({
        list_name: "",
    })


    const changeListState = (domEvent) => {
        const newListState = {...currentList}
        newListState[domEvent.target.name] = domEvent.target.value
        setCurrentList(newListState)
    }

    return (
        <form className="listForm">
            <h2 className="listForm__title">Create New List</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentList.list_name}
                        onChange={changeListState}
                    />
                </div>
            </fieldset>

            <div>
            <fieldset> 
                <div className="form-group"> Create New List </div>
            </fieldset>
            </div>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const list = {
                        list_name: currentList.list_name
                    }

                    // Send POST request to your API
                    addList(list)
                        .then(() => history.push("/list"))
                }}
                className="btn btn-primary">Create List</button>
        </form>
    )
}