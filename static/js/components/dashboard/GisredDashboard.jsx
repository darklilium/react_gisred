import React from 'react';
import ReactDOM from 'react-dom';
import {moduleList} from '../../../js/services/dashboard/moduleList';
import cookieHandler from 'cookie-handler';

class GisredDashboard extends React.Component {

  constructor(props){
    super(props);
    this.onClickWidget = this.onClickWidget.bind(this);
    this.state = {
      moduleList: []
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

    var allModules = moduleList();

    var myModulesFound = allModules.filter((module)=>{
      return myDashboardModules.has(module);
    });
    console.log("My found",myModulesFound);





    this.setState({moduleList: myModulesFound});
  }
  onClickWidget(event){
    window.location.href = "factigis.html";
  }
  render(){

    var modules = this.state.moduleList.map((m, index)=>{
        let url = m[0].url;
        let urlName = m[0].alias;
        let imgSrc = m[0].img;
        let color = m[0].color;
        let divstyle = {
          'backgroundColor': color,
          'fontcolor': 'white'
        };
         return  <div className="gisredDashboard_moduleContainer" style={divstyle}key={index}>
                    <div className="gisredDashboard-divimg"><img className="gisredDashboard-img" src={imgSrc}></img></div>
                    <a className="gisredDashboard-aLink" key={index} href={url}>{urlName}</a><br/></div>;
       });
    return (
    <div className="wrapper_gisredDashboard">
        {modules}
    </div>
  );
  }
}

export default GisredDashboard;
