import React from "react";
import {connect} from "react-redux";
import AccountService from "../services/AccountService";
import ApartmentService from "../services/ApartmentService";
import {Link} from "react-router-dom";
import ResidentService from "../services/ResidentService";
import AdminService from "../services/AdminService";

class RegisterComponent extends React.Component{
    state={
        usernameField: "",
        passwordField: "",
        name: "",
        type: "",
        email:"",
        apartments: this.props.getAllApartments(),
        apartment:""
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    updateUsername(event){
        this.setState({
            ...state,
            usernameField: event.target.value
        })
    }

    updatePassword(event){
        this.setState({
            ...state,
            passwordField: event.target.value
        })
    }

    updateName(event){
        this.setState({
            ...state,
            name: event.target.value
        })
    }

    updateType(event){
        this.setState({
            ...state,
            type: event.target.value
        })
    }

    updateEmail(event){
        this.setState({
            ...state,
            email: event.target.value
        })
    }

    updateApartment(event){
        this.setState({
            ...state,
            apartment: this.state.apartments.find(apart=>apart.name===event.target.value)
        })
    }

    createResident(){
        this.props.createResident({
            name: this.state.name,
            address: this.state.apartment.address,
            email: this.state.email,
            adminId: this.state.apartment.adminId,
            apartmentId: this.state.apartment.id
        }).then(r=>
            this.props.createAccount({
            username: this.state.usernameField,
            password: this.state.passwordField,
            adminId: 0,
            residentId: r.id,
            resident: true
        })).then(alert("Created account successfully"))
    }

    createAdmin(){
        this.props.createAdmin({
            name: this.state.name,
        }).then(a=>
            this.props.createAccount({
                username: this.state.usernameField,
                password: this.state.passwordField,
                adminId: a.id,
                residentId: 0,
                resident: false
            })).then(alert("Created account successfully"))
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
                        <input id="username" onChange={e=>this.updateUsername(e)} placeholder="username" type="text" className="wbdv-field wbdv-username"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>

                    <div className="col-sm-10">
                        <input type="text" onChange={e=>this.updatePassword(e)} placeholder="password" className="wbdv-field wbdv-password" id="inputPassword"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>

                    <div className="col-sm-10">
                        <input type="text" onChange={e=>this.updateName(e)} placeholder="password" className="wbdv-field wbdv-password" id="inputPassword"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="typeOfUser" className="col-sm-2 col-form-label">Type of User</label>

                    <div className="col-sm-10">
                        <select onChange={e => this.updateType(e)}>
                            <option>Resident</option>
                            <option>Admin</option>
                        </select>
                    </div>
                </div>
                {
                    this.state.type==="Resident" &&
                    <div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>

                            <div className="col-sm-10">
                                <input type="text" onChange={e=>this.updateEmail(e)} placeholder="email" className="wbdv-field wbdv-password" id="inputPassword"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Apartments" className="col-sm-2 col-form-label">Apartments</label>
                            <select onChange={e => this.updateApartment(e)}>
                            {this.props.apartments.map(apart=><option>{apart.name}</option>)}
                            </select>
                        </div>
                    </div>

                }

                <div className="form-group row">
                    <div className="col-sm-10">
                        {
                            this.state.type==="Resident" &&
                            <button className="wbdv-button wbdv-login btn-primary btn-block"
                                    onClick={this.createResident
                                    }>
                                Register</button>
                        }
                        {
                            this.state.type==="Admin" &&
                            <button className="wbdv-button wbdv-login btn-primary btn-block"
                                    onClick={this.createAdmin
                                    }>
                                Register</button>
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
    getAllApartments: () => ApartmentService.getApartments().then(aparts =>aparts),
    createAccount: (account) => AccountService.createAccount(account),
    createResident: (r) => ResidentService.createResident(r),
    createAdmin: (a) => AdminService.createAdmin(a)
})
export default connect
(stateToProperty, propertyToDispatchMapper)
(RegisterComponent)
