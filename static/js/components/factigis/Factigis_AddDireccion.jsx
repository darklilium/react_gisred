import React from 'react';
import ReactDOM from 'react-dom';
import ReactTabs from 'react-tabs';
import Select from 'react-select';
import {tipoCliente, tipoContribuyente, tipoEmpalme, tipoMonoTri, tipoEmpalmeBTMT, tipoPotencia} from '../../services/factigis_services/cbData-service';
import {mymap} from '../../services/map-service';
import {factigis_validator} from '../../services/factigis_services/factigis_validator-service';
import makeSymbol from '../../utils/makeSymbol';
import layers from '../../services/layers-service';
import {layersActivated, setLayers} from '../../services/layers-service';
import {factigis_findCalle} from '../../services/factigis_services/factigis_find-service';
import Rut from 'rutjs';
import {factigis_addNuevaDireccion} from '../../services/factigis_services/factigis_add-service';


class Factigis_AddDireccion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //passed as parameter from the parent component (factigisAdd), and saves the current map
      themap: this.props.themap,

      //toggle button
      toggleCalle: 'OFF',
      factigis_geoCalle: '',

      //save buton handler
      btnCalle: '',

      //save states from controls when user switch tabs
      factigisCalle: '',
      factigisNumeroCalle: '',
      factigisAnexo1: '',
      factigisAnexo: '',
      factigisTipoEdificacion: '',
      factigis_objectidCalle: ''
    }
    this.onClickCalle = this.onClickCalle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickAgregarNuevaDireccion = this.onClickAgregarNuevaDireccion.bind(this);
  }
  componentWillMount(){

  }

  componentDidMount(){

  }

  onClickCalle(){

    var map = this.props.themap;
    //clean graphics on layer

    if (this.state.toggleCalle =='OFF'){
      this.setState({toggleCalle: 'ON'});
      $('.factigis_btnSelectCliente').css('color',"crimson");

      var map_click_handle = dojo.connect(map, 'onClick', (g)=>{

        //saves geometry point for customer.
        this.setState({factigis_geoCalle: g.mapPoint});
        factigis_findCalle(g.mapPoint, (featureSetFeatures)=>{

          if(!featureSetFeatures.length){
            console.log("No se ha podido encontrar la calle, seleccione de nuevo");
            return;
          }
          console.log("encontradas",featureSetFeatures);
          this.setState({
            factigisCalle: featureSetFeatures[0].attributes['nombre'],
            factigis_objectidCalle: featureSetFeatures[0].attributes['OBJECTID']
          });
        });


        //draw customer location on the map.
        map.graphics.clear();
        let pointSymbol = makeSymbol.makePointCustomer();
        console.log(g);
        map.graphics.add(new esri.Graphic(g.mapPoint,pointSymbol));

      });
      this.setState({btnCalle: map_click_handle});


    }else{
      this.setState({toggleCalle: 'OFF'});
      $('.factigis_btnSelectCliente').css('color',"black");
      dojo.disconnect(this.state.btnCalle);
      console.log("this is my saved point for cliente", this.state.factigis_geoCalle);
    }
  }

  onChange(event){
    switch (event.currentTarget.id) {
      case 'factigis_txtCalle':
          this.setState({factigisCalle: event.currentTarget.value});
          console.log('calle', event.currentTarget.value);
        break;
      default:

    }
  }

  onClickAgregarNuevaDireccion(){
    console.log("validating");


    console.log("adding");
  }

  render(){
    return (
      <div className="factigis_addDireccion-wrapper">
        <h7><b>Datos de Dirección</b></h7>
        <hr className="factigis_hr-subtitle factigis_hr"/>
        <div className="factigis_BigGroupbox">

        <h8>Calle:</h8>
        <div className="factigis_groupbox">
          <input id="factigis_txtCalle" className="factigis-input" onChange={this.onChange} value={this.state.factigisCalle} title="Indique el nombre de la calle" type="text" placeholder="Seleccione el nombre de la calle"  />
          <button onClick={this.onClickCalle} className="factigis-selectFromMapButton factigis_btnSelectCliente btn btn-default" title="Ir " type="button" >
            <span><i className="fa fa-map-marker"></i></span>
          </button>
          <h8 className="factigis__toggleBtnLabel">{this.state.toggleCalle}</h8>
        </div>

        <div className="factigis_groupbox">
          <div className="factigis_group factigis_addressGroup">
            <h8>Número:</h8>
            <input id="factigis_txtNombre" onChange={this.onChange}   className="factigis-input factigis_input-solo" title="Escriba el número de la calle" type="text" placeholder="Número de la calle"  />

            <h8>Anexo 1:</h8>
            <input id="factigis_txtNombre" onChange={this.onChange} className="factigis-input factigis_input-solo" title="Escriba alguna descripción del lugar" type="text" placeholder="Escriba alguna descripción del lugar"  />
          </div>
        </div>

        <div className="factigis_groupbox">
          <div className="factigis_group factigis_addressGroup">
            <h8>Anexo 2:</h8>
            <input id="factigis_txtNombre" onChange={this.onChange}   className="factigis-input factigis_input-solo" title="Escriba alguna descripción del lugar" type="text" placeholder="Escriba alguna descripción del lugar"  />
          </div>

        </div>
        <div className="factigis_groupbox">
          <div className="factigis_group factigis_addressGroup">
            <h8>Tipo Edificación:</h8>
            <Select className="factigis_selectInput" name="form-field-name"  onChange={this.onChangeTipoCliente}
              value={this.state.factigis_selectedValueCliente} simpleValue clearable={true} searchable={false} placeholder="Seleccione el tipo de cliente"/>
          </div>
        </div>
        <hr className="factigis_hr"/>
          <button className="factigis_submitButton btn btn-success" title="Ir " type="button" onClick={this.onClickAgregarNuevaDireccion} >
              <span><i className="fa fa-plus"></i> Agregar Dirección</span>
        </button>
        </div>
      </div>
    );
  }
}

export default Factigis_AddDireccion;
