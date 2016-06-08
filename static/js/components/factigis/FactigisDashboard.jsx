import React from 'react';
import ReactDOM from 'react-dom';
import {FactigisModuleList, FactigisInsertMyData} from '../../../js/services/factigis_services/factigisModuleList';
import cookieHandler from 'cookie-handler';
import {saveGisredLogin} from '../../services/login-service';

class FactigisDashboard extends React.Component {

  constructor(props){
    super(props);
    this.onClickWidget = this.onClickWidget.bind(this);
    this.state = {
      factigisModuleList: []
    }

  }
  componentWillMount(){
    //if theres no cookie, the user cannot be in dashboard.
    if(!cookieHandler.get('usrprmssns')){
      window.location.href = "index.html";
      return;
    }
    //else , charge the modules that the user has permissions
    var myDashboardModules = cookieHandler.get('usrprmssns');
    var list = FactigisInsertMyData(FactigisModuleList(), myDashboardModules);
    this.setState({factigisModuleList: list});

    //and then save where the user is:
    var userPermissions = cookieHandler.get('usrprmssns');
    const page = "REACT_FACTIGIS";
    const module = "DASHBOARD";
    //saveGisredLogin(userPermissions[0].username,page,module,localStorage.getItem('token'));
    console.log(userPermissions[0].username,page,module,localStorage.getItem('token'));
  }
  onClickWidget(event){
    window.location.href = "factigis.html";
  }
  render(){

    var modules = this.state.factigisModuleList.map((m, index)=>{

        let url = m.url;
        let urlName = m.alias;
        let imgSrc = m.img;
        let color = m.color;
        let display;
        if (m.available=='yes'){
          display = 'flex';

        }else{
          display  = 'none';
        }
        let divstyle = {
          'backgroundColor': color,
          'fontcolor': 'white',
          'display': display
        };
         return  <div className="factigisDashboard_moduleContainer" style={divstyle} key={index}>
                    <div className="factigisDashboard-divimg"><img className="factigisDashboard-img" src={imgSrc}></img></div>
                    <a className="factigisDashboard-aLink" key={index} href={url}>{urlName}</a><br/></div>;
       });
    return (
    <div className="wrapper_factigisDashboard">
        {modules}
    </div>
  );
  }
}

export default FactigisDashboard;
