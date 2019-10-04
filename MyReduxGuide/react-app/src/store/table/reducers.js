import { FETCH_ENTRIES } from "./actions";

const defaultState = {
    items: []
};

export const tableReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_ENTRIES: 
            return {
                ...state,
                items: action.payload
            }

        default:
            return state;
    }
}