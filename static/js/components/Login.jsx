import React from 'react';
//import { genericLogin } from '../services/login-service';
import {notifications} from '../utils/notifications';
import { muniLogin } from '../services/login-service';
//import { factigisLogin } from '../services/login-service';
import { gisredLogin } from '../services/login-service';

class LoginApp extends React.Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount(){
    //change the loginwall dinamically
    let randomPicNumber = Math.floor((Math.random() * 6) + 1);
    //********Cambiar randomPicSrc para test/prod*******
    //let randomPicSrc = "css/images/login_images/loginwall"+ randomPicNumber+ ".jpg"; //prod
    let randomPicSrc = "static/css/images/login_images/loginwall"+ randomPicNumber+ ".jpg";//desarrollo
    $('.login_wrapper').css("background-image", "url("+randomPicSrc+")");
  }

  onClick(){

    var userValue = this.refs.username.value;
    var passValue = this.refs.password.value;
    //If they dont put any username or password
    if (userValue=="" || passValue==""){
      notifications('Login incorrecto, intente nuevamente.', 'Login_Error', '.notification-login');
      return;
    }
    //For domain users
    if (userValue.includes('vialactea\\')){
      console.log("Trying to access REACT_GISRED_DASHBOARD");
      gisredLogin(userValue, passValue);
      return;

    //for cityhall users
    }if(userValue.includes('muni')){
      console.log("Trying to access REACT_AP_WEB");
      muniLogin(userValue, passValue);
      return;

    }else {
      console.log("Trying to access REACT_GISRED_DASHBOARD");
      userValue =  'vialactea\\'+this.refs.username.value;
      gisredLogin(userValue, passValue);
    }
  }

  render(){
    return (
        <div className="login_wrapper_content">
          <article className="login_article">
            <input className="login__input" ref="username" type="text" placeholder="miusuario" defaultValue="ehernanr" />
            <input className="login__input" ref="password" type="password" placeholder="password" defaultValue="Chilquinta6"/>
            <input className="login__submit" type="submit" onClick={this.onClick} defaultValue="Entrar" />

          </article>
          <aside className="login_aside">
              <div className="aside_div">
                <img className="login_aside__img" />
                <h1 className="login_aside__h1"> Bienvenidos a GISRED </h1>
              </div>
              <div className="aside_div2">
                <p className="login_aside__p">Gestor de aplicaciones que permiten el análisis de la red eléctrica<br />
                La información contenida en este sitio se obtiene del sistema Smallworld y catastro</p>
              </div>
          </aside>
        </div>



    );
  }
}

export default LoginApp;
