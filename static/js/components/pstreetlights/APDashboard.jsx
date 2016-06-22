import React from 'react';
import ReactDOM from 'react-dom';
import {APModuleList, excludeDataAP,APInsertMyData} from '../../../js/services/ap_services/apModuleList';
import cookieHandler from 'cookie-handler';
import {saveGisredLogin} from '../../services/login-service';

class APDashboard extends React.Component {

  constructor(props){
    super(props);
    this.onClickWidget = this.onClickWidget.bind(this);
    this.state = {
      APModuleList: [],
      APNotAvList: []
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
    var list = APInsertMyData(APModuleList(), myDashboardModules);
    this.setState({APModuleList: list});

    //and then save where the user is:
    var userPermissions = cookieHandler.get('usrprmssns');
    const page = "REACT_AP";
    const module = "DASHBOARD";
    //saveGisredLogin(userPermissions[0].username,page,module,localStorage.getItem('token'));
    console.log(userPermissions[0].username,page,module,localStorage.getItem('token'));

    //and load the other not available modules

    var myLi = list;
    var mAll = APModuleList();
    var myPropList = ['module', 'alias','Available','Permission','Insert','Update','Delete','url','color','img'];
    var result = excludeDataAP(mAll,myLi,myPropList);

    this.setState({APNotAvList: result});

  }
  onClickWidget(event){
    window.location.href = "apchq.html";
  }
  render(){
    var excludeModules = this.state.APNotAvList.map((m, index)=>{
        console.log(m);
        let url = m.url;
        let urlName = m.alias;
        let imgSrc = m.img;
        let color = m.color;

        let divstyle = {
          'backgroundColor': 'gray',
          'fontcolor': 'white'
        };
         return  <div className="APDashboard_moduleContainer" style={divstyle} key={index}>
                    <div className="APDashboard-divimg"><img className="APDashboard-img" src={imgSrc}></img></div>
                    <h7 className="APDashboard-aLink" key={index} href={url}>{urlName}</h7><br/></div>;
    });
    var modules = this.state.APModuleList.map((m, index)=>{

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
         return  <div className="APDashboard_moduleContainer" style={divstyle} key={index}>
                    <div className="APDashboard-divimg"><img className="APDashboard-img" src={imgSrc}></img></div>
                    <a className="APDashboard-aLink" key={index} href={url}>{urlName}</a><br/></div>;
    });

    return (
    <div className="wrapper_APDashboard">
        {modules}
        {excludeModules}
    </div>
  );
  }
}

export default APDashboard;
