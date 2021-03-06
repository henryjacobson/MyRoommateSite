import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import './index.css';
import './style/MainStyle.css';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import AdminContainer from "./containers/AdminContainer"
import WelcomeComponent from "./components/WelcomeComponent";
import 'font-awesome/css/font-awesome.css'
import * as serviceWorker from './serviceWorker';
import adminReducer from "./reducers/adminReducer";
import accountReducer from "./reducers/accountReducer";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventEditorComponent from './components/editors/EventEditorComponent';
import FacilityEditorComponent from './components/editors/FacilityEditorComponent';
import eventReducer from './reducers/eventReducer'
import facilityReducer from './reducers/facilityReducer'
import choresReducer from "./reducers/choresReducer";
import apartmentReducer from "./reducers/apartmentReducer";
import ApartmentViewContainer from "./containers/ApartmentViewContainer";
import ChoreEditorContainer from "./containers/ChoreEditorContainer";
import residentReducer from "./reducers/residentReducer";
import SearchGroceriesContainer from './containers/SearchGroceriesContainer';
import groceriesReducer from "./reducers/groceriesReducer"
import LoginComponent from './components/LoginComponent';
import PolicyComponent from './components/PolicyComponent';
import RegisterComponent from './components/RegisterComponent';
import ResidentProfileComponent from './components/ResidentProfileComponent';
import AdminProfileComponent from './components/AdminProfileComponent';
import GroceryItemEditorComponent from './components/editors/GroceryItemEditorComponent';
import FoodApi from './components/search/FoodApi';
import searchReducer from './reducers/searchReducer'

const rootReducer = combineReducers({
    eventReducer,
    facilityReducer,
    choresReducer,
    apartmentReducer,
    adminReducer,
    residentReducer,
    accountReducer,
    groceriesReducer,
    searchReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div className="wbdv-color-scheme">
                <Helmet>
                    <style>{'body { background-color: rgb(183, 255, 148); }'}</style>
                </Helmet>
                {/* <Link to="/admin">[ADMIN]</Link>
                <Link to="/welcome">Welcome</Link>
                <Link to="/login">Login</Link>
                <Link to="/policy">Policy</Link>
                <Link to="/register">Register</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/adminProfile">Admin Profile</Link> */}


                <Route path="/" exact component={WelcomeComponent} />
                <Route path="/login" exact component={LoginComponent} />
                <Route path="/policy" exact component={PolicyComponent} />
                <Route path="/register" exact component={RegisterComponent} />
                <Route path="/profile" exact component={ResidentProfileComponent} />
                <Route path="/profile/:id" exact component={ResidentProfileComponent} />





                <Route path={'/edit/groceries/:groceryItemId'} exact component={GroceryItemEditorComponent} />
                <Route path="/edit/facility/:facilityId" exact component={FacilityEditorComponent} />
                <Route path="/edit/event/:eventId" exact component={EventEditorComponent} />
                <Route path="/admin" exact component={AdminContainer} />
                <Route path={'/apartments/:apartmentId'} exact component={ApartmentViewContainer} />
                <Route path={'/apartments/:apartmentId/chores/:choreId'} exact component={ChoreEditorContainer} />
                <Route path={['/apartments/:apartmentId/search',
                    '/apartments/:apartmentId/search/:item']} exact component={SearchGroceriesContainer} />
            </div>
        </Provider>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
