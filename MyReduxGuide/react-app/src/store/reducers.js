import { combineReducers } from "redux";
import { entryFormReducer } from './entryForm/reducers';
import { tableReducer } from "./table/reducers";


export default combineReducers({
    entryForm: entryFormReducer,
    table: tableReducer
});