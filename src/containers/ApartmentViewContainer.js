import React from 'react';
import {connect} from 'react-redux'
import ChoresComponent from "../components/ApartmentView/ChoresComponent";
import {getApartmentById} from '../actions/apartmentActions'
import {getChoresForApartment} from "../actions/choresActions";
import {getResidentsByApartmentId} from "../actions/residentActions";
import ResidentsComponent from "../components/ApartmentView/ResidentsComponent";
import EventsComponent from "../components/ApartmentView/EventsComponent";
import {getEventsForApartmentId} from "../actions/eventActions";

class ApartmentViewContainer extends React.Component {
    componentDidMount() {
        const apartmentId = this.props.match.params.apartmentId
        this.props.getApartmentById(apartmentId)
        this.props.getChoresForApartment(apartmentId)
            .then(() => console.log(this.props.chores))
        this.props.getResidentsByApartmentId(apartmentId)
        this.props.getEventsForApartmentId(apartmentId)
    }

    render() {
        return(
            <div className={'container'}>
                <h1>
                    {this.props.apartment.address}
                </h1>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <h4>
                            Residents:
                        </h4>
                        <ResidentsComponent/>
                    </div>

                    <div className={'col-6'}>
                        <h4>
                            Chores:
                        </h4>
                        <ChoresComponent/>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'col-12'}>
                        <h4>
                            Events:
                        </h4>
                        <EventsComponent/>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToProperty = state => ({
    apartment: state.apartmentReducer.apartment,
    residents: state.residentReducer.residents,
    chores: state.choresReducer.chores
})

const propertyToDispatchMapper = dispatch => ({
    getApartmentById: apartmentId => getApartmentById(dispatch, apartmentId),
    getChoresForApartment: apartmentId => getChoresForApartment(dispatch, apartmentId),
    getResidentsByApartmentId: apartmentId => getResidentsByApartmentId(dispatch, apartmentId),
    getEventsForApartmentId: apartmentId => getEventsForApartmentId(dispatch, apartmentId)
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(ApartmentViewContainer)
