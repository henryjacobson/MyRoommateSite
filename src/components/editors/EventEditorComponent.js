import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getEventById, updateEvent, deleteEvent } from "../../actions/eventActions";
import {getAllApartments, getApartmentsForEventId, inviteApartmentToEvent} from "../../actions/apartmentActions";

class EventEditorComponent extends React.Component {
    state = {
        event: {
            title: "",
            dateTime: "",
            location: "",
            description: ""
        },
        apartmentId: ""
    }

    constructor(props) {
        super(props);
        this.props.getEventById(this.props.match.params.eventId)
            .then(() => { this.setState({ event: this.props.event }) })
    }

    componentDidMount() {
        this.props.getAllApartments()
        this.props.getApartmentsForEventId(this.props.match.params.eventId)
    }

    // componentDidMount() {
    //     this.props.getEventById(this.props.match.params.eventId)
    //         .then(_ => this.setState({ event: this.props.event }))
    // }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand disabled" href="#">Edit Event: {this.state.event && this.state.event.title}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="#">
                                <Link to='/admin'>
                                    Admin Home
                                </Link>
                            </a>

                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="form-group row">
                        <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                id="inputTitle"
                                value={this.state.event && this.state.event.title}
                                placeholder="Title"
                                onChange={event => {
                                    this.setState(prevState => {
                                        return {
                                            ...prevState,
                                            event: {
                                                ...prevState.event,
                                                title: event.target.value
                                            }
                                        }
                                    })
                                }} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="datetimeInput" className="col-2 col-form-label">Date and time</label>
                        <div className="col-10">
                            <input
                                className="form-control"
                                type="datetime-local"
                                // defaultValue="2011-08-19T13:45:00"
                                value={this.state.event && this.state.event.dateTime}
                                id="datetimeInput"
                                onChange={event => {
                                    this.setState(prevState => {
                                        return {
                                            ...prevState,
                                            event: {
                                                ...prevState.event,
                                                dateTime: event.target.value
                                            }
                                        }
                                    })
                                }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea
                            className="form-control"
                            value={this.state.event && this.state.event.description}
                            id="description"
                            rows="3"
                            onChange={event => {
                                this.setState(prevState => {
                                    return {
                                        ...prevState,
                                        event: {
                                            ...prevState.event,
                                            description: event.target.value
                                        }
                                    }
                                })
                            }}/>
                    </div>
                    <div className={'form-group'}>
                        <label>Invited</label>
                        <ul className={'list-group'}>
                            {
                                this.props.invitedApartments.map(apartment =>
                                    <li className={'list-group-item'} key={apartment.id}>
                                        {apartment.address}
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className={'form-group'}>
                        <label>New Invite</label>
                        <select className={'custom-select'} value={this.state.apartmentId}
                                onChange={event => this.setState(prevState => {
                                    return {
                                        ...prevState,
                                        apartmentId: event.target.value
                                    }
                                })}>
                            <option value={''}>Choose...</option>
                            {
                                this.props.apartments.map(apartment =>
                                    <option value={apartment.id}>
                                        {apartment.address}
                                    </option>
                                )
                            }
                        </select>

                        <button type={'submit'} className={'btn btn-success'}
                        onClick={() => this.props.inviteApartmentToEvent(this.props.match.params.eventId, this.state.apartmentId)}>
                            Invite
                        </button>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-11">
                            <Link to={'/admin'}>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    onClick={() => this.props.updateEvent({ ...this.state.event })}>
                                    Save
                                </button>
                            </Link>

                        </div>
                        {/* <div className="col-sm-1">
                            <Link to='/admin'>
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    onClick={() => this.props.deleteEvent(this.state.event.id)}>
                                    Delete
                                </button>
                            </Link>

                        </div> */}
                    </div>
                </div>

            </div>
        )
    }
}

const stateToPropertyMapper = state => ({
    event: state.eventReducer.event,
    apartments: state.apartmentReducer.apartments,
    invitedApartments: state.apartmentReducer.invitedApartments
})

const propertyToDispatchMapper = dispatch => ({
    getEventById: eventId => getEventById(dispatch, eventId),
    updateEvent: event => updateEvent(dispatch, event),
    deleteEvent: eventId => deleteEvent(dispatch, eventId),
    getAllApartments: () => getAllApartments(dispatch),
    getApartmentsForEventId: eventId => getApartmentsForEventId(dispatch, eventId),
    inviteApartmentToEvent: (eventId, apartmentId) => inviteApartmentToEvent(dispatch, eventId, apartmentId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (EventEditorComponent)
