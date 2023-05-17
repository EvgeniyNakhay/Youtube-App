import {SET_IS_EDIT_MODAL_OPEN} from "./actionTypes";

export const setIsEditModalOpen = (isEditModalOpen) => {
    return {
        type: SET_IS_EDIT_MODAL_OPEN,
        payload: isEditModalOpen,
    }
}
