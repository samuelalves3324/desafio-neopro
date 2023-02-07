export const ADD_CARD = 'ADD_CARD';

export const addCard = ({cardName, fullName, cardNumber}) => ({
  type: ADD_CARD,
  payload: {
    cardName,
    fullName,
    cardNumber,
  }
});
