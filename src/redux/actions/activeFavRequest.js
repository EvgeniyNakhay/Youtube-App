import { ACTIVE_FAV_REQUEST } from "./actionTypes";

export const activeFavRequest = (id, searchTerm, favRequest, sortByF, maxResult) => {
    return {
        type: ACTIVE_FAV_REQUEST,
        payload: {
            id: id,
            searchTerm: searchTerm,
            favRequest: favRequest,
            sortByF: sortByF,
            maxResult: maxResult,
        }
    }
}