import { createStore } from 'redux';
import reducers from '../../pstreetlights/reducers/reducerIndex.js';

const store = createStore(reducers);
export default store;
