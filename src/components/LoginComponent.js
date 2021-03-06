import React from "react";
import { connect } from "react-redux";
import AccountService, { findAccountByCookies, logout } from "../services/AccountService";
import { Link } from "react-router-dom";

class LoginComponent extends React.Component {

    state = {
        usernameField: "",
        passwordField: ""
    }

    componentDidMount() {
        this.props.tryLogin()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    updateUsername(event) {
        this.setState({
            ...this.state,
            usernameField: event.target.value
        })
    }

    updatePassword(event) {
        this.setState({
            ...this.state,
            passwordField: event.target.value
        })
    }

    checkLoginSuccess() {

    }

    render() {
        return (
            <div>{
                console.log(this.props.loggedIn)
            }
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand disabled">MyRoommate</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {
                            this.props.account &&
                            this.props.account.id !== 0 &&
                            this.props.account.id !== -1 &&
                            this.props.account.resident &&
                            <div className={'navbar-right'}>
                                Logged in as: <Link to={'/profile'}>{this.props.account && this.props.account.username}</Link>
                            </div>
                        }
                        {
                            this.props.account &&
                            this.props.account.id !== 0 &&
                            !this.props.account.resident &&
                            <div className={'float-right'}>
                                Logged in as: <Link to={'/admin'}>{this.props.account && this.props.account.username}</Link>

                            </div>
                        }
                    </nav>
                </div>
                {
                    this.props.loggedIn === true &&
                    <h1>
                        Logged in as: {this.props.account.username}
                        {
                            this.props.account.resident &&
                            <Link to={'/profile'}>
                                <button className="btn btn-primary">
                                    Go to profile
                                        </button>

                            </Link>
                        }
                        {
                            !this.props.account.resident &&
                            <Link to={'/admin'}>
                                <button className="btn btn-primary">
                                    Go to profile
                                        </button>
                            </Link>
                        }
                    </h1>
                }
                {
                    this.props.loggedIn !== true &&
                    <h1>Log In Here</h1>
                }

                {
                    this.props.tryAgain === true &&
                    <h3 className={'color-red'}>Try Again</h3>
                }
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input id="username" onChange={event => this.setState({
                            ...this.state,
                            usernameField: event.target.value
                        })} placeholder="username" type="text" className="wbdv-field wbdv-username" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>

                    <div className="col-sm-10">
                        <input type="text" onChange={event => this.setState({
                            ...this.state,
                            passwordField: event.target.value
                        })} placeholder="password" className="wbdv-field wbdv-password" id="inputPassword" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        {
                            this.props.loggedIn === true &&
                            <div>
                                <button className="wbdv-button wbdv-login btn-danger btn-block" onClick={
                                    () => this.props.Logout()}>LogOut</button>
                                {console.log(this.props.account)}
                                {/* {
                                        this.props.account.resident &&
                                        <Link to={'/profile'}>
                                            Profile
                                        </Link>
                                    }
                                    {
                                        !this.props.account.resident &&
                                        <Link to={'/profileAdmin'}>
                                            Go to Profile
                                        </Link>
                                    } */}

                            </div>

                        }
                        {
                            this.props.loggedIn !== true &&
                            <div>
                                <button className="wbdv-button wbdv-login btn-primary btn-block" onClick={() =>
                                    this.props.checkLoginSuccess(this.state.usernameField, this.state.passwordField)}>
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
    tryLogin: () => findAccountByCookies()
        .then(acc => {
            acc.id !== 0 &&
                dispatch({
                    type: 'LOGIN',
                    account: acc
                })
        }),
    checkLoginSuccess: (usr, pas) => AccountService.findAccountByUsernamePassword(usr, pas)
        .then(acc => {
                dispatch({
                    type: "LOGIN",
                    account: acc
                })
        }),
    Logout: () => logout().then(
        () => {
            dispatch({
                type: "LOGOUT"
            })
        })
})

export default connect
    (stateToProperty, propertyToDispatchMapper)
    (LoginComponent)
