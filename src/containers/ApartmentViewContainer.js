import React from 'react';
import {connect} from 'react-redux'
import ChoresComponent from "../components/ApartmentView/ChoresComponent";
import {getApartmentById} from '../actions/apartmentActions'
import {getChoresForApartment} from "../actions/choresActions";

class ApartmentViewContainer extends React.Component {
    componentDidMount() {
        this.props.getApartmentById(0)
        this.props.getChoresForApartment(this.props.apartment._id)
    }

    render() {
        return(
            <div>
                <ChoresComponent/>
            </div>
        )
    }
}

const stateToProperty = state => ({
    apartment: state.apartmentReducer.apartment
})

const propertyToDispatchMapper = dispatch => ({
    getApartmentById: apartmentId => getApartmentById(dispatch, apartmentId),
    getChoresForApartment: apartmentId => getChoresForApartment(dispatch, apartmentId)
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(ApartmentViewContainer)
