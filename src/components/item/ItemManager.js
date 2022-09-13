export const getItem = () => {
    return fetch("http://localhost:8000/item")
        .then(res => res.json())
}

export const getItemById = (id) => {
    return fetch(`http://localhost:8000/item/${id}`)
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
        .then(getItem)
}
