import { combineReducers } from "redux";
import requestedVideosReducer from "./requestedVideosReducer";
import searchTermReducer from './searchTermReducer';
import favouritesReducer from "./favouritesReducer";
import favRequestReducer from "./favRequestReducer";
import isModalOpenReducer from "./isModalOpenReducer";
import isEditModalOpenReducer from "./isEditModalOpenReducer";
import editedFavRequestReducer from "./editedFavRequestReducer";
import editedSearchTermReducer from "./editedSearchTermReducer";
import activeFavRequestReducer from "./activeFavRequestReducer";

export default combineReducers({
    requestedVideos: requestedVideosReducer,
    searchTerm: searchTermReducer,
    favRequest: favRequestReducer,
    favourites: favouritesReducer,
    isModalOpen: isModalOpenReducer,
    isEditModalOpen: isEditModalOpenReducer,
    editedSearchTerm: editedSearchTermReducer,
    editedFavRequest: editedFavRequestReducer,
    activeFavRequest: activeFavRequestReducer,
})