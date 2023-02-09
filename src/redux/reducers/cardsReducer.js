import { ADD_CARD, REMOVE_CARD } from "../actions";

const INITIAL_STATE = {
  cards: [],
};

const cardsReducer = (state = INITIAL_STATE , action) => {
  switch(action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, {
          cardName: action.payload.cardName,
          fullName: action.payload.fullName,
          cardNumber: action.payload.cardNumber,
          id: state.cards.length === 0 ? 1 : (state.cards[state.cards.length - 1].id) + 1,
        }]
      }
    case REMOVE_CARD:
      return {
        ...state,
        cards: state.cards.filter((item) => item.id !== action.payload.id),
      }
    default:
      return state;
  };
};

export default cardsReducer;