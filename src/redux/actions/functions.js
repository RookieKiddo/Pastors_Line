import {
  SHOW_MODAL_A,
  SHOW_MODAL_B,
  SHOW_MODAL_C,
  HIDE_MODAL,
  TOGGLE_CHECKBOX,
  SET_CONTACTS,
  SET_SEARCH_QUERY,
} from "./actions";

export const showModalA = () => ({ type: SHOW_MODAL_A });
export const showModalB = () => ({ type: SHOW_MODAL_B });
export const showModalC = (contacts) => ({ type: SHOW_MODAL_C, contacts });
export const hideModal = () => ({ type: HIDE_MODAL });
export const toggleCheckbox = () => ({ type: TOGGLE_CHECKBOX });
export const setContacts = (contacts) => ({ type: SET_CONTACTS, contacts });
export const setSearchQuery = (query) => ({ type: SET_SEARCH_QUERY, query });
