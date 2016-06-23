//redux

function onClickLuminaria(state = [],action){
  console.log(action, state);
  switch (action.type) {
    case 'CLICK_LUMINARIA':
      return Object.assign({},state,{attributes: action.attributes});
    break;
    default:
    return state;
  }
}
export default onClickLuminaria;
