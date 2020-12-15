import React from "react"
import '../style/WelcomeStyle.css'
import { BrowserRouter, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import PolicyComponent from "./PolicyComponent";
import ResidentProfileComponent from "./ResidentProfileComponent";
import AdminProfileComponent from "./AdminProfileComponent";
import ApartmentListComponent from "./lists/ApartmentListComponent";
import { getAllApartments } from "../actions/apartmentActions";
import { findAccountByCookies, logout } from "../services/AccountService";

export class WelcomeComponent extends React.Component {
    state = {
        login: false,
        register: false
    }

    componentDidMount() {
        this.props.getAllApartments()
        this.props.getAccount()
    }

    render() {
        return (
            <div >


                <nav className="  navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand disabled" href="#">MyRoommate</a>
                    {
                        this.props.account &&
                        this.props.account.id !== 0 &&
                        this.props.account.resident &&
                        <div className={'float-right'}>
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

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </nav>

                <div className={'container'}>
                    <div className='row title'>
                        <h1>Welcome to MyRoommate!</h1>
                        <h6>An easy way to stay organized with your roommates and know whats going on in your community!</h6>
                    </div>
                    <div className={'row'}>
                        <div className='col-sm-6 apartment-list '>
                            <h3>Current Apartments</h3>
                            <ApartmentListComponent />
                        </div>
                        <div className={'col-sm-6 login-register'}>
                            {
                                this.props.account &&
                                this.props.account.id === 0 &&
                                <div>

                                    <div className='row login'>
                                        <h5>Already have an account?</h5>
                                        <Link to={'/login'}>
                                            <button className={'btn btn-primary'}>
                                                Log In
                                            </button>
                                        </Link>
                                    </div>

                                    <div className='row login'>
                                        <h5>New user?</h5>
                                        <Link to={'/register'}>
                                            <button className={'btn btn-primary'}>
                                                Register
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            }
                            {
                                this.props.account &&
                                this.props.account.id !== 0 &&
                                <div>
                                    <Link to={'/profile'}>
                                        <button className={'btn btn-primary'}>
                                            Go to your profile
                                        </button>
                                    </Link>
                                    <button className={'btn btn-danger'} onClick={() => this.props.Logout()}>
                                        Logout
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToProperty = (state) => ({
    account: state.accountReducer.account,
    loggedIn: state.accountReducer.loggedIn
})

const propertyToDispatchMapper = (dispatch) => ({
    getAllApartments: () => getAllApartments(dispatch),
    getAccount: () => findAccountByCookies()
        .then(acc => dispatch({
            type: "LOGIN",
            account: acc
        })),
    Logout: () => logout().then(
        () => dispatch({
            type: "LOGOUT"
        }))
})

export default connect
    (stateToProperty, propertyToDispatchMapper)
    (WelcomeComponent)
