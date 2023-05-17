import {SET_FAV_REQUEST} from "../actions/actionTypes";

const initialValue = '';

export default function favRequestReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_FAV_REQUEST: {
            return action.payload;
        }
        default: {
            return state;
        } 
    }
}