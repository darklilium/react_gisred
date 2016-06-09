import React from 'react';
import ReactDOM from 'react-dom';
import {FactigisModuleList, excludeDataFactigis,FactigisInsertMyData} from '../../../js/services/factigis_services/factigisModuleList';
import cookieHandler from 'cookie-handler';
import {saveGisredLogin} from '../../services/login-service';

class FactigisDashboard extends React.Component {

  constructor(props){
    super(props);
    this.onClickWidget = this.onClickWidget.bind(this);
    this.state = {
      factigisModuleList: [],
      factigisNotAvList: []
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

    //and load the other not available modules

    var myLi = list;
    var mAll = FactigisModuleList();
    var myPropList = ['module', 'alias','Available','Permission','Insert','Update','Delete','url','color','img'];
    var result = excludeDataFactigis(mAll,myLi,myPropList);

    this.setState({factigisNotAvList: result});

  }
  onClickWidget(event){
    window.location.href = "factigis.html";
  }
  render(){
    var excludeModules = this.state.factigisNotAvList.map((m, index)=>{
        console.log(m);
        let url = m.url;
        let urlName = m.alias;
        let imgSrc = m.img;
        let color = m.color;

        let divstyle = {
          'backgroundColor': 'gray',
          'fontcolor': 'white'
        };
         return  <div className="factigisDashboard_moduleContainer" style={divstyle} key={index}>
                    <div className="factigisDashboard-divimg"><img className="factigisDashboard-img" src={imgSrc}></img></div>
                    <h7 className="factigisDashboard-aLink" key={index} href={url}>{urlName}</h7><br/></div>;
    });
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
        {excludeModules}
    </div>
  );
  }
}

export default FactigisDashboard;
