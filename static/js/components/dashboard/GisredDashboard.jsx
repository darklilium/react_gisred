import React from 'react';
import ReactDOM from 'react-dom';
import {moduleList} from '../../../js/services/dashboard/moduleList';

class GisredDashboard extends React.Component {

  constructor(props){
    super(props);
    this.onClickWidget = this.onClickWidget.bind(this);
    this.state = {
      moduleList: moduleList()
    }


  }

  onClickWidget(event){
    window.location.href = "factigis.html";
  }
  render(){
    var safeColors = ['00','33','66','99','cc','ff'];
    var rand = function() {
        return Math.floor(Math.random()*6);
    };
    var randomColor = function() {
        var r = safeColors[rand()];
        var g = safeColors[rand()];
        var b = safeColors[rand()];
        return "#"+r+g+b;
    };
    var modules = this.state.moduleList.map((m, index)=>{
        let url = m[0].url;
        let urlName = m[0].module_name;
        let imgSrc = m[0].img;
        let color = m[0].color;
        let divstyle = {
          'backgroundColor': color,
          'fontcolor': 'white'
        };
         return  <div className="gisredDashboard_moduleContainer" style={divstyle}key={index}>
                    <div className="gisredDashboard-divimg"><img className="gisredDashboard-img" src={imgSrc}></img></div><a className="gisredDashboard-aLink" key={index} href={url}>{urlName}</a><br/></div>;
       });
    return (
    <div className="wrapper_gisredDashboard">
        {modules}
    </div>
  );
  }
}

export default GisredDashboard;
