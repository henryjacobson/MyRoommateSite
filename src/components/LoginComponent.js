import React from "react";
import {connect} from "react-redux";
import AccountService from "../services/AccountService";
import {Link} from "react-router-dom";

class LoginComponent extends React.Component{

    state={
        usernameField: "",
        passwordField: ""
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    updateUsername(event){
        this.setState({
            ...this.state,
            usernameField: event.target.value
        })
    }

    updatePassword(event){
        this.setState({
            ...this.state,
            passwordField: event.target.value
        })
    }

    checkLoginSuccess(){

    }

    render() {
        return(
            <div>
                {
                    this.props.loggedIn===true &&
                    <h1>Logged In As {this.props.account.username}</h1>
                }
                {
                    this.props.loggedIn!==true &&
                    <h1>Log In Here</h1>
                }
                {
                    this.props.tryAgain===true &&
                    alert("Try Login Again")
                }
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input id="username" onChange={event => this.setState({
                            ...this.state,
                            usernameField: event.target.value
                        })} placeholder="username" type="text" className="wbdv-field wbdv-username"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>

                    <div className="col-sm-10">
                        <input type="text" onChange={event => this.setState({
                            ...this.state,
                            passwordField: event.target.value
                        })} placeholder="password" className="wbdv-field wbdv-password" id="inputPassword"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        {
                            this.props.loggedIn===true &&
                                <div>
                                    <button className="wbdv-button wbdv-login btn-primary btn-block" onClick={
                                        this.props.Logout}>LogOut</button>
                                    {console.log(this.props.account)}
                                    {
                                        this.props.account.resident &&
                                        <Link to={'/profile/resident'}>
                                            Profile
                                        </Link>
                                    }
                                    {
                                        !this.props.account.resident &&
                                        <Link to={'/profile/admin'}>
                                            Profile
                                        </Link>
                                    }

                                </div>

                        }
                        {
                            this.props.loggedIn!==true &&
                                <div>
                                    <button className="wbdv-button wbdv-login btn-primary btn-block" onClick={() =>
                                        this.props.checkLoginSuccess(this.state.usernameField,this.state.passwordField)}>
                                        Login</button>
                                </div>

                        }
                    </div>
                </div>
            </div>
        )
    }
}

const stateToProperty = (state) => ({
    loggedIn: state.accountReducer.loggedIn,
    account: state.accountReducer.account,
    tryAgain: state.accountReducer.tryAgain
})
const propertyToDispatchMapper = (dispatch) => ({
    checkLoginSuccess: (usr,pas) => AccountService.findAccountByUsernamePassword(usr,pas)
        .then(acc => dispatch({
            type: "LOGIN",
            account: acc
        })),
    Logout: () => dispatch({
            type: "LOGOUT"
        })
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(LoginComponent)
