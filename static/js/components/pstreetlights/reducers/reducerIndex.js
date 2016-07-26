import { combineReducers } from 'redux';

// Reducers
import editorReducer from './editor-reducer';


// Combine Reducers
var reducers = combineReducers({
    editorState: editorReducer
});

export default reducers;
