import {SET_FAV_REQUEST, SET_EDITED_FAV_REQUEST} from "./actionTypes";

export const setFavRequest = (favRequest) => {
    return {
        type: SET_FAV_REQUEST,
        payload: favRequest
    }
}

export const setEditedFavRequest = (editedFavRequest) => {
    return {
        type: SET_EDITED_FAV_REQUEST,
        payload: editedFavRequest
    }
}
