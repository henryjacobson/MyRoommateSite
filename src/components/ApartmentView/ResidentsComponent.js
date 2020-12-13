import React from 'react';
import { connect } from 'react-redux';

const ResidentsComponent = ({
    residents = []
}) =>
    <div>
        <ul className={'list-group'}>
            {
                residents &&
                residents.map(resident =>
                    <li className={'list-group-item'}
                        key={resident.id}>
                        {resident.name}
                    </li>
                )
            }
        </ul>
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
