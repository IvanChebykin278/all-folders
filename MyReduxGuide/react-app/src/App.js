import React from 'react';
import './App.css';
import Table from "./components/Table";
import EntryForm from "./components/EntryForm";
import rootReducer from './store/reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

const initialState = {

};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main className="container" >
            <div>
              <EntryForm />
            </div>
            <div>
              <Table />
            </div>
          </main>
        </div>
      </Provider>
    )
  }
}

