export const getAllLists = () => {
    return fetch("http://localhost:8000/list", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        }
    })
        .then(res => res.json())
}

export const getListById = (id) => {
    return fetch(`http://localhost:8000/list/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("packet_token")}`
        }
    })
        .then(res => res.json())
}

export const addList = list => {
    return fetch("http://localhost:8000/list", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(list)
    })
        .then(getAllLists)
}

export const deleteList = (id) => {
    return fetch(`http://localhost:8000/list/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }