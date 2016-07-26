import * as types from '../../pstreetlights/actions/apactions.js';

export function getLuminariaDetails(lumDetails){
  return {
    type: types.CLICK_LUMINARIA,
    lumDetails
  };
}
