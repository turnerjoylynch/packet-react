const remoteURL = "http://localhost:8000"

export const getAllItems = () => {
    return fetch(`${remoteURL}/item`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        }
    })
        .then(res => res.json())
}

export const getItemById = (id) => {
    return fetch(`${remoteURL}/item/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        }
    })
        .then(res => res.json())
}

export const getItemByListId = (listId) => {
    return fetch(`${remoteURL}/item/${listId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`,
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const addItem = item => {
    return fetch("http://localhost:8000/item", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    })
        .then(getAllItems)
}

export const deleteItem = (id) => {
    return fetch(`http://localhost:8000/item/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        },
        body: JSON.stringify(id)
    })
}

export const updateItem = (editedItem) => {
    return fetch(`${remoteURL}/item/${editedItem.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedItem)
    })
}