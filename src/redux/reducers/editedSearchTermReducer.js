import { SET_EDITED_SEARCH_TERM } from '../actions/actionTypes';

const initialValue = '';

export default function editedSearchTermReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_EDITED_SEARCH_TERM: {
            return action.payload;
        }
        default: {
            return state;
        } 
    }
}