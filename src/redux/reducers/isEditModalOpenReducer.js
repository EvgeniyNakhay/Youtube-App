import {SET_IS_EDIT_MODAL_OPEN} from '../actions/actionTypes';

const initialValue = false;

export default function isEditModalOpenReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_IS_EDIT_MODAL_OPEN: {
            return !state;
        }
        default: {  
            return state;
        } 
    }
}