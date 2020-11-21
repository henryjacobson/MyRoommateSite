const initialState = {
  admins: []
}

const adminReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FIND_ALL_ADMINS":
      return {
        ...state,
        admins: action.admins
      }
    default:
      return state
  }
}

export default adminReducer
