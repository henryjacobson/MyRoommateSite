import React from "react";
import {connect} from "react-redux";
import AdminService from "../services/AdminService";
import ApartmentService from "../services/apartmentService";
import {Link} from "react-router-dom";

class AdminProfileComponent extends React.Component{
    state = {
        loggedInAdmin: this.props.findAdminById(this.props.account.adminId)
    }
  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }



  render() {
    return(
        <div>
            <h3>Admin profile: {this.props.account.username}</h3>
            <h5>Admin name: {this.state.loggedInAdmin.name}</h5>
            <h5>Apartments this Admin owns:</h5>
            {ApartmentService.getAllApartments(this.props.account.adminId).map(apart => <li>{apart.name}</li>)}
        </div>
    )
  }
}

const stateToProperty = (state) => ({
    account: state.accountReducer.account
})
const propertyToDispatchMapper = (dispatch) => ({
    findAdminById: (id) =>
        AdminService.findAdminById(id).then(admin => admin)
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(AdminProfileComponent)
