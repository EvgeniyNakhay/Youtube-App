import {ADD_TO_FAVOURITES, DELETE_FAV_REQUEST, SAVE_EDITED_FAV_REQUEST} from "../actions/actionTypes";
import {v4 as uuidv4} from 'uuid';

const initialFavourites = [];

export default function favouritesReducer(state = initialFavourites, action) {
    switch (action.type) {
        case ADD_TO_FAVOURITES: {
            return [
                ...state, 
                {
                    id: uuidv4(),
                    searchTerm: action.payload.searchTerm,
                    favRequest: action.payload.favRequest,
                    sortByF: action.payload.sortByF,
                    maxResult: action.payload.maxResult
                }
            ]
        }

        case DELETE_FAV_REQUEST: {
            const newArr = state.filter(item => item.id !== action.payload);
            return newArr;
        }

        case SAVE_EDITED_FAV_REQUEST: {
            const array = state.map((item) => 
                 item.id === action.payload.id
                 ?
                 {
                    ...item, 
                    searchTerm: action.payload.searchTerm,
                    favRequest: action.payload.favRequestInput,
                    sortByF:action.payload.sortByF,
                    maxResult:action.payload.maxResult
                }
                 :
                 item
            )
            return [...array]
        }
        default: {
            return state;
        } 
    }
}
