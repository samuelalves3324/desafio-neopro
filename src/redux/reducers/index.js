import { combineReducers } from 'redux';
import addCardReducer from './addCardReducer';
import changeVisibilityReducer from './changeVisibilityReducer';

const rootReducer = combineReducers({ addCardReducer, changeVisibilityReducer })

export default rootReducer;
