import React, { useState, useEffect } from "react"
import {useHistory, useParams} from "react-router-dom";
import { getListById, updateList, updateListById } from "../../modules/ListManager";

export const ListEditForm = () => {
    const [list, setList] = useState({ list_name: ""});
    const [isLoading, setIsLoading] = useState(false);

    const {listId} = useParams();
    const navigate = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...list };
        stateToChange[evt.target.id] = evt.target.value;
        setList(stateToChange);
    };

    const updateExistingList = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedList = {
      id: listId,
      list_name: list.list_name
    };

    updateList(editedList)
        .then(() => navigate("/list")
        )
        }

    useEffect(() => {
        getListById(list)
        .then(list => {
            setList(list);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="listName"
                  value={list.list_name}
                />
                <label htmlFor="name"> List name</label>
              </div>
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingList}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );
    }