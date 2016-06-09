import React from 'react';
import ReactDOM from 'react-dom';
import Factigis_Add from '../factigis/Factigis_Add.jsx';
import mymap from '../../services/map-service';
import {addCertainLayer} from '../../services/layers-service';
import LayerList from '../../components/LayerList.jsx';

class Factigis extends React.Component {
  constructor(props){
    super(props);

  }
  componentWillMount(){

  }

  componentDidMount(){
    var map = mymap.createMap("factigis_map_div","topo",-71.2905 ,-33.1009,9);
    console.log(map);
    addCertainLayer('factigis_transmision',8,"");
    addCertainLayer('factigis_distribucion',9,"");
    addCertainLayer('factigis_vialidad',10,"");


  }

  render(){
    return (
      <div className="wrapper_factigis">
        <div className="wrapper_factibilidadLeft">
          <Factigis_Add />
        </div>
        <div className="wrapper_factibilidadRight">
        <LayerList show={["check_factigis_transmision", "check_factigis_distribucion", "check_factigis_vialidad"]} />
          <div className="factigis_map_div" id="factigis_map_div"></div>
        </div>

      </div>
    );
  }
}

export default Factigis;
