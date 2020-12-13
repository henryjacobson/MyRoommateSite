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
    // constructor(props) {

    // }

    componentDidMount() {
        const apartmentId = this.props.match.params.apartmentId
        console.log(apartmentId)
        this.props.getApartmentById(apartmentId)
        this.props.getChoresForApartment(apartmentId)
        this.props.getResidentsByApartmentId(apartmentId)
        this.props.getEventsForApartmentId(apartmentId)
        this.props.getGroceriesForApartment(apartmentId)
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand disabled" href="#">Apartment {this.props.match.params.apartmentId}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#">
                                Roommate 1
                                </a>
                            <a className="nav-item nav-link" href="#">
                                Roommate 2
                                </a>
                            <a className="nav-item nav-link" href="#">
                                Roommate 3
                                </a>
                            {/* <ResidentsComponent /> */}
                        </div>
                    </div>
                </nav>



                <div className={'container'}>

                    {/* <h1>
                    Apartment: {this.props.match.params.apartmentId}
                </h1> */}
                    <div className={'row'}>
                        {/* <div className={'col-6'}>
                        <h4>
                            Residents:
                        </h4>
                        {/* <ResidentsComponent /> */}
                        {/* </div> */}

                        <div className={'col-3 justify-content-start'}>
                            <h4>
                                Chores:
                            </h4>
                            <ChoresComponent />
                        </div>
                        <div className={'col-6'}>
                            <h4>
                                Events:
                        </h4>
                            <EventsComponent />
                        </div>
                        <div className={'col-3 justify-content-end'}>
                            <h4>
                                Groceries:
                                <Link to={`/apartments/${this.props.match.params.apartmentId}/groceries`}>
                                    <button className={'btn btn-primary'}>
                                        Search Food
                                    </button>
                                </Link>

                            </h4>
                            <GroceriesComonent />
                        </div>
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
    getEventsForApartmentId: apartmentId => getEventsForApartmentId(dispatch, apartmentId),
    getGroceriesForApartment: apartmentId => getGroceriesForApartment(dispatch, apartmentId)
})

export default connect
    (stateToProperty, propertyToDispatchMapper)
    (ApartmentViewContainer)
