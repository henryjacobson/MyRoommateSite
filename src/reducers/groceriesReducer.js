import {
    GET_GROCERIES_FOR_APARTMENT,
    GET_GROCERY_ITEM_BY_ID,
    UPDATE_GROCERY_ITEM,
    DELETE_GROCERY_ITEM,
    CREATE_GROCERY_ITEM
} from "../actions/groceriesActions"

// const groceries = [ 
//     {
//         id: 1,
//         apartmentId: 0,
//         title: "Item 1"
//     },
//     {
//         id: 2,
//         apartmentId: 0,
//         title: "Item 2"
//     },
//     {
//         id: 3,
//         apartmentId: 0,
//         title: "Item 3"
//     },
//     {
//         id: 4,
//         apartmentId: 1,
//         title: "Item 1.1"
//     },
//     {
//         id: 5,
//         apartmentId: 1,
//         title: "Item 2.1"
//     }
// ]

// const initialState = {
//     groceries: groceries,
//     groceryItem: groceries[0]
// }

const groceriesReducer = (state = {groceries: [], groceryItem: {title: ""}}, action) => {
    switch (action.type) {
        case GET_GROCERIES_FOR_APARTMENT:
            return {
                ...state,
                groceries: action.groceries
            }
        case GET_GROCERY_ITEM_BY_ID:
            return {
                ...state,
                groceryItem: action.groceryItem
            }
        case UPDATE_GROCERY_ITEM:
            return {
                ...state,
                groceryItem: action.groceryItem
            }
        case DELETE_GROCERY_ITEM:
            return {
                ...state,
                groceries: state.groceries.filter(groceryItem => groceryItem.id !== action.groceryItemId)
            }
        case CREATE_GROCERY_ITEM:
            return {
                ...state,
                groceries: [
                    ...state.groceries,
                    action.groceryItem
                ]
            }
        default:
            return state
    }
}

export default groceriesReducer