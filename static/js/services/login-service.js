import {notifications} from '../utils/notifications';
import myLayers from './layers-service';
import token from '../services/token-service';
import createQueryTask from '../services/createquerytask-service';
import {regionsExtent} from '../services/ap_services/regionsExtent-service';
import my_AP_Settings from '../services/ap_services/ap_settings-service';
import cookieHandler from 'cookie-handler';

function saveLogin(user,page,mod, tkn){

  const data = {
    f: 'json',
    adds: JSON.stringify([{ attributes: { "usuario": user, "pagina": page, "module": mod  }, geometry: {} }]),
    token: tkn
  };

  jQuery.ajax({
    method: 'POST',
    url: "http://gisred.chilquinta.cl:5555/arcgis/rest/services/Admin/LogAccesos/FeatureServer/1/applyedits",
    dataType:'html',
    data: data
  })
  .done(d =>{
    console.log(d,"pase");
  })
  .fail(f=>{
    console.log(f,"no pase")
  });
}


function muniLogin(user,pass){
  const url = myLayers.read_tokenURL();
  const genericUser = {
    user: 'vialactea\\ehernanr',
    pass: 'Chilquinta6'
  };
  const data = {
    username: genericUser.user,
    password: genericUser.pass,
    client: 'requestip',
    expiration: 1440,
    format: 'jsonp'
  };

  $.ajax({
    method: 'POST',
    url: url,
    data: data,
    dataType: 'html'
  })
  .done(myToken => {
    if(myToken.indexOf('Exception') >= 0) {
      notifications('Login incorrecto, intente nuevamente.', 'Login_Error', '.notification-login');
      return;
    }
    if (myToken.indexOf('error') >= 0){
      notifications('Login incorrecto, intente nuevamente.', 'Login_Error', '.notification-login');
      return;
    }

    console.log('Requesting service access');
    console.log('Logging in to gisred-ap');
    console.log('writing token into system');
    token.write(myToken);

    const page = "REACT_AP_WEB";
    const module = "AP_CHQ";

    notifications("Logging in...","Login_Success", ".notification-login");

    saveSettings(user);
    // saveLogin(user,page,module,myToken);
  })
  .fail(error => {
    console.log("You are not authorized ):");
    console.log(error);
    notifications("Acceso no autorizado.","Login_Failed", ".notification-login");
  });

  console.log('done');
}


//for ap
function saveSettings(user){
  var getUserAccountSettings = createQueryTask({
    url: myLayers.read_logAccess(),
    whereClause: "usuario = '"+ user+ "'",
    returnGeometry: false
  });

  getUserAccountSettings((map,featureSet) =>{
      let myRegion = regionsExtent().filter(region =>{
      return region[0] ==  featureSet.features[0].attributes.widget;
    });
    //logo,comuna,latx,laty,zoom
    my_AP_Settings.write(
      featureSet.features[0].attributes.usuario, //logo
      featureSet.features[0].attributes.widget, //region
      myRegion[0][1], //latx
      myRegion[0][2], //laty
      myRegion[0][3]); //zoom


    window.location.href = "apchq.html";
  },(error)=>{
    console.log("Error getting the user settings");
  });
}



function gisredLogin(user, pass){
  const url = myLayers.read_tokenURL();

  const data = {
    username: user,
    password: pass,
    client: 'requestip',
    expiration: 1440,
    format: 'jsonp'
  };

  $.ajax({
    method: 'POST',
    url: url,
    data: data,
    dataType: 'html'
  })
  .done(myToken => {

    if(myToken.indexOf('Exception') >= 0) {
      notifications('Login incorrecto, intente nuevamente.', 'Login_Error', '.notification-login');

      return;
    }
    if (myToken.indexOf('error') >= 0){

      notifications('Login incorrecto, intente nuevamente.', 'Login_Error', '.notification-login');
      return;
    }
    
    console.log('writing token into system');
    token.write(myToken);
    //if the login is correct. Get user permission:
    getUserPermission(user, myToken, (UserPermissions)=>{
      console.log("getting permissions",myToken);
        if(UserPermissions=='NOPERMISSIONS'){
          console.log('User doesnt have permissions for any application, dashboard empty...');

          //Save that the user is in dashboard
          let page = "REACT_GISRED";
          let module = "GISRED_DASHBOARD";
          // saveGisredLogin(user,page,module,myToken);
        }else{
          console.log('User has permissions...requesting service access and login in to GISRED_DASHBOARD');

          token.write(myToken);
          cookieHandler.set('usrprmssns',UserPermissions);
          console.log(UserPermissions);

          //Save that the user is in dashboard
          const page = "REACT_GISRED";
          const module = "GISRED_DASHBOARD";
          window.location.href = "gisredDashboard.html";
          // saveGisredLogin(user,page,module,myToken);
          notifications("Logging in...","Login_Success", ".notification-login");
        }
    });

  })
  .fail(error => {
    console.log("You are not authorized ):" , error);
    notifications("Acceso no autorizado.","Login_Failed", ".notification-login");
  });

  console.log('gisred login done');
}

function getUserPermission(user, token, callback){

    console.log("here",user, token);
    var getPermission = createQueryTask({
      url: myLayers.read_logAccess(),
      whereClause: "usuario='"+user + "' AND plataforma='WEB'"
    });

    getPermission((map, featureSet) => {

        let permissions = featureSet.features.map((permission)=>{
          let per = {
            "username": permission.attributes['usuario'],
            "application": permission.attributes['aplicacion'],
            "module": permission.attributes['modulo'],
            "widget": permission.attributes['widget'],
            "insert": permission.attributes['insert_'],
            "update": permission.attributes['update_'],
            "delete": permission.attributes['delete_'],
            "platform": permission.attributes['plataforma']
          };
          return per;
        });

        callback(permissions);

    },(errorQuery)=>{
        console.log("Error performing query for ap_getDataMedidores", errorQuery);
        callback("NOPERMISSIONS")
    });
}

function saveGisredLogin(user,page,mod, tkn){

  const data = {
    f: 'json',
    adds: JSON.stringify([{ attributes: { "usuario": user, "pagina": page, "module": mod  }, geometry: {} }]),
    token: tkn
  };

  jQuery.ajax({
    method: 'POST',
    url: "http://gisred.chilquinta.cl:5555/arcgis/rest/services/Admin/LogAccesos/FeatureServer/1/applyedits",
    dataType:'html',
    data: data
  })
  .done(d =>{
    console.log(d,"pase");
  })
  .fail(f=>{
    console.log(f,"no pase")
  });
}

export { /*genericLogin,*/ muniLogin, /*factigisLogin,*/gisredLogin,saveGisredLogin };
