import { CHANGE_CARD_NUMBERS_VISIBILITY } from "../actions";

const INITIAL_STATE = {
  hidden: false,
}

const changeVisibilityReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_CARD_NUMBERS_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden,
      }
    default:
      return state;
  };
};

export default changeVisibilityReducer;
