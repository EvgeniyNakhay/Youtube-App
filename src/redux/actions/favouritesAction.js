import {ADD_TO_FAVOURITES, DELETE_FAV_REQUEST, SAVE_EDITED_FAV_REQUEST} from "./actionTypes";

export const addToFavourites = (searchTerm, favRequest, sortByF, maxResult) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: {
            searchTerm: searchTerm,
            favRequest: favRequest,
            sortByF: sortByF,
            maxResult: maxResult,
        }
    }
}
export const deleteFavRequest = (id) => {
    return {
        type: DELETE_FAV_REQUEST,
        payload: id,
    }
}
export const saveEditedFavRequest = (id, editedSearchTerm, editedFavRequest, editedSortByF, editedMaxResult) => {           
    return {
        type: SAVE_EDITED_FAV_REQUEST,
        payload: {
            id: id,
            searchTerm: editedSearchTerm,
            favRequestInput: editedFavRequest,
            sortByF: editedSortByF,
            maxResult: editedMaxResult
        }                       
    }
}
