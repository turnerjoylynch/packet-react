const remoteURL = "http://localhost:8000"

export const getUserById = (userId) => {
  //be sure your users have good data and related to a location and customer
  return fetch(`${remoteURL}/users/${userId}`)
  .then(res => res.json())
}

export const getAllUsers = () => {
  return fetch(`${remoteURL}/users`)
  .then(res => res.json())
}

export const deleteUser = (id) => {
  return fetch(`${remoteURL}/users/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addUser = (newUser) => {
  return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
  }).then(response => response.json())
}

export const updateUser = (editedUser) => {
  return fetch(`${remoteURL}/users/${editedUser.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedUser)
  }).then(data => data.json());
}
