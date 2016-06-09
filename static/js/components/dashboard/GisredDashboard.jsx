import React from 'react';
import ReactDOM from 'react-dom';
import {moduleList, insertMyData,excludeData} from '../../../js/services/dashboard/moduleList';
import cookieHandler from 'cookie-handler';

class GisredDashboard extends React.Component {

  constructor(props){
    super(props);
    this.onClickWidget = this.onClickWidget.bind(this);
    this.state = {
      moduleList: [],
      allModules: [],
      notAvailableModules: []
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
    var list = insertMyData(moduleList(), myDashboardModules);

    this.setState({moduleList: list});
    this.setState({allModules: moduleList()});

    var myLi = list;
    var mAll = moduleList();
    var myPropList = ['application', 'alias','Available','Permission','Insert','Update','Delete','url','color','img'];
    var result = excludeData(mAll,myLi,myPropList);

    this.setState({notAvailableModules: result});
  }
  onClickWidget(event){
    window.location.href = "factigis.html";
  }
  render(){
    var myModules = this.state.moduleList.map((m, index)=>{
        let url =  m.url;
        let urlName = m.alias;
        let imgSrc = m.img;
        let color = m.color;
        let display;

        if (m.Available=='yes'){
          display='flex'
        }else{
          display='none'
        }
        let divstyle = {
          'backgroundColor': color,
          'fontcolor': 'white',
          'display': display
        };
         return  <div className="gisredDashboard_moduleContainer" style={divstyle} key={index}>
                    <div className="gisredDashboard-divimg"><img className="gisredDashboard-img" src={imgSrc}></img></div>
                    <a className="gisredDashboard-aLink" key={index} href={url}>{urlName}</a><br/></div>;
    });

    var excludeModules = this.state.notAvailableModules.map((exm,index)=>{
      let url =  exm.url;
      let urlName = exm.alias;
      let imgSrc = exm.img;
      let color = 'gray';
      let divstyle = {
        'backgroundColor': color,
        'fontcolor': 'white'
      };
       return  <div className="gisredDashboard_moduleContainer" style={divstyle} key={index}>
                  <div className="gisredDashboard-divimg"><img className="gisredDashboard-img" src={imgSrc}></img></div>
                  <h7 className="gisredDashboard-aLink" key={index} href={url}>{urlName}</h7><br/></div>;

    });
    return (
    <div className="wrapper_gisredDashboard" id="wrapper_gisredDashboard">
        {myModules}
        {excludeModules}
    </div>
  );
  }
}

export default GisredDashboard;
