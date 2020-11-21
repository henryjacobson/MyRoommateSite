const initialState = {
  account: null,
  loggedIn: false
}

const accountReducer = (state = initialState, action) => {
  let loginSuccess=false
  if(action.account!==null){
    loginSuccess=true
  }

  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: loginSuccess,
        account: action.account
      }
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        account: null
      }
    default:
      return state
  }
}

export default accountReducer
