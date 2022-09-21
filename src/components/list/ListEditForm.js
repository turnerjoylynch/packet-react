import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import { updateList, deleteList, getListById } from "../../modules/ListManager.js";

export const ListEditForm = () => {
  const history = useHistory();
  const { listId } = useParams();

  const [currentList, setCurrentList] = useState({
    id: 0,
    list_name: "",
    created_on: ""
  });


  const loadList = () => {
    if (listId) {
      getListById(listId)
        .then(data => {
          setCurrentList({
            id: parseInt(listId),
            list_name: data.list_name,
            created_on: data.created_on
          })
        })
    }

  }

  useEffect(() => {
    loadList(listId)
  }, [listId])


  const handleFieldChange = (domEvent) => {
    const updatedList = { ...currentList }
    let selectedVal = domEvent.target.value
    updatedList[domEvent.target.name] = selectedVal
    setCurrentList(updatedList)
  }

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="list_name"> List name</label>
            <input
              type="text"
              required
              autoFocus
              className="form-control"
              name="list_name"
              value={currentList.list_name}
              onChange={handleFieldChange}
            />

          </div>
        </fieldset>
        <button type="submit"
          onClick={p => {
            p.preventDefault()

            const editedList = {
              id: listId,
              list_name: currentList.list_name,
              created_on: currentList.created_on
            }

            updateList(editedList)
              .then(() => history.push('/list'))
          }}
          className="btn btn-primary"
          id="createBtn">Update</button>

        <button className="btn btn-danger" onClick={(p) => { 
          p.preventDefault() 
          deleteList(listId)
          .then(() => history.push('/list')) }}>Delete</button>
      </form>
    </>
  );
}