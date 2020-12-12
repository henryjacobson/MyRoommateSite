import React from 'react';
import { connect } from 'react-redux'
import ChoresComponent from "../components/ApartmentView/ChoresComponent";
import { getApartmentById } from '../actions/apartmentActions'
import { getChoresForApartment } from "../actions/choresActions";
import { getResidentsByApartmentId } from "../actions/residentActions";
import ResidentsComponent from "../components/ApartmentView/ResidentsComponent";
import EventsComponent from "../components/ApartmentView/EventsComponent";
import { getEventsForApartmentId } from "../actions/eventActions";
import GroceriesComonent from "../components/search/GroceriesComponent"
import { getGroceriesForApartment } from '../actions/groceriesActions'
import { Link } from "react-router-dom";

class ApartmentViewContainer extends React.Component {
    componentDidMount() {
        const apartmentId = this.props.match.params.apartmentId
        this.props.getApartmentById(apartmentId)
        this.props.getChoresForApartment(apartmentId)
        this.props.getResidentsByApartmentId(apartmentId)
        this.props.getEventsForApartmentId(apartmentId)
        this.props.getGroceriesForApartment(apartmentId)
    }

    render() {
        return (
            <div className={'container'}>
                <h1>
                    {this.props.apartment.address}
                </h1>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <h4>
                            Residents:
                        </h4>
                        <ResidentsComponent />
                    </div>

                    <div className={'col-6'}>
                        <h4>
                            Chores:
                        </h4>
                        <ChoresComponent />
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'col'}>
                        <h4>
                            Groceries:
                            <Link to={`/apartments/${this.apartmentId}/groceries`}>
                                <button className={'btn btn-primary'}>
                                    Add
                                </button>
                            </Link>
                        </h4>
                        <GroceriesComonent />
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'col-12'}>
                        <h4>
                            Events:
                        </h4>
                        <EventsComponent />
                    </div>
                </div>
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
    getResidentsByApartmentId: apartmentId => getResidentsByApartmentId(dispatch, apartmentId),
    getEventsForApartmentId: apartmentId => getEventsForApartmentId(dispatch, apartmentId),
    getGroceriesForApartment: apartmentId => getGroceriesForApartment(dispatch, apartmentId)
})

export default connect
    (stateToProperty, propertyToDispatchMapper)
    (ApartmentViewContainer)
