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
        name: "",
        listId: 1
    })

    useEffect(() => {
        getAllLists().then(setAllLists)
    }, [])

    const changeItemState = (domEvent) => {
        const newItemState = {...currentItem}
        newItemState[domEvent.target.name] = domEvent.target.value
        setCurrentItem(newItemState)
    }

    return (
        <form className="itemForm">
            <h2 className="itemForm__title">Create New Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentItem.name}
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
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const item = {
                        name: currentItem.name,
                        listId: parseInt(currentItem.listId)
                    }

                    // Send POST request to your API
                    addItem(item)
                        .then(() => history.push("/item"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}