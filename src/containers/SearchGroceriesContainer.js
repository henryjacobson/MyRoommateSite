import React from 'react'
import FoodApi from '../components/search/FoodApi'
import {Link} from 'react-router-dom'
import GroceriesComponent from '../components/search/GroceriesComponent'
import { connect } from 'react-redux'
import { getGroceriesForApartment } from '../actions/groceriesActions'
import {getApartmentById} from "../actions/apartmentActions";

class SearchGroceriesContainer extends React.Component {
    componentDidMount() {
        const apartmentId = this.props.match.params.apartmentId
        this.props.getGroceriesForApartment(apartmentId)
        this.props.getApartmentById(apartmentId)
    }
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand disabled" to={'/'}>MyRoommate</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="#">
                                    <Link to={`/apartments/${this.props.match.params.apartmentId}`}>
                                    Apartment
                                    </Link>
                                </a>
                                <a className="nav-item nav-link" href="#">
                                    <Link to="/profile">Profile</Link>
                                    
                                </a>
                            </div>
                        </div>

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
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className='row justify-content-center'>
                                <h1>
                                    Search Groceries
                        </h1>
                            </div>
                            <div className='row justify-content-center '>
                                <FoodApi apartmentId={this.apartmentId}/>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="row">
                                <h4>Your Grocery List:</h4>
                            </div>
                            <div className="row">
                                <GroceriesComponent />
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

const stateToProperty = state => ({
    apartment: state.apartmentReducer.apartment,
    residents: state.residentReducer.residents,
    account: state.accountReducer.account
})

const propertyToDispatchMapper = dispatch => ({
    getGroceriesForApartment: apartmentId => getGroceriesForApartment(dispatch, apartmentId),
    getApartmentById: apartmentId => getApartmentById(dispatch, apartmentId)
})

export default connect
    (stateToProperty, propertyToDispatchMapper)
    (SearchGroceriesContainer)



