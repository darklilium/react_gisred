import * as types from '../../pstreetlights/actions/apactions.js';

const initialState = {
  pics: '',
  attributes: ''
};

const editorReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.CLICK_LUMINARIA:

      return Object.assign({}, state, {
        pics: state.pics,
        attributes:  state.graphics
      });
      
    break;
  }

  return state;

}

export default editorReducer;
