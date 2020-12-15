// const url = "https://secure-chamber-15246.herokuapp.com/api"
const url = 'http://localhost:8080/api'
export const findAccountByUsernamePassword = (username,password) =>
  fetch(`${url}/accounts/${username}/${password}`    , {
      credentials: 'include'
  })
    .then(response => response.json())

export const findAccountByCookies = () =>
    fetch(`${url}/cookie`, {
        credentials: 'include'
    })
        .then(response => response.json())

export const logout = () =>
    fetch(`${url}/logout`, {
        credentials: 'include'
    })
        .then()

export const createAccount = (account) =>
    fetch(`${url}/accounts`, {
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateAccount = account =>
    fetch(`${url}/accounts`, {
        method: 'PUT',
        body: JSON.stringify(account),
        headers: {
            'content-type': 'application/json'
        }
    })

export default {
    findAccountByUsernamePassword, createAccount
}
