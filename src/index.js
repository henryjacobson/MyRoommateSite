import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import AdminContainer from "./containers/AdminContainer"
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventEditorComponent from './components/editors/EventEditorComponent';
import FacilityEditorComponent from './components/editors/FacilityEditorComponent';
import eventReducer from './reducers/eventReducer'
import facilityReducer from './reducers/facilityReducer'

const rootReducer = combineReducers({
  eventReducer,
  facilityReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div>
        <Link to="/admin">Admin</Link>
        <Route path="/edit/facility/:facilityId" exact component={FacilityEditorComponent}/>
        <Route path="/edit/event/:eventId" exact component={EventEditorComponent}/>
        <Route path="/admin" exact component={AdminContainer}/>
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

