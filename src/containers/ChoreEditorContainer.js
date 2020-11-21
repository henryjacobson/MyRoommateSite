import React from 'react';
import {connect} from 'react-redux';
import {getChoreById, updateChore} from "../actions/choresActions";
import {getResidentsByApartmentId} from "../actions/residentActions";

class ChoreEditorContainer extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.chore = props.chore
    }

    componentDidMount() {
        this.props.getChoreById(this.props.match.params.choreId)
            .then(_ => this.setState({chore: this.props.chore}))
        this.props.getResidentsByApartmentId(this.props.match.params.apartmentId)
    }

    render() {
        return (
            <div>
                <h1>
                    Chore Editor
                </h1>
                <input value={this.state.chore.description}
                       onChange={event =>
                           this.setState(prevState => {
                               return {chore: {...prevState.chore, description: event.target.value}}
                           })
                       }/>
                <select value={this.state.chore.assignee}
                        onChange={event =>
                            this.setState(prevState => {
                                return {chore: {...prevState.chore, assignee: event.target.value}}
                            })}>
                    <option value={''}> </option>
                    {
                        this.props.residents.map(resident =>
                            <option value={resident.name}
                                    key={resident.id}>
                                {resident.name}
                            </option>
                        )
                    }
                </select>
                <button onClick={_ => {
                    console.log(this.state.chore)
                    this.props.updateChore(this.state.chore)
                }}>
                    Save
                </button>
            </div>
        )
    }
}

const stateToPropertyMapper = state => ({
    chore: state.choresReducer.chore,
    residents: state.residentReducer.residents
})

const propertyToDispatchMapper = dispatch => ({
    getChoreById: choreId => getChoreById(dispatch, choreId),
    updateChore: chore => updateChore(dispatch, chore),
    getResidentsByApartmentId: apartmentId => getResidentsByApartmentId(dispatch, apartmentId)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ChoreEditorContainer)
