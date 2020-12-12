const url = "https://wbdv-generic-server.herokuapp.com/api/team2"

const getGroceriesForApartment = apartmentId =>
    fetch(`${url}/apartments/${apartmentId}/groceries`)
        .then(response => response.json())

const getGroceryItemById = groceryItemId =>
    fetch(`${url}/groceries/${groceryItemId}`)
        .then(response => response.json())

const updateGroceryItem = groceryItem =>
    fetch(`${url}/groceries`, {
        method: 'PUT',
        body: JSON.stringify(groceryItem),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteGroceryItem = groceryItemId =>
    fetch(`${url}/groceries`, {
        method: "DELETE"
    })
        .then(response => response.json())

const createGroceryItem = (apartmentId, groceryItem) =>
    fetch(`${url}/apartments/${apartmentId}/groceries`, {
        method: "POST",
        body: JSON.stringify(groceryItem),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export default {
    getGroceriesForApartment,
    getGroceryItemById,
    updateGroceryItem,
    deleteGroceryItem,
    createGroceryItem
}