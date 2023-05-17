import { SET_EDITED_FAV_REQUEST } from '../actions/actionTypes';

const initialValue = '';

export default function editedFavRequestReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_EDITED_FAV_REQUEST: {
            return action.payload;
        }
        default: {
            return state;
        } 
    }
}