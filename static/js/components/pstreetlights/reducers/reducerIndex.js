import { combineReducers } from 'redux';

// Reducers
import editorReducer from './editor-reducer';


// Combine Reducers
var reducers = combineReducers({
    editor: editorReducer
});

export default reducers;
