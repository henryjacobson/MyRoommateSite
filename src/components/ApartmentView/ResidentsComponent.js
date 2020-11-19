import React from 'react';
import {connect} from 'react-redux';

const ResidentsComponent = ({
                                residents = []
                         }) =>
    <div>
        {
            residents.map(resident =>
                <div key={resident.id}>
                    {resident.name}
                </div>
            )
        }
    </div>

const stateToPropertyMapper = state => ({
    residents: state.residentReducer.residents,
    apartment: state.apartmentReducer.apartment
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ResidentsComponent)
