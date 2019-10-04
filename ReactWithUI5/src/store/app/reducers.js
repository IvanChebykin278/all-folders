import {FETCH_ENTRIES, FILTER_ENTRIES, GET_ENTRY_BY_ID} from "./actions";

const defaultState = {
    items: []
};

export const appReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_ENTRIES: 
            return {
                ...state,
                items: action.payload
            }
        case FILTER_ENTRIES:
            return {
                ...state,
                items: action.payload
            }
        case GET_ENTRY_BY_ID:
                return {
                    ...state,
                    items: [action.payload]
                }
        default:
            return state;
    }
}