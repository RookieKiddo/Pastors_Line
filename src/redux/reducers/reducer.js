import {
  SHOW_MODAL_A,
  SHOW_MODAL_B,
  SHOW_MODAL_C,
  HIDE_MODAL,
  TOGGLE_CHECKBOX,
  SET_CONTACTS,
  SET_SEARCH_QUERY,
} from "../actions/actions";

const initialState = {
  showModalA: false,
  showModalB: false,
  showModalC: false,
  contacts: [],
  searchQuery: "",
  checked: false,
  currentContact: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL_A":
      return {
        ...state,
        showModalA: true,
        showModalB: false,
        showModalC: false,
      };
    case "SHOW_MODAL_B":
      return {
        ...state,
        showModalA: false,
        showModalB: true,
        showModalC: false,
      };
    case "SHOW_MODAL_C":
      return {
        ...state,
        showModalA: false,
        showModalB: false,
        showModalC: true,
        contacts: action.contacts,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModalA: false,
        showModalB: false,
        showModalC: false,
        contacts: null,
      };
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.contacts,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.query,
      };
    case "TOGGLE_CHECKBOX":
      return {
        ...state,
        checked: !state.checked,
      };
    default:
      return state;
  }
};

export default reducer;
