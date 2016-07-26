import * as types from '../../pstreetlights/actions/apactions.js';

const initialState = {
  pics: '',
  attributes: ''
};

const editorReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.CLICK_LUMINARIA:

      return Object.assign({}, state, {
        pics: action.state.pics,
        attributes:  state.state.graphics
      });
    break;
  }

  return state;

}

export default editorReducer;
