import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { createChore, deleteChore, updateChore } from '../../actions/choresActions'

const ChoresComponent = ({
    chores = [],
    apartment,
    createChore,
    deleteChore,
    account
}) =>
    <ul className={'list-group'}>
        {
            chores.map(chore =>
                <li className={'list-group-item'}
                    key={chore.id}>
                    {
                        account &&
                        account.id !== 0 &&
                        <Link to={`/apartments/${apartment.id}/chores/${chore.id}`}>
                            {chore.description}

                        </Link>
                    }
                    {
                        account &&
                        account.id === 0 &&
                            <div>
                                {chore.description}
                            </div>
                    }
                    {
                        account &&
                        account.id !== 0 &&
                        <span className="float-right">
                        <button className={'btn btn-danger'} onClick={() => deleteChore(chore)}>
                        <i className={'fa fa-times float-right'}/>
                        </button>
                    </span>
                    }
                </li>
            )
        }
        {
            account &&
            account.id !== 0 &&
            <li className={'list-group'}>
                <button
                    className="btn btn-primary"
                    onClick={() => createChore(apartment.id)}>
                    Add Chore
                </button>
            </li>
        }
        {console.log(apartment)}
    </ul>

const stateToPropertyMapper = state => ({
    chores: state.choresReducer.chores,
    apartment: state.apartmentReducer.apartment,
    account: state.accountReducer.account
})

const propertyToDispatchMapper = dispatch => ({
    createChore: apartmentId => createChore(dispatch, apartmentId),
    deleteChore: choreId => deleteChore(dispatch, choreId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (ChoresComponent)
