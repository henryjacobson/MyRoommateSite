import React from "react";
import {connect} from "react-redux";
import AdminService from "../services/AdminService";
import ApartmentService from "../services/apartmentService";
import {Link} from "react-router-dom";
import {getAllApartments} from "../actions/apartmentActions";

class AdminProfileComponent extends React.Component{
    state = {
        loggedInAdmin: {
            name: ''
        }
    }
  componentDidMount() {
      this.props.findAdminById(this.props.account.adminId)
          .then(a => this.setState(prev => {
              return{...prev, loggedInAdmin: a}
          })

          )
      this.props.getAllApartments()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }



  render() {
    return(
        <div>
            <h3>Admin profile: {this.props.account.username}</h3>
            <h5>Admin name: {this.state.loggedInAdmin.name}</h5>
            <h5>
                <Link to={'/admin'}>
                    Admin Home Page
                </Link>
            </h5>
            <h5>Apartments this Admin owns:</h5>
            {this.props.apartments.map(apart =>
                <li>
                    <Link to={`/apartments/${apart.id}`}>
                        {apart.address}
                    </Link>
                </li>)}
        </div>
    )
  }
}

const stateToProperty = (state) => ({
    account: state.accountReducer.account,
    apartments: state.apartmentReducer.apartments
})
const propertyToDispatchMapper = (dispatch) => ({
    findAdminById: (id) =>
        AdminService.findAdminById(id).then(admin => admin),
    getAllApartments: () => getAllApartments(dispatch)
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(AdminProfileComponent)
