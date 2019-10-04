import { NEW_ENTRY } from "./action";

const defaultState = {
    item: {}
};

export const entryFormReducer = (state = defaultState, action) => {
    switch(action.type) {
        case NEW_ENTRY:
            return {
                ...state,
                item: action.payload
            }

        default:
            return state;
    }
}