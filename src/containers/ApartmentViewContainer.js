import React from 'react';
import {connect} from 'react-redux'
import ChoresComponent from "../components/ApartmentView/ChoresComponent";
import {getApartmentById} from '../actions/apartmentActions'
import {getChoresForApartment} from "../actions/choresActions";

class ApartmentViewContainer extends React.Component {
    componentDidMount() {
        this.props.getApartmentById(this.props.match.params.apartmentId)
        this.props.getChoresForApartment(this.props.match.params.apartmentId)
    }

    render() {
        return(
            <div>
                <h1>
                    {this.props.apartment.address}
                </h1>
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
