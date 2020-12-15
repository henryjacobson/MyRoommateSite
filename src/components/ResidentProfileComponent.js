import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ResidentService, { updateResident } from "../services/residentService";
import AdminService from "../services/AdminService";
import ApartmentService from "../services/apartmentService";
import { findAccountByCookies, logout, updateAccount } from "../services/AccountService";
import { getChoresForApartment, getChoresForApartmentFiltered } from "../actions/choresActions";

class ResidentProfileComponent extends React.Component {

    state = {
        editing: false,
        loggedInResident: {
            name: '',
            email: '',
            apartmentId: ''
        },
        apartment: { address: '' },
    }

    componentDidMount() {

        this.props.getAccount()
            .then(() => {
                this.setState(prev => {
                    return { ...prev, account: this.props.account }
                })
                console.log(this.props.account)
                this.props.match.params.id &&
                    this.props.findResidentById(this.props.match.params.id)
                        .then(res => {
                            this.setState(prev => {
                                return { ...prev, loggedInResident: res }
                            })

                            this.props.findApartmentById(this.state.loggedInResident.apartmentId)
                                .then(ap => this.setState(prev => {
                                    return { ...prev, apartment: ap }
                                }))

                            console.log(this.state.loggedInResident)

                            this.props.getChoresForApartmentFiltered(this.state.loggedInResident.apartmentId, this.state.loggedInResident.name)
                        })
                !this.props.match.params.id &&
                    this.props.findResidentById(this.props.account.residentId)
                        .then(res => {
                            this.setState(prev => {
                                return { ...prev, loggedInResident: res }
                            })

                            this.props.findApartmentById(this.state.loggedInResident.apartmentId)
                                .then(ap => this.setState(prev => {
                                    return { ...prev, apartment: ap }
                                }))
                        })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand disabled" to={'/'}>MyRoommate</Link>
                    {
                        this.props.account &&
                        this.props.account.id !== 0 &&
                        this.props.account.resident &&
                        <div className={'float-right'}>
                            Logged in as: <Link to={'/profile'}>{this.props.account && this.props.account.username}</Link>
                        </div>
                    }
                    {
                        this.props.account &&
                        this.props.account.id !== 0 &&
                        !this.props.account.resident &&
                        <div className={'float-right'}>
                            Logged in as: <Link to={'/admin'}>{this.props.account && this.props.account.username}</Link>

                        </div>
                    }
                </nav>
                <div className={'container'}>

                    <div className={'row'}>
                        <div className={'col-sm-6'}>
                            <div className={'container'}>
                                <div className={'row'}>
                                    {
                                        !this.state.editing &&
                                        <div>
                                            {
                                                this.props.account &&
                                                this.state.loggedInResident.id === this.props.account.residentId &&
                                                <div>

                                                    <h3>Resident Username: {this.state.account && this.state.account.username}</h3>
                                                    <h3>Resident Password: {this.state.account && this.state.account.password}</h3>
                                                </div>
                                            }

                                            <h5>Resident name: {this.state.loggedInResident.name}</h5>
                                            <h5>email: {this.state.loggedInResident.email}</h5>
                                            {/* <h5>
                                            <Link to={`/apartments/${this.state.apartment.id}`}>
                                                {this.state.apartment.address}
                                            </Link>
                                        </h5> */}
                                            {/* <h5>admin: {this.props.account && this.props.account.adminId !== 0 && this.props.findAdminById(this.props.account.adminId).email}</h5> */}
                                            {
                                                this.props.account &&
                                                this.state.loggedInResident.id === this.props.account.residentId &&
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    onClick={() => {
                                                        this.setState(prev => {
                                                            return {
                                                                ...prev,
                                                                editing: true
                                                            }
                                                        })
                                                    }}>
                                                    Edit
                                            </button>}
                                        </div>

                                    }

                                    {
                                        this.state.editing &&
                                        <div>
                                            <label htmlFor="username">Username</label>
                                            <input
                                                className="form-control"
                                                value={this.state.account && this.state.account.username}
                                                id="username"
                                                onChange={event => {
                                                    this.setState(prevState => {
                                                        return {
                                                            ...prevState,
                                                            account: {
                                                                ...prevState.account,
                                                                username: event.target.value
                                                            }
                                                        }
                                                    })
                                                }} />

                                            <label htmlFor="password">Password</label>
                                            <input
                                                className="form-control"
                                                value={this.state.account && this.state.account.password}
                                                id="password"
                                                onChange={event => {
                                                    this.setState(prevState => {
                                                        return {
                                                            ...prevState,
                                                            account: {
                                                                ...prevState.account,
                                                                password: event.target.value
                                                            }
                                                        }
                                                    })
                                                }} />

                                            <label htmlFor="name">Name</label>
                                            <input
                                                className="form-control"
                                                value={this.state.loggedInResident && this.state.loggedInResident.name}
                                                id="name"
                                                onChange={event => {
                                                    this.setState(prevState => {
                                                        return {
                                                            ...prevState,
                                                            loggedInResident: {
                                                                ...prevState.loggedInResident,
                                                                name: event.target.value
                                                            }
                                                        }
                                                    })
                                                }} />

                                            <label htmlFor="email">email</label>
                                            <input
                                                className="form-control"
                                                value={this.state.loggedInResident && this.state.loggedInResident.email}
                                                id="email"
                                                onChange={event => {
                                                    this.setState(prevState => {
                                                        return {
                                                            ...prevState,
                                                            loggedInResident: {
                                                                ...prevState.loggedInResident,
                                                                email: event.target.value
                                                            }
                                                        }
                                                    })
                                                }} />

                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    updateResident(this.state.loggedInResident)
                                                    updateAccount(this.state.account)
                                                    this.setState(prev => {
                                                        return {
                                                            ...prev,
                                                            editing: false
                                                        }
                                                    })
                                                }}>
                                                Save
                                        </button>
                                        </div>

                                    }
                                </div>


                            </div>
                        </div>

                        <div className={'col-sm-6'}>
                            <h4>
                                Chores:
                            </h4>
                            <ul className={"list-group"}>
                                {console.log(this.props.chores)}
                                {
                                    this.props.chores &&
                                    this.props.chores.map(chore =>
                                        <li className={'list-group-item'}>
                                            {chore.description}
                                        </li>
                                    )
                                }
                            </ul>
                            {this.props.account.id !== 0 &&
                                <div>


                                    <Link to={`/apartments/${this.state.apartment.id}`}>
                                        <button className="btn btn-primary">Go to my apartment</button>
                                    </Link>
                                    <Link to="/">
                                        <button className={'btn btn-danger'} onClick={() => this.props.Logout()}>
                                            Logout
                                </button>
                                    </Link>
                                </div>}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const stateToProperty = (state) => ({
    account: state.accountReducer.account,
    chores: state.choresReducer.chores
})
const propertyToDispatchMapper = (dispatch) => ({
    findResidentById: (id) =>
        ResidentService.findResidentById(id).then(resident => resident),
    findAdminById: (id) =>
        AdminService.findAdminById(id).then(admin => admin),
    findApartmentById: (id) =>
        ApartmentService.getApartmentById(id).then(apart => apart),
    getAccount: () => findAccountByCookies()
        .then(acc => dispatch({
            type: "LOGIN",
            account: acc
        })),
    getChoresForApartmentFiltered: (apartmentId, name) => getChoresForApartmentFiltered(dispatch, apartmentId, name),
    Logout: () => logout().then(
        () => dispatch({
            type: "LOGOUT"
        }))
})

export default connect
    (stateToProperty, propertyToDispatchMapper)
    (ResidentProfileComponent)
