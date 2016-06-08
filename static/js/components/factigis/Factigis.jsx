import React from 'react';
import ReactDOM from 'react-dom';
import Factigis_Add from '../factigis/Factigis_Add.jsx';
import mymap from '../../services/map-service';

class Factigis extends React.Component {
  constructor(props){
    super(props);

  }
  componentWillMount(){

  }

  componentDidMount(){
    var map = mymap.createMap("factigis_map_div","topo",-71.2905 ,-33.1009,9);

  }

  render(){
    return (
      <div className="wrapper_factigis">
        <Factigis_Add />
        <div className="factigis_map_div" id="factigis_map_div"></div>
      </div>
    );
  }
}

export default Factigis;
