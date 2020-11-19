import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const ChoresComponent = ({
                             chores = [],
    apartment
                         }) =>
    <ul>
        {
            chores.map(chore =>
                <li key={chore.id}>
                    <Link to={`/apartments/${apartment.id}/chores/${chore.id}`}>
                        {chore.description}
                    </Link>
                </li>
            )
        }
    </ul>

const stateToPropertyMapper = state => ({
    chores: state.choresReducer.chores,
    apartment: state.apartmentReducer.apartment
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ChoresComponent)
