const remoteURL = "http://localhost:8000"

export const getAllItems = () => {
    return fetch("http://localhost:8000/item", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        }
    })
        .then(res => res.json())
}

export const getItemById = (id) => {
    return fetch(`http://localhost:8000/item/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        }
    })
        .then(res => res.json())
}

export const addItem = item => {
    return fetch("http://localhost:8000/item", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
        .then(getAllItems)
}

export const deleteItem = (id) => {
    return fetch(`http://localhost:8000/item/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}

export const updateItem = (editedItem) => {
    return fetch(`${remoteURL}/item/${editedItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedItem)
    }).then(data => data.json());
  }