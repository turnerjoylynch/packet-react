import React, { useState, useEffect } from "react"
import {useHistory, useParams} from "react-router-dom";
import { updateList, deleteList, getListById } from "../../modules/ListManager.js";

export const ListEditForm = () => {
    const history = useHistory();
    const {listId} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const [currentList, setCurrentList] = useState({ list_name: ""});

    const loadList = () => {
        if (listId) {
            getListById(listId)
                .then(data => {
                    setCurrentList({
                        id: listId,
                        list_name: data.list_name
                    })
            })
        }
        
    }
    
    useEffect(() => {
        loadList()
    }, [])


    const handleFieldChange = (domEvent) => {
        const updatedList = {...currentList}
        let selectedVal = domEvent.target.value
        updatedList[domEvent.target.name] = selectedVal
        setCurrentList(updatedList)
    }

    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="listName"
                  value={currentList.list_name}
                  onChange={handleFieldChange}
                />
                <label htmlFor="name"> List name</label>
              </div>
              <button type="submit"
                onClick={p => {
                    p.preventDefault()

                    const editedList = {
                        id: listId,
                        list_name: currentList.list_name
                    }
                    
                    updateList(editedList, listId)
                        .then(() => history.push('/'))
                }}
                className="btn btn-primary" 
                id="createBtn">Update</button>

            <button className="btn btn-danger" onClick={() => {deleteList(listId)}}>Delete</button>
            </fieldset>
          </form>
        </>
      );
    }