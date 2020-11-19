import React from 'react';
import {connect} from 'react-redux'
import ChoresComponent from "../components/ApartmentView/ChoresComponent";
import {getApartmentById} from '../actions/apartmentActions'
import {getChoresForApartment} from "../actions/choresActions";
import {getResidentsByApartmentId} from "../actions/residentActions";
import ResidentsComponent from "../components/ApartmentView/ResidentsComponent";

class ApartmentViewContainer extends React.Component {
    componentDidMount() {
        const apartmentId = this.props.match.params.apartmentId
        this.props.getApartmentById(apartmentId)
        this.props.getChoresForApartment(apartmentId)
        this.props.getResidentsByApartmentId(apartmentId)
    }

    render() {
        return(
            <div>
                <h1>
                    {this.props.apartment.address}
                </h1>
                <h4>
                    Residents:
                </h4>
                <ResidentsComponent/>
                <h4>
                    Chores:
                </h4>
                <ChoresComponent/>
            </div>
        )
    }
}

const stateToProperty = state => ({
    apartment: state.apartmentReducer.apartment,
    residents: state.residentReducer.residents
})

const propertyToDispatchMapper = dispatch => ({
    getApartmentById: apartmentId => getApartmentById(dispatch, apartmentId),
    getChoresForApartment: apartmentId => getChoresForApartment(dispatch, apartmentId),
    getResidentsByApartmentId: apartmentId => getResidentsByApartmentId(dispatch, apartmentId)
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(ApartmentViewContainer)
