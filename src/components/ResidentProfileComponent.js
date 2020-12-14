import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ResidentService from "../services/residentService";
import AdminService from "../services/AdminService";
import ApartmentService from "../services/ApartmentService";

class ResidentProfileComponent extends React.Component{

    state = {
        loggedInResident: this.props.findResidentById(this.props.account.residentId)
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return(
            <div>
                <h3>Resident profile: {this.props.account.username}</h3>
                <h5>Resident name: {this.state.loggedInResident.name}</h5>
                <h5>email: {this.state.loggedInResident.email}</h5>
                <h5>apartment: {this.props.findApartentById(this.props.account.apartmentId)}</h5>
                <h5>admin: {this.props.findAdminById(this.props.account.adminId)}</h5>

            </div>
        )
    }
}

const stateToProperty = (state) => ({
    account: state.accountReducer.account
})
const propertyToDispatchMapper = (dispatch) => ({
    findResidentById: (id) =>
        ResidentService.findResidentById(id).then(resident => resident),
    findAdminById: (id) =>
        AdminService.findAdminById(id).then(admin => admin),
    findApartmentById: (id) =>
        ApartmentService.findApartmentById(id).then(apart => apart)
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(ResidentProfileComponent)
