import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getChoreById, updateChore, deleteChore } from "../actions/choresActions";
import { getResidentsByApartmentId } from "../actions/residentActions";

class ChoreEditorContainer extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.chore = props.chore
    }

    componentDidMount() {
        this.props.getChoreById(this.props.match.params.choreId)
            .then(_ => this.setState({ chore: this.props.chore }))
        // this.setState({chore: this.props.chore})
        this.props.getResidentsByApartmentId(this.props.match.params.apartmentId)
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand disabled" href="#">Edit Chore: {this.state.chore.description}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#">
                                <Link to={`/apartments/${this.props.match.params.apartmentId}`}>
                                    Apartment
                                </Link>
                            </a>

                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="form-group row">
                        <label for="description" className="col-sm-2 col-form-label">Chore</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                id="description"
                                value={this.state.chore.description}
                                placeholder="Input Chore Here"
                                onChange={event => {
                                    this.setState(prevState => {
                                        return {
                                            chore: {
                                                ...prevState.chore,
                                                description: event.target.value
                                            }
                                        }
                                    })
                                }} />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" for="status">Assign To</label>
                        <div className="col-sm-10">
                            <select className="custom-select" id="asignee"
                                value={this.state.chore.asignee}
                                onChange={event => {
                                    this.setState(prevState => {
                                        return {
                                            chore: {
                                                ...prevState.chore,
                                                asignee: event.target.value
                                            }
                                        }
                                    })
                                }}>
                                <option selected>Choose...</option>
                                {
                                    this.props.residents.map(resident =>
                                        <option value={resident.name}
                                            key={resident.id}>
                                            {resident.name}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11">
                            <Link to={`/apartments/${this.props.match.params.apartmentId}`}>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    onClick={_ => {
                                        console.log(this.state.chore)
                                        this.props.updateChore(this.state.chore)
                                    }}>
                                    Save
                                </button>
                            </Link>

                        </div>
                        {/* <div className="col-sm-1">
                            <Link to={`/apartments/${this.props.match.params.apartmentId}`}>
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    onClick={() => this.props.deleteChore(this.state.chore)}>
                                    Delete
                                </button>
                            </Link>

                        </div> */}
                    </div>
                </div>





                {/* <input value={this.state.chore.description}
                    onChange={event =>
                        this.setState(prevState => {
                            return { chore: { ...prevState.chore, description: event.target.value } }
                        })
                    } />
                <select value={this.state.chore.asignee}
                    onChange={event =>
                        this.setState(prevState => {
                            return { chore: { ...prevState.chore, asignee: event.target.value } }
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
                </button> */}
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
    getResidentsByApartmentId: apartmentId => getResidentsByApartmentId(dispatch, apartmentId),
    deleteChore: chore => deleteChore(dispatch, chore)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (ChoreEditorContainer)
