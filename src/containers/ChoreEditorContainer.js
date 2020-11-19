import React from 'react';
import {connect} from 'react-redux';
import {getChoreById, updateChore} from "../actions/choresActions";

class ChoreEditorContainer extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.chore = props.chore
    }

    componentDidMount() {
        this.props.getChoreById(this.props.match.params.choreId)
            .then(_ => this.setState({chore: this.props.chore}))
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
    chore: state.choresReducer.chore
})

const propertyToDispatchMapper = dispatch => ({
    getChoreById: choreId => getChoreById(dispatch, choreId),
    updateChore: chore => updateChore(dispatch, chore)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ChoreEditorContainer)
