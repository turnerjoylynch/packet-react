const remoteURL = "http://localhost:8000"

export const getAllLists = () => {
    return fetch("http://localhost:8000/list", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        }
    })
        .then(res => res.json())
}

export const getListById = (listId) => {
    console.log(listId)
    return fetch(`${remoteURL}/list/${listId}`, {
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
}

export const addList = (list) => {
    return fetch(`${remoteURL}/list`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        },
        body: JSON.stringify(list)
    })
        .then(res => res.json())
}

export const deleteList = (id) => {
    return fetch(`${remoteURL}/list/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        },
        body: JSON.stringify(id)
    })
}


export const updateList = (list, listId) => {
    console.log('updatedList', list)
    return fetch(`${remoteURL}/list/${listId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        },
        body: JSON.stringify(listId)
    })
}