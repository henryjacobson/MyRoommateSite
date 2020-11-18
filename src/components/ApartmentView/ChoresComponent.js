import React from 'react';
import {connect} from 'react-redux';

const ChoresComponent = ({
                             chores = []
                         }) =>
    <div>
        {
            chores.map(chore =>
                <div key={chore._id}>
                    {chore.title}
                </div>
            )
        }
    </div>

const stateToPropertyMapper = state => ({
    chores: state.choresReducer.chores,
    apartment: state.apartmentReducer.apartment
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ChoresComponent)
