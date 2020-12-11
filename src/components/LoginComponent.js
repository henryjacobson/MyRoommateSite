import React from "react";
import {connect} from "react-redux";
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

    checkLoginSuccess(){

    }

    render() {
        return(
            <div>
                <h1>LOGIN </h1>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input id="username" placeholder="username" type="text" className="wbdv-field wbdv-username"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>

                    <div className="col-sm-10">
                        <input type="text" placeholder="password" className="wbdv-field wbdv-password" id="inputPassword"/>
                    </div>
                </div>


                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label"></label>

                    <div className="col-sm-10">
                        <button className="wbdv-button wbdv-login btn-primary btn-block" onClick={
                            this.checkLoginSuccess()}>Login</button>
                        {

                        }
                    </div>
                </div>
            </div>
        )
    }
}

const stateToProperty = (state) => ({

})
const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(LoginComponent)
