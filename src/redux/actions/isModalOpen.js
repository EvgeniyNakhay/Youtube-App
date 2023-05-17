import {SET_IS_MODAL_OPEN} from "./actionTypes";

export const setIsModalOpen = (isModalOpen) => {
    return {
        type: SET_IS_MODAL_OPEN,
        payload: isModalOpen,
    }
}

