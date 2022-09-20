import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { addList } from "../../modules/ListManager";
import "./List.css"

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

    const handleSubmit = p => {
        p.preventDefault()

        const list = {
            list_name: currentList.list_name
        }

        addList(list)
            .then(() => history.push("/list"))
    }


    return (
        <form className="listForm">
            <h2 className="listForm__title">Create New List</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="list_name">Title: </label>
                    <input type="text" name="list_name" required autoFocus className="form-control"
                        value={currentList.list_name}
                        onChange={changeListState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={p => {
                    // Prevent form from being submitted
                    p.preventDefault()

                    const list = {
                        list_name: currentList.list_name
                    }

                    // Send POST request to your API
                    addList(list)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Create List</button>
        </form>
    )
}