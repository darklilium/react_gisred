import React from 'react';
import ReactDOM from 'react-dom';
import {moduleList, insertMyData} from '../../../js/services/dashboard/moduleList';
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
    var list = insertMyData(moduleList(), myDashboardModules)
    /*
    var newList = [];
    var list = moduleList();

    myDashboardModules.forEach(permission => {
      list.forEach(array => {
        array.forEach(item => {

          if(item['module_name'] === permission['module']){

            newList.push({
              module_name: item['module_name'],
              alias: item['alias'],
              Permission: 'yes',
              Insert: permission['insert'],
              Update: permission['update'],
              Delete: permission['delete'],
              url:item['url'],
              color: item['color'],
              img: item['img']
            });
          }
        });
      });
    });
    */
    console.log(list)
    this.setState({moduleList: list});
  }
  onClickWidget(event){
    window.location.href = "factigis.html";
  }
  render(){

    var modules = this.state.moduleList.map((m, index)=>{

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
         return  <div className="gisredDashboard_moduleContainer" style={divstyle} key={index}>
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
