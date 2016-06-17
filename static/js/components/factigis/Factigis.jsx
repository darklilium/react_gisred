import React from 'react';
import ReactDOM from 'react-dom';
import Factigis_Add from '../factigis/Factigis_Add.jsx';
import mymap from '../../services/map-service';
import {addCertainLayer} from '../../services/layers-service';
import LayerList from '../../components/LayerList.jsx';
import layers from '../../services/layers-service';

class Factigis extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      themap: {}
    }
  }
  componentWillMount(){

  }

  componentDidMount(){
    var mapp = mymap.createMap("factigis_map_div","topo",-71.2905 ,-33.1009,9);
    this.setState({themap: mapp});

    addCertainLayer("gis_cartografia", 11, "",(gis_cartografia)=>{
      gis_cartografia.on("click",(event)=>{console.log(event.graphic.attributes)});
    });
    addCertainLayer("gis_rotulos", 12, "",(gis_rotulos)=>{
      gis_rotulos.on("click",(event)=>{console.log(event.graphic.attributes)});
    });

    addCertainLayer("mobile_direccionesNuevas", 12, "",(mobile_direccionesNuevas)=>{
      mobile_direccionesNuevas.on("click",(event)=>{console.log(event.graphic)});
    });

  }

  render(){
    return (
      <div className="wrapper_factigis">
        <div className="wrapper_factibilidadLeft">
          <Factigis_Add themap={this.state.themap}/>
        </div>
        <div className="wrapper_factibilidadRight">
        <LayerList show={["check_factigis_transmision", "check_factigis_distribucion", "check_factigis_vialidad", "check_campamentos", "check_chqbasemap"]} />
          <div className="factigis_map_div" id="factigis_map_div"></div>
        </div>

      </div>
    );
  }
}

export default Factigis;
