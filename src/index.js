import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import EventSearchContainer from "./containers/EventSearchContainer"
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import choresReducer from "./reducers/choresReducer";
import apartmentReducer from "./reducers/apartmentReducer";
import ApartmentViewContainer from "./containers/ApartmentViewContainer";

const rootReducer = combineReducers({
    choresReducer,
    apartmentReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store = {store}>
      <Router>
          <div>
              <Route
                  path={'/apartments/:apartmentId'}
                  component={ApartmentViewContainer}/>
              {/*<Route*/}
              {/*    path={'/apartment/:apartmentId/editor/:choreId'}*/}
              {/*    component={ChoreEditorContainer}/>*/}
          </div>
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

