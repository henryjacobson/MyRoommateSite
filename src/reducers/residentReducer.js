const initialState = {
  residents: []
}

const residentReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FIND_ALL_RESIDENTS":
      return {
        ...state,
        residents: action.residents
      }
    default:
      return state
  }
}

export default residentReducer
