import groceriesService from '../services/groceriesService'

export const GET_GROCERIES_FOR_APARTMENT =  "GET_GROCERIES_FOR_APARTMENT"
export const GET_GROCERY_ITEM_BY_ID = "GET_GROCERY_ITEM_BY_ID"
export const UPDATE_GROCERY_ITEM = "UPDATE_GROCERY_ITEM"

export const getGroceriesForApartment = (dispatch, apartmentId) =>
    groceriesService.getGroceriesForApartment(apartmentId)
        .then(groceries => dispatch({
            type: GET_GROCERIES_FOR_APARTMENT,
            groceries
        }))

export const getGroceryItemById = (dispatch, groceryItemId) =>
        groceriesService.getGroceryItemById(groceryItemId)
            .then(groceryItem = dispatch({
                type: GET_GROCERY_ITEM_BY_ID,
                groceryItem
            }))

export const updateGroceryItem = (dispatch, groceryItem) =>
        groceriesService.updateGroceryItem(groceryItem)
            .then(response => dispatch({
                type: UPDATE_GROCERY_ITEM,
                groceryItem
            }))  