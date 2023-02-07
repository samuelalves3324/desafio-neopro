export const ADD_CARD = 'ADD_CARD';
export const CHANGE_CARD_NUMBERS_VISIBILITY = 'CHANGE_CARD_NUMBERS_VISIBILITY';

export const addCard = ({cardName, fullName, cardNumber}) => ({
  type: ADD_CARD,
  payload: {
    cardName,
    fullName,
    cardNumber,
  }
});

export const changeCardNumbersVisibility = () => ({
  type: HIDE_CARD_NUMBER,
});
