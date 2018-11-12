import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import rootReducer from '../reducers';

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(
  createStore
);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
};