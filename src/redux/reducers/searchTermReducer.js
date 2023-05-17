import { SET_SEARCH_TERM, SET_EDITED_SEARCH_TERM } from '../actions/actionTypes';

const initialValue = '';

export default function searchTermReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_SEARCH_TERM: {
            return action.payload;
        }
        case SET_EDITED_SEARCH_TERM: {
            return action.payload;
        }
        default: {
            return state;
        } 
        
    }
}