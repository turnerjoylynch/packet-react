import React, { useState, useEffect } from "react"
import {useHistory, useParams} from "react-router-dom";

export const ItemEditForm = () => {
    const [item, setItem] = useState({ item_name: ""});
    const [isLoading, setIsLoading] = useState(false);

    const {itemId} = useParams();
    const navigate = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...item };
        stateToChange[evt.target.id] = evt.target.value;
        setItem(stateToChange);
    };

    const updateExistingItem = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedItem = {
      id: itemId,
      item_name: item.item_name
    };

    updateItem(editedItem)
        .then(() => navigate("/item")
        )
        }

    useEffect(() => {
        getItemById(item)
        .then(item => {
            setItem(item);
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
                  id="itemName"
                  value={item.item_name}
                />
                <label htmlFor="name">Item name</label>
              </div>
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingItem}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );
    }
