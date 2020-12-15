import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ResidentService from "../services/residentService";
import AdminService from "../services/AdminService";
import ApartmentService from "../services/apartmentService";

class ResidentProfileComponent extends React.Component{

    state = {
        loggedInResident: {
            name: '',
            email: '',
            apartmentId: ''
        },
        apartment: {address: ''},
    }

    componentDidMount() {
        this.props.findResidentById(this.props.account.residentId)
            .then(res => {
                this.setState(prev => {
                    return {...prev, loggedInResident: res}
                })

                this.props.findApartmentById(this.state.loggedInResident.apartmentId)
                    .then(ap => this.setState(prev => {
                        return {...prev, apartment: ap}
                    }))
            })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return(
            <div>
                <h3>Resident profile: {this.props.account.username}</h3>
                <h5>Resident name: {this.state.loggedInResident.name}</h5>
                <h5>email: {this.state.loggedInResident.email}</h5>
                <h5>
                    <Link to={`/apartments/${this.state.apartment.id}`}>
                        {this.state.apartment.address}
                    </Link>
                </h5>
                <h5>admin: {this.props.findAdminById(this.props.account.adminId).email}</h5>

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
        ApartmentService.getApartmentById(id).then(apart => apart)
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(ResidentProfileComponent)
