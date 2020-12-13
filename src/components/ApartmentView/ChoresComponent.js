import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {updateChore} from '../../actions/choresActions'

const ChoresComponent = ({
    chores = [],
    apartment,
    updateChore
}) =>
    <ul className={'list-group'}>
        {
            chores.map(chore =>
                <li className={'list-group-item'}
                    key={chore.id}>
                    <Link to={`/apartments/${apartment.id}/chores/${chore.id}`}>
                        {chore.title}
                    </Link>
                </li>

            )

        }
        <li li className={'list-group'}>
            <button 
            className="btn btn-primary"
            onClick={() => this.updateChore({title: "new chore"})}>
                Add Chore
            </button>
        </li>
    </ul>

const stateToPropertyMapper = state => ({
    chores: state.choresReducer.chores,
    apartment: state.apartmentReducer.apartment
})

const propertyToDispatchMapper = dispatch => ({
    updateChore: chore => updateChore(dispatch, chore)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (ChoresComponent)
