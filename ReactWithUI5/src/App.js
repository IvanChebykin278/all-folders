/*eslint no-undef: "off"*/
/*eslint no-restricted-globals: "off"*/
/*eslint no-unused-expressions: "off"*/
//'https://services.odata.org/V2/OData/OData.svc/'
import React, { Component } from 'react';
import rootReducer from "./store/reducers";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import Page from "./components/Page";
import '@openui5/sap.ui.core/src/sap-ui-core';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          hello world
          <Page />
        </div>
      </Provider>
    )
  }

}

