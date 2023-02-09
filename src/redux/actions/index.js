export const ADD_CARD = 'ADD_CARD';
export const CHANGE_CARD_NUMBERS_VISIBILITY = 'CHANGE_CARD_NUMBERS_VISIBILITY';
export const REMOVE_CARD = 'REMOVE_CARD';

export const addCard = ({cardName, fullName, cardNumber}) => ({
  type: ADD_CARD,
  payload: {
    cardName,
    fullName,
    cardNumber,
  }
});

export const changeCardNumbersVisibility = () => ({
  type: CHANGE_CARD_NUMBERS_VISIBILITY,
});

export const removeCard = (id) => ({
  type: REMOVE_CARD,
  payload: {
    id,
  }
});
