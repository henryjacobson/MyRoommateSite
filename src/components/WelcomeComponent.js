import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom";
import {connect} from "react-redux";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import PolicyComponent from "./PolicyComponent";
import ResidentProfileComponent from "./ResidentProfileComponent";
import AdminProfileComponent from "./AdminProfileComponent";
import ApartmentListComponent from "./lists/ApartmentListComponent";
import {getAllApartments} from "../actions/apartmentActions";
import {findAccountByCookies, logout} from "../services/AccountService";

export class WelcomeComponent extends React.Component {
    componentDidMount() {
        this.props.getAllApartments()
        this.props.getAccount()
    }

    render(){
        return(
            <div className={'container'}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">


                    {
                        this.props.account &&
                        this.props.account.id !== 0 &&
                        <div className={'float-right'}>
                            Logged in as: <Link to={'/profile'}>{this.props.account && this.props.account.username}</Link>

                            <button className={'btn btn-danger'} onClick={() => this.props.Logout()}>
                                Logout
                            </button>

                        </div>
                    }

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </nav>

                <div className={'row'}>
                    <div className={'col-sm-6'}>
                        <ApartmentListComponent/>
                    </div>
                    <div className={'col-sm-6'}>
                        {
                            this.props.account &&
                            this.props.account.id === 0 &&
                            <div>
                                <Link to={'/register'}>
                                    <button className={'btn btn-primary'}>
                                        Register
                                    </button>
                                </Link>

                                <Link to={'/login'}>
                                    <button className={'btn btn-primary'}>
                                        Log In
                                    </button>
                                </Link>
                            </div>
                        }
                        {
                            this.props.account &&
                            this.props.account.id !== 0 &&
                            <div>
                                <Link to={'/profile'}>
                                    <button className={'btn btn-primary'}>
                                        Profile
                                    </button>
                                </Link>
                            </div>
                        }

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
    Logout: () =>  logout().then(
        () => dispatch({
            type: "LOGOUT"
        }))
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(WelcomeComponent)
