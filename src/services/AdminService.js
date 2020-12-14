const url = "https://secure-chamber-15246.herokuapp.com/api/"

export const findAdminById = (id) =>
    fetch(`${url}/admins/${id}`)
        .then(response => response.json())

export const findAllAdmins = () =>
  fetch(`${url}/admins`)
    .then(response => response.json())

export const createAdmin = (admin) =>
    fetch(`${url}/admins`, {
        method: 'POST',
        body: JSON.stringify(admin),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findAllAdmins, createAdmin,findAdminById
}
