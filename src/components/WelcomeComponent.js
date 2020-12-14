import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom";
import {connect} from "react-redux";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import PolicyComponent from "./PolicyComponent";
import ResidentProfileComponent from "./ResidentProfileComponent";
import AdminProfileComponent from "./AdminProfileComponent";

export class WelcomeComponent extends React.Component {
    render(){
        return(
        <BrowserRouter>
            <div>
                <h1>Roommates App Welcome Page</h1>
                <ul>
                    <li><Link to={"/login"}>Login</Link></li>
                    <li><Link to={"/register"}>Register</Link></li>
                    <li><Link to={"/policy"}>Policy</Link></li>
                    <li><Link to={"/"}>Home Page</Link></li>
                    {
                        this.props.loggedIn && this.props.account.resident===true &&
                        <li><Link to={`/profile/resident`}>ResidentProfile</Link></li>
                    }
                    {
                        this.props.loggedIn && this.props.account.resident===false &&
                        <li><Link to={`/profile/admin`}>AdminProfile</Link></li>
                    }
                </ul>
                <Route path="/login" exact component={LoginComponent}/>
                <Route path="/register" exact component={RegisterComponent}/>
                <Route path="/policy" exact component={PolicyComponent}/>
                <Route path="/profile/resident" exact component={ResidentProfileComponent}/>
                <Route path="/profile/admin" exact component={AdminProfileComponent}/>
            </div>
        </BrowserRouter>
        )
    }
}

const stateToProperty = (state) => ({
    account: state.accountReducer.account,
    loggedIn: state.accountReducer.loggedIn
})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect
(stateToProperty, propertyToDispatchMapper)
(WelcomeComponent)