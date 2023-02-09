import { persistStore, persistReducer } from 'redux-persist';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
