const initialState = {
  account: null,
  loggedIn: false,
  tryAgain:false
}

const accountReducer = (state = initialState, action) => {
  let loginSuccess=false;
  let tryAgainCheck=true;
  if(action.account!==null){
    loginSuccess=true;
    tryAgainCheck=false;
  }

  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: loginSuccess,
        tryAgain: tryAgainCheck,
        account: action.account
      }
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        tryAgain: false,
        account: null
      }
    default:
      return state
  }
}

export default accountReducer
