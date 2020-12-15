import React from 'react';
import { connect } from 'react-redux';

const EventsComponent = ({
    events = []
}) =>
    <div>
        <ul className={'list-group'}>
            {
                events &&
                events.map(event =>
                    <li className={'list-group-item'}>
                        {event.title}
                    </li>
                )
            }
        </ul>
    </div>

const stateToPropertyMapper = (state) => ({
    events: state.eventReducer.events
})

const propertyToDispatch = dispatch => ({

})

export default connect
    (stateToPropertyMapper, propertyToDispatch)
    (EventsComponent)
