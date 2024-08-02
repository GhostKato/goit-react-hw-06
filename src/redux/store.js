// store.js

import { createStore } from 'redux';
import rootReducer from './phoneBook/reducers';

const store = createStore(rootReducer);

export default store;
