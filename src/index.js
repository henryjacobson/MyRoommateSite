import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import AdminContainer from "./containers/AdminContainer"
import WelcomeComponent from "./components/WelcomeComponent";
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
 
const rootReducer = combineReducers({
    eventReducer,
    facilityReducer,
    choresReducer,
    apartmentReducer,
    adminReducer,
    residentReducer,
    accountReducer,
    groceriesReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div>
                <Link to="/admin">Admin</Link>
                <Route path="/edit/facility/:facilityId" exact component={FacilityEditorComponent} />
                <Route path="/edit/event/:eventId" exact component={EventEditorComponent} />
                <Route path="/admin" exact component={AdminContainer} />
                <Route path={'/apartments/:apartmentId'} exact component={ApartmentViewContainer} />
                <Route path={'/apartments/:apartmentId/chores/:choreId'} exact component={ChoreEditorContainer} />
                <Route path={'/welcome'} exact component={WelcomeComponent} />
                <Route path={'/apartments/:apartmentId/groceries'} exact component={SearchGroceriesContainer} />
            </div>
        </Provider>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
