const url = "https://secure-chamber-15246.herokuapp.com/api/"
// const url = 'http://localhost:8080/api'
export const findAccountByUsernamePassword = (username,password) =>
  fetch(`${url}/accounts/${username}/${password}`)
    .then(response => response.json())

export const createAccount = (account) =>
    fetch(`${url}/accounts`, {
        method: 'POST',
        body: JSON.stringify(account),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findAccountByUsernamePassword, createAccount
}
