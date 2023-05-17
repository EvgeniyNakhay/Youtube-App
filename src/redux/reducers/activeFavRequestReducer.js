import { ACTIVE_FAV_REQUEST, SET_EDITED_FAV_REQUEST, SET_EDITED_SEARCH_TERM } from '../actions/actionTypes';

const initialValue = {
    sortByF: 'rating',
    maxResult: 12,
};

export default function activeFavRequestReducer(state = initialValue, action) {
    switch (action.type) {
        case ACTIVE_FAV_REQUEST: {
            return {
                id: action.payload.id,
                searchTerm: action.payload.searchTerm,
                favRequest: action.payload.favRequest,
                sortByF: action.payload.sortByF,
                maxResult: action.payload.maxResult,    
            }
        }
        case SET_EDITED_SEARCH_TERM: {
            return {
                ...state,
                searchTerm: action.payload,
            }
        }
        case SET_EDITED_FAV_REQUEST: {
            return {
                ...state,
                favRequest: action.payload,
            }
        }
        default: {
            return state;
        } 
    }
}