import React from 'react';
import ReactDOM from 'react-dom';
import ReactTabs from 'react-tabs';
import Select from 'react-select';
import {tipoCliente} from '../../services/factigis_services/cbData-service';
import {tipoContribuyente} from '../../services/factigis_services/cbData-service';
import {mymap} from '../../services/map-service';
import {factigis_validator} from '../../services/factigis_services/factigis_validator-service';

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

class Factigis_Add extends React.Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.onChangeTipoCliente = this.onChangeTipoCliente.bind(this);
    this.onChangeTipoContribuyente = this.onChangeTipoContribuyente.bind(this);
    this.onClickCliente = this.onClickCliente.bind(this);
    this.onClickPoste = this.onClickPoste.bind(this);
    this.onClickDireccion = this.onClickDireccion.bind(this);

    this.state = {
      //selected tab in the beginning
      selectedTab: 0,
      //data for comboboxes
      factigis_tipoCliente: [],
      factigis_tipoContribuyente: [] ,

      //selected values for comboboxes
      factigis_selectedValueCliente: '',
      factigis_selectedValueTipoContribuyente: '',

      //check states per validation zones
      zonaConcesion: false,
      zonaCampamentos: false,
      zonaRestringida: false,
      zonaVialidad: false,

      //save geometries selected
      factigis_geoCliente: '',
      factigis_geoPoste: '',
      factigis_geoDireccion: '',

      //save state for togglebuttons
      toggleCliente: 'OFF',
      togglePoste: 'OFF',
      toggleDireccion: 'OFF',

      //disable - enable button event-handlers
      btnCliente: '',
      btnPoste: '',
      btnDireccion: ''
    }
  }

  componentWillMount(){

    this.setState({
      factigis_tipoCliente: tipoCliente,
      factigis_tipoContribuyente:tipoContribuyente
    });
  }

  handleSelect(index, last){
    this.setState({
      selectedTab: index,

    });
  }

  onChangeTipoCliente(val){
    console.log(val);
    this.setState({factigis_selectedValueCliente: val});
  }

  onChangeTipoContribuyente(val){
    console.log(val);
    this.setState({factigis_selectedValueTipoContribuyente: val});
  }

  onClickCliente(e){
    var map = this.props.themap;

    if (this.state.toggleCliente =='OFF'){
      this.setState({toggleCliente: 'ON'});
      $('.factigis_btnSelectCliente').css('color',"crimson");

      var map_click_handle = dojo.connect(map, 'onClick', (g)=>{
      //  console.log("My click", g.mapPoint);
        this.setState({factigis_geoCliente: g.mapPoint});

        //validar factibilidad.
        var zones = factigis_validator(g.mapPoint, (callbackMain)=>{
          console.log(callbackMain);
          this.setState({
            zonaConcesion: callbackMain.zonaConcesion,
            zonaCampamentos: callbackMain.zonaCampamentos,
            zonaRestringida: callbackMain.zonaRestringida,
            zonaVialidad: callbackMain.zonaVialidad,
          });
        });


      });
      this.setState({btnCliente: map_click_handle});


    }else{
      this.setState({toggleCliente: 'OFF'});
      $('.factigis_btnSelectCliente').css('color',"black");
      dojo.disconnect(this.state.btnCliente);
      //console.log("this is my saved point for cliente", this.state.factigis_geoCliente);
    }
  }
  onClickPoste(e){
    var map = this.props.themap;
    if (this.state.togglePoste =='OFF'){
      this.setState({togglePoste: 'ON'});
        $('.factigis_btnSelectPoste').css('color',"crimson");

        var map_click_handle = dojo.connect(map, 'onClick', (g)=>{
      //    console.log("My click poste", g.mapPoint);
          this.setState({factigis_geoPoste: g.mapPoint});
        });
        this.setState({btnPoste: map_click_handle});
    }else{
      this.setState({togglePoste: 'OFF'});
        $('.factigis_btnSelectPoste').css('color',"black");
        dojo.disconnect(this.state.btnPoste);
        //console.log("this is my saved point for poste", this.state.factigis_geoPoste);
    }
  }

  onClickDireccion(e){
    var map = this.props.themap;

    if (this.state.toggleDireccion =='OFF'){
      this.setState({toggleDireccion: 'ON'});
        $('.factigis_btnSelectDireccion').css('color',"crimson");

        var map_click_handle = dojo.connect(map, 'onClick', (g)=>{
        //  console.log("My click direccion", g.mapPoint);
          this.setState({factigis_geoDireccion: g.mapPoint});
        });
        this.setState({btnDireccion: map_click_handle});

    }else{
      this.setState({toggleDireccion: 'OFF'});
      $('.factigis_btnSelectDireccion').css('color',"black");
      dojo.disconnect(this.state.btnDireccion);
    //  console.log("this is my saved point for direccion", this.state.factigis_geoDireccion);
    }
  }

  render(){

    return (
      <div className="wrapper_factigisAdd">
      <Tabs onSelect={this.handleSelect} selectedIndex={this.state.selectedTab}>
        <TabList>
          <Tab><i className="fa fa-plus"></i></Tab>
          <Tab><i className="fa fa-search" aria-hidden="true"></i></Tab>
        </TabList>

        <TabPanel>
        <h7><b>Datos de Cliente</b></h7>
        <hr className="factigis_hr-subtitle factigis_hr"/>
        <div className="factigis_BigGroupbox">
          <h8>Rut:</h8>
          <div className="factigis_groupbox">
            <input id="factigis_txtRut" className="factigis-input" ref="rutValue" title="Ingrese Rut e indique ubicación del cliente" type="text" placeholder="Ingrese Rut e indique ubicación del cliente"  />
            <button onClick={this.onClickCliente} className="factigis-selectFromMapButton factigis_btnSelectCliente btn btn-default" title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
            </button>
            <h8 className="factigis__toggleBtnLabel">{this.state.toggleCliente}</h8>
          </div>
          <h8>Tipo Cliente:</h8>
          <div className="factigis_groupbox">
            <Select className="factigis_selectInput" name="form-field-name" options={this.state.factigis_tipoCliente} onChange={this.onChangeTipoCliente}
                    value={this.state.factigis_selectedValueCliente} simpleValue clearable={true} searchable={false} placeholder="Seleccione el tipo de cliente"/>
            <button className="factigis-selectFromMapButton btn btn-default" style={{visibility:'hidden'}} title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
            </button>
          </div>

          <h8>Nombre Cliente:</h8>
          <div className="factigis_groupbox">
            <input id="factigis_txtTipoCliente" className="factigis-input" ref="rutValue" title="Escriba el nombre del cliente" type="text" placeholder=""  />
            <button className="factigis-selectFromMapButton btn btn-default" style={{visibility:'hidden'}} title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
              </button>
          </div>
          <h8>Apellido:</h8>
          <div className="factigis_groupbox">
            <input id="factigis_txtTipoCliente" className="factigis-input" ref="rutValue" title="Escriba el primer apellido del cliente" type="text" placeholder="Apellido Paterno"  />
            <button className="factigis-selectFromMapButton btn btn-default" style={{visibility:'hidden'}} title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
              </button>
          </div>
          <h8>Telefono:</h8>
          <div className="factigis_groupbox">
            <input id="factigis_txtTipoCliente" className="factigis-input" ref="rutValue" title="Ingrese teléfono del cliente" type="text" placeholder="Celular o Fijo"  />
            <button className="factigis-selectFromMapButton btn btn-default" style={{visibility:'hidden'}} title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
              </button>
          </div>
          <h8>Email:</h8>
          <div className="factigis_groupbox">
            <input id="factigis_txtTipoCliente" className="factigis-input" ref="rutValue" title="Escriba el email de contacto" type="text" placeholder="ejemplo@email.com"  />
            <button className="factigis-selectFromMapButton btn btn-default" style={{visibility:'hidden'}} title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
              </button>
          </div>
          <h8>Tipo Contribuyente:</h8>
          <div className="factigis_groupbox">
            <Select className="factigis_selectInput" name="form-field-name" options={this.state.factigis_tipoContribuyente} onChange={this.onChangeTipoContribuyente}
                  value={this.state.factigis_selectedValueTipoContribuyente} simpleValue clearable={true} searchable={false} placeholder="Seleccione el tipo de contribuyente"/>
            <button className="factigis-selectFromMapButton btn btn-default" style={{visibility:'hidden'}} title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
            </button>
          </div>
        </div>
          <h7><b>Datos de Red</b></h7>
          <hr className="factigis_hr-subtitle factigis_hr"/>
        <div className="factigis_BigGroupbox">
          <h8>Rótulo Conexión:</h8>
          <div className="factigis_groupbox">
            <input id="ap_txtObsLuminaria" className="factigis-input" ref="rotuloValue" title="Poste o Cámara" type="text" placeholder="Poste o cámara encontrado" />
            <button onClick={this.onClickPoste} className="factigis-selectFromMapButton factigis_btnSelectPoste btn btn-default" title="Ir " type="button" >
              <span><i className="fa fa-map-signs"></i></span>
            </button>
            <h8 className="factigis__toggleBtnLabel">{this.state.togglePoste}</h8>
          </div>
          <h8>Tramo de Conexión:</h8>
          <div className="factigis_groupbox">
            <input id="ap_txtObsLuminaria" className="factigis-input" ref="rotuloValue" title="Poste o Cámara" type="text" placeholder="Poste o cámara encontrado" />
            <button className="factigis-selectFromMapButton btn btn-default"  style={{visibility:'hidden'}} title="Ir " type="button" >
              <span><i className="fa fa-map-signs"></i></span>
            </button>
          </div>
          <h8>Tipo de Empalme:</h8>
          <div className="factigis_groupbox">
            <input id="ap_txtObsLuminaria" className="factigis-input" ref="rotuloValue" title="Poste o Cámara" type="text" placeholder="Poste o cámara encontrado" />
            <button className="factigis-selectFromMapButton btn btn-default" style={{visibility:'hidden'}} title="Ir " type="button" >
              <span><i className="fa fa-map-signs"></i></span>
            </button>
          </div>
          <h8>Dirección:</h8>
          <div className="factigis_groupbox">
            <input id="ap_txtObsLuminaria" className="factigis-input" ref="dirValue" title="Dirección" type="text" placeholder="Dirección encontrada" />
            <button onClick={this.onClickDireccion} className="factigis-selectFromMapButton factigis_btnSelectDireccion btn btn-default" title="Ir " type="button" >
              <span><i className="fa fa-home"></i></span>
            </button>
            <h8 className="factigis__toggleBtnLabel">{this.state.toggleDireccion}</h8>
          </div>
        </div>
          <hr className="factigis_hr"/>
          <h9><b>Información de Factibilidad:</b></h9>
          <div className="factigis_listbox">
            <ul className="factigis_ul">

                <li>
                  <input type="checkbox" name="manager" id="manager" disabled="true" checked={this.state.zonaConcesion} />
                  <label htmlFor="manager">Zona Concesión</label>
                </li>
                <li>
                  <input type="checkbox" name="webdesigner" id="webdesigner" disabled="true" checked={this.state.zonaRestringida} />
                  <label htmlFor="webdesigner">Zona Restringida</label>
                </li>


                <li>
                  <input type="checkbox" name="webdev" id="webdev"  disabled="true" checked={this.state.zonaVialidad}/>
                  <label htmlFor="webdev">Zona Vialidad</label>
                </li>
                <li>
                  <input type="checkbox" name="csr" id="csr" disabled="true" checked={this.state.zonaCampamentos} />
                  <label htmlFor="csr">Zona Campamentos</label>
                </li>

            </ul>
          </div>
          <hr className="factigis_hr"/>
            <button className="factigis_submitButton btn btn-success" title="Ir " type="button" >
                <span><i className="fa fa-plus"></i> Agregar</span>
            </button>
          </TabPanel>

        <TabPanel>
        </TabPanel>
        </Tabs>



      </div>
    );
  }
}

export default Factigis_Add;
