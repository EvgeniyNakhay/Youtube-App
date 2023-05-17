import { SET_IS_MODAL_OPEN} from '../actions/actionTypes';

const initialValue = false;

export default function isModalOpenReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_IS_MODAL_OPEN: {
            return !state;
        }
        default: {
            return state;
        } 
    }
}