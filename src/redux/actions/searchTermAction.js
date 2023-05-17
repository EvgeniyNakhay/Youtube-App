import { SET_SEARCH_TERM, SET_EDITED_SEARCH_TERM} from "./actionTypes";

export const setSearchTerm = (searchTerm) => {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm,
    }
}

export const setEditedSearchTerm = (editedSearchTerm) => {
    return {
        type: SET_EDITED_SEARCH_TERM,
        payload: editedSearchTerm,
    }
}