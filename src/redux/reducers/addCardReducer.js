import { ADD_CARD } from "../actions";

const INITIAL_STATE = {
  cards: [],
};

const addCardReducer = (state = INITIAL_STATE , action) => {
  switch(action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, {
          cardName: action.payload.cardName,
          fullName: action.payload.fullName,
          cardNumber: action.payload.cardNumber,
        }]
      }
    default:
      return state;
  };
};

export default addCardReducer;