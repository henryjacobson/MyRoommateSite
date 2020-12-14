import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import AddEventComponent from './AddEventComponent'
import { deleteEvent } from '../../actions/eventActions'

const EventListComponent = ({
    events = [],
    deleteEvent
}) =>
    <ul className={'list-group'}>
        {
            events.map(event =>
                <li className={'list-group-item'} key={event.id} >
                    <Link to={`edit/event/${event.id}`}>
                        {event.title}
                    </Link>

                    <span className="float-right">
                        <button className={'btn btn-danger'} onClick={() => deleteEvent(event.id)}>
                            <i className={'fa fa-times float-right'} />
                        </button>
                    </span>
                </li>
            )
        }
        <li className={'list-group'}>
            <AddEventComponent />
        </li>
    </ul>

const stateToPropertyMapper = state => ({
    events: state.eventReducer.events
})

const propertyToDispatchMapper = dispatch => ({
    deleteEvent: eventId => deleteEvent(dispatch, eventId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (EventListComponent)