import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(
  rootReducer,
  // Enable Redux DevTools Extension if available
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
