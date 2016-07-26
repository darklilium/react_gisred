import { createStore } from 'redux';
import reducers from '../../pstreetlights/reducers/reducerIndex.js';

const store = createStore(reducers);
console.log(store.getState());

export default store;
