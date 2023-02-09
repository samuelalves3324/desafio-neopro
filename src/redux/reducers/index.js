import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import changeVisibilityReducer from './changeVisibilityReducer';

const rootReducer = combineReducers({ cardsReducer, changeVisibilityReducer })

export default rootReducer;
