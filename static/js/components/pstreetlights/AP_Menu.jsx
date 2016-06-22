import React from 'react';
import ReactDOM from 'react-dom';
import cookieHandler from 'cookie-handler';
import {saveGisredLogin} from '../../services/login-service';

class APMenu extends React.Component {

  constructor(props){
    super(props);



  }
  componentWillMount(){
    //if theres no cookie, the user cannot be in dashboard.
    if(!cookieHandler.get('usrprmssns')){
      window.location.href = "index.html";
      return;
    }
    //else , charge the modules that the user has permissions

  }

  render(){
    return (
    <div className="wrapper_apmenu">
        Hola
    </div>
  );
  }
}

export default APMenu;
