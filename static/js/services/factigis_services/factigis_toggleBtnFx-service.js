function toggleOff(mytoggleBtnName, stateBtnHandler, stateToggleBtn ){
  switch (mytoggleBtnName) {
    case 'cliente':
    console.log("apagando control cliente...");
    dojo.disconnect(stateBtnHandler);
    $('.factigis_btnSelectCliente').css('color',"black");
    break;
    case 'poste':
      console.log("apagando control poste...");
      dojo.disconnect(stateBtnHandler);
      $('.factigis_btnSelectPoste').css('color',"black");
    break;
    case 'direccion':
      console.log("apagando control direccion...");
      dojo.disconnect(stateBtnHandler);
      $('.factigis_btnSelectDireccion').css('color',"black");
    break;
    case 'calle':

    break;
    default:

  }

  /* the idea
    if(this.state.toggleDireccion=='ON'){
      console.log("apagando control direccion...");
      this.setState({toggleDireccion: 'OFF'});
      dojo.disconnect(this.state.btnDireccion);
      $('.factigis_btnSelectDireccion').css('color',"black");
    }
    if(this.state.togglePoste=='ON'){
      console.log("apagando control poste...");
      this.setState({togglePoste: 'OFF'});
      dojo.disconnect(this.state.btnPoste);
      $('.factigis_btnSelectPoste').css('color',"black");
    }
    */
}


export default toggleOff;
