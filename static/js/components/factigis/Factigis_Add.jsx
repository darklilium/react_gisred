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
import {factigis_findDireccion, factigis_findRotulo} from '../../services/factigis_services/factigis_find-service';
import Rut from 'rutjs';


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
    this.onChangeTipoEmpalme = this.onChangeTipoEmpalme.bind(this);
    this.onChangeTipoFase = this.onChangeTipoFase.bind(this);
    this.onChangeTipoPotencia = this.onChangeTipoPotencia.bind(this);
    this.onChangeTipoEmpalmeBTMT = this.onChangeTipoEmpalmeBTMT.bind(this);
    this.onChangeRadioEmpalmes = this.onChangeRadioEmpalmes.bind(this);
    this.onClickCliente = this.onClickCliente.bind(this);
    this.onClickPoste = this.onClickPoste.bind(this);
    this.onClickDireccion = this.onClickDireccion.bind(this);
    this.onChangeCantidadEmpalmes = this.onChangeCantidadEmpalmes.bind(this);
    this.onClickAgregarCliente = this.onClickAgregarCliente.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      //selected tab in the beginning
      selectedTab: 0,
      //data for comboboxes
      factigis_tipoCliente: [],
      factigis_tipoContribuyente: [] ,
      factigis_tipoEmpalme: [],
      factigis_tipoFase: [],
      factigis_tipoEmpalmeBTMT: [],
      factigis_tipoPotencia: [],
      factigis_cantidadEmpalmes: 0,

      //selected values for comboboxes
      factigis_selectedValueCliente: '',
      factigis_selectedValueTipoContribuyente: '',
      factigis_selectedValueTipoEmpalme: '',
      factigis_selectedValueTipoEmpalmePotencia: '',
      factigis_selectedValueTipoEmpalmeBTMT: '',

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
      btnDireccion: '',

      // state values for textboxes
      factigisDireccion: '',  //per full name
      factigisIDDireccion: '', //per id dir
      factigisTipoEmpalme:'',
      factigisConexion: '',
      factigisRotulo: '',
      factigisEmail: '',
      factigisTelefono: '',
      factigisApellido: '',
      factigisNombre: '',
      factigisRut: '',
      factigisCantidadEmpalmes: '',

      //Radios empalmes
      radioEmpalmeDefinitivo: true,
      radioEmpalmeProvisorio: false
    }
  }

  componentWillMount(){

    this.setState({
      factigis_tipoCliente: tipoCliente,
      factigis_tipoContribuyente:tipoContribuyente,
      factigis_tipoEmpalme: tipoEmpalme,
      factigis_tipoFase: tipoMonoTri,
      factigis_tipoPotencia: tipoPotencia,
      factigis_tipoEmpalmeBTMT: tipoEmpalmeBTMT,
      radioEmpalmeDefinitivo: true,
      radioEmpalmeProvisorio: false
    });
  }

  handleSelect(index, last){
    this.setState({
      selectedTab: index,
    });
    if(index==0){
        console.log("en tab cliente", index+1);

    }if(index==1){
        console.log("en tab busquedas", index+1);

    }if(index==3){
      console.log("en tab agregar direccion", index+1);
    }

  }

  onChange(e){

    switch (e.currentTarget.id) {
      case 'factigis_txtRut':
        this.setState({factigisRut: e.currentTarget.value});
      break;
      case 'factigis_txtNombre':
        this.setState({factigisNombre: e.currentTarget.value});
      break;
      case 'factigis_txtApellido':
        this.setState({factigisApellido: e.currentTarget.value});
      break;
      case 'factigis_txtTelefono':
        this.setState({factigisTelefono: e.currentTarget.value});
      break;
      case 'factigis_txtEmail':
        this.setState({factigisEmail: e.currentTarget.value});
      break;
      case 'factigis_txtCantEmpalmes':
        this.setState({factigisCantidadEmpalmes: e.currentTarget.value});
      break;
      default:

    }

  }

  //for validations
  onBlur(e){
    switch (e.currentTarget.id) {
      case 'factigis_txtRut':
        var rut = new Rut(this.state.factigisRut);

        if (rut.isValid){
          console.log("rut valido");
          //here put the color green to the field for validation ok
        }else{
          console.log("rut invalido");
          //here put the color red to the field for wrong validation.
        }

      break;
      case 'factigis_txtNombre':

      break;
      case 'factigis_txtApellido':

      break;
      case 'factigis_txtTelefono':

      break;
      case 'factigis_txtEmail':

      break;
      default:

    }



  }

  onChangeTipoCliente(val){
    console.log(val);
    this.setState({factigis_selectedValueCliente: val});
  }

  onChangeTipoContribuyente(val){
    console.log(val);
    this.setState({factigis_selectedValueTipoContribuyente: val});
  }

  onChangeTipoEmpalme(val){
    console.log(val);
    this.setState({factigis_selectedValueTipoEmpalme: val});
  }

  onChangeTipoFase(val){
    console.log(val);
    this.setState({factigis_selectedValueTipoFase: val});
    let tEmpalme = this.state.factigis_selectedValueTipoEmpalme;
    let tFase = val;
    console.log("my values",tEmpalme,tFase);

  }
  onChangeTipoPotencia(val){
    console.log(val);
    this.setState({factigis_selectedValueTipoPotencia: val});
  }

  onChangeTipoEmpalmeBTMT(val){
    console.log(val);
    this.setState({factigis_selectedValueTipoEmpalmeBTMT: val});
  }

  onChangeRadioEmpalmes(e){
    console.log(e);
    switch (e.currentTarget.id) {
      case 'factigis_checkEmpalmeDefinitivo':
      this.setState({radioEmpalmeDefinitivo: true, radioEmpalmeProvisorio:false});
          console.log("checked definitivo");
      break;
      case 'factigis_checkEmpalmeProvisorio':
      this.setState({radioEmpalmeProvisorio: true, radioEmpalmeDefinitivo:false});
          console.log("checked provisorio");
      break;
      default:

    }
  }

  onChangeCantidadEmpalmes(val){
    this.setState({factigis_cantidadEmpalmes: val});
  }
  //Functions for each button that get the map coordinates and validate the Factibility info.
  onClickCliente(e){
    var map = this.props.themap;
    //clean graphics on layer

    if (this.state.toggleCliente =='OFF'){
      this.setState({toggleCliente: 'ON'});
      $('.factigis_btnSelectCliente').css('color',"crimson");

      var map_click_handle = dojo.connect(map, 'onClick', (g)=>{
        //saves geometry point for customer.
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

        //draw customer location on the map.
        map.graphics.clear();
        let pointSymbol = makeSymbol.makePointCustomer();
        console.log(g);
        map.graphics.add(new esri.Graphic(g.mapPoint,pointSymbol));

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
          factigis_findRotulo(g.mapPoint, (featureSetFeatures)=>{

            let rotulo = featureSetFeatures[0].attributes['rotulo'];
            this.setState({
              factigis_geoPoste: featureSetFeatures[0].geometry,
              factigisRotulo: rotulo
            });
          });
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
          factigis_findDireccion(g.mapPoint, (featureSetFeatures)=>{

            let direccion = featureSetFeatures[0].attributes['nombre_calle'] + " " + featureSetFeatures[0].attributes['numero'];
            this.setState({
              factigis_geoDireccion: featureSetFeatures[0].geometry,
              factigisDireccion: direccion,
              factigisIDDireccion: featureSetFeatures[0].attributes['id_direccion']
            });
          });
        //save the handler for removing it later (in the off)
        this.setState({btnDireccion: map_click_handle});

        });

    }else{
      this.setState({toggleDireccion: 'OFF'});
        $('.factigis_btnSelectDireccion').css('color',"black");
        dojo.disconnect(this.state.btnDireccion);
        //console.log("this is my saved point for poste", this.state.factigis_geoPoste);
    }
  }

  //Function that adds a new customer but has to validate the other fields yet.
  onClickAgregarCliente(){
  }


  render(){

    return (
      <div className="wrapper_factigisAdd">
      <Tabs onSelect={this.handleSelect} selectedIndex={this.state.selectedTab}>
        <TabList>
          <Tab><i className="fa fa-plus"></i></Tab>
          <Tab><i className="fa fa-search" aria-hidden="true"></i></Tab>
          <Tab><i className="fa fa-plus"></i> <i className="fa fa-home" aria-hidden="true"></i></Tab>
        </TabList>
        {/* Tab cliente */}
        <TabPanel>
          <h7><b>Datos de Cliente</b></h7>
          <hr className="factigis_hr-subtitle factigis_hr"/>
          <div className="factigis_BigGroupbox">

            <h8>Rut:</h8>
            <div className="factigis_groupbox">
              <input id="factigis_txtRut" className="factigis-input" onChange={this.onChange} onBlur={this.onBlur} value={this.state.factigisRut} title="Ingrese Rut e indique ubicación del cliente" type="text" placeholder="Ingrese Rut e indique ubicación del cliente"  />
              <button onClick={this.onClickCliente} className="factigis-selectFromMapButton factigis_btnSelectCliente btn btn-default" title="Ir " type="button" >
                <span><i className="fa fa-map-marker"></i></span>
              </button>
              <h8 className="factigis__toggleBtnLabel">{this.state.toggleCliente}</h8>
            </div>

            <div className="factigis_groupbox">
              <div className="factigis_group">
                <h8>Nombre Cliente:</h8>
                <input id="factigis_txtNombre" onChange={this.onChange}  value={this.state.factigisNombre}  className="factigis-input factigis_input-solo" title="Escriba el nombre del cliente" type="text" placeholder="Nombre Completo"  />
              </div>

              <div className="factigis_group">
                <h8>Apellido:</h8>
                <input id="factigis_txtApellido" className="factigis-input factigis_input-solo" onChange={this.onChange}  value={this.state.factigisApellido} title="Escriba el primer apellido del cliente" type="text" placeholder="Apellido Paterno"  />
              </div>
            </div>

            <div className="factigis_groupbox">
              <div className="factigis_group">
                <h8>Telefono:</h8>
                <input id="factigis_txtTelefono" className="factigis-input factigis_input-solo" onChange={this.onChange}  value={this.state.factigisTelefono} title="Ingrese teléfono del cliente" type="text" placeholder="Celular o Fijo"  />
              </div>

              <div className="factigis_group">
                <h8>Email:</h8>
                <input id="factigis_txtEmail" className="factigis-input factigis_input-solo" onChange={this.onChange}  value={this.state.factigisEmail} title="Escriba el email de contacto" type="text" placeholder="ejemplo@email.com"  />
              </div>
            </div>
            <div className="factigis_groupbox">
              <div className="factigis_group">
                <h8>Tipo Cliente:</h8>
                <Select className="factigis_selectInput" name="form-field-name" options={this.state.factigis_tipoCliente} onChange={this.onChangeTipoCliente}
                  value={this.state.factigis_selectedValueCliente} simpleValue clearable={true} searchable={false} placeholder="Seleccione el tipo de cliente"/>
              </div>
              <div className="factigis_group">
                <h8>Tipo Contribuyente:</h8>
                <Select className="factigis_selectInput" name="form-field-name" options={this.state.factigis_tipoContribuyente} onChange={this.onChangeTipoContribuyente}
                  value={this.state.factigis_selectedValueTipoContribuyente} simpleValue clearable={true} searchable={false} placeholder="Seleccione el tipo de contribuyente"/>
              </div>
            </div>
          </div>
          <h7><b>Datos de Red</b></h7>
          <hr className="factigis_hr-subtitle factigis_hr"/>
          <div className="factigis_BigGroupbox">
            <h8>Rótulo Conexión:</h8>
            <div className="factigis_groupbox">
              <input id="ap_txtObsLuminaria" className="factigis-input"  value={this.state.factigisRotulo} ref="rotuloValue" title="Poste o Cámara" disabled={true} type="text" placeholder="Poste o cámara encontrado" />
              <button onClick={this.onClickPoste} className="factigis-selectFromMapButton factigis_btnSelectPoste btn btn-default" title="Ir " type="button" >
                <span><i className="fa fa-map-signs"></i></span>
              </button>
              <h8 className="factigis__toggleBtnLabel">{this.state.togglePoste}</h8>
            </div>
              <h8>Tramo de Conexión:</h8>
              <div className="factigis_groupbox">
                <input id="factigis_txtTramo" className="factigis-input factigis_input-solo" title="Poste o Cámara" type="text" placeholder="Poste o cámara encontrado" />
              </div>

            <div className="factigis_groupbox">
              <div className="factigis_group">
                <h8>Empalme:</h8>
                <Select className="factigis_selectEmpalme factigis_selectInput " name="form-field-name" options={this.state.factigis_tipoEmpalme} onChange={this.onChangeTipoEmpalme}
                  value={this.state.factigis_selectedValueTipoEmpalme} simpleValue clearable={true} searchable={false} placeholder="Seleccione tipo empalme"/>
              </div>
              <div className="factigis_group">
                <h8>Fase:</h8>
                <Select className="factigis_selectEmpalme factigis_selectInput " name="form-field-name" options={this.state.factigis_tipoFase} onChange={this.onChangeTipoFase}
                  value={this.state.factigis_selectedValueTipoFase} simpleValue clearable={true} searchable={false} placeholder="Seleccione tipo fase"/>
              </div>
              <div className="factigis_group">
                <h8>Potencia:</h8>
                <Select className="factigis_selectEmpalme factigis_selectInput " name="form-field-name" options={this.state.factigis_tipoPotencia} onChange={this.onChangeTipoPotencia}
                  value={this.state.factigis_selectedValueTipoPotencia} simpleValue clearable={true} searchable={false} placeholder="Seleccione potencia"/>
              </div>
            </div>
            <div className="factigis_groupbox">
              <div className="factigis_group factigis_radiobuttonGroup">
                <input type="radio" id="factigis_checkEmpalmeDefinitivo" className="factigis_radiobutton" name="permanenciaEmpalme" value="DEFINITIVO" defaultChecked={this.state.radioEmpalmeDefinitivo} onChange={this.onChangeRadioEmpalmes} />Definitivo<br />
                <input type="radio" id="factigis_checkEmpalmeProvisorio" className="factigis_radiobutton" name="permanenciaEmpalme" value="PROVISORIO" defaultChecked={this.state.radioEmpalmeProvisorio} onChange={this.onChangeRadioEmpalmes}/>Provisorio<br />
              </div>
              <div className="factigis_group">
              <h8>Tipo</h8>
                <Select className="factigis_selectEmpalme factigis_selectInput " name="form-field-name" options={this.state.factigis_tipoEmpalmeBTMT} onChange={this.onChangeTipoEmpalmeBTMT}
                  value={this.state.factigis_selectedValueTipoEmpalmeBTMT} simpleValue clearable={true} searchable={false} placeholder="Seleccione BT/MT"/>
              </div>
              <div className="factigis_group">
                <h8>Cantidad</h8>
              <input id="factigis_txtCantEmpalmes" value={this.state.factigisCantidadEmpalmes} className="factigis-input factigis_input-solo" title="Poste o Cámara" type="text" placeholder="Cantidad Empalmes" onChange={this.onChange} />
              </div>
            </div>

            <h8>Dirección:</h8>
            <div className="factigis_groupbox">
              <input id="factigis_txtDireccion" className="factigis-input" title="Dirección" disabled={true} type="text" placeholder="Dirección encontrada" value={this.state.factigisDireccion} />
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
                    <label htmlFor="manager" id="lblConcesion">Zona Concesión</label>
                  </li>
                  <li>
                    <input type="checkbox" name="webdesigner" id="webdesigner" disabled="true" checked={this.state.zonaRestringida} />
                    <label htmlFor="webdesigner" id="lblRestringida">Zona Restringida</label>
                  </li>


                  <li>
                    <input type="checkbox" name="webdev" id="webdev"  disabled="true" checked={this.state.zonaVialidad}/>
                    <label htmlFor="webdev" id="lblVialidad">Zona Vialidad</label>
                  </li>
                  <li>
                    <input type="checkbox" name="csr" id="csr" disabled="true" checked={this.state.zonaCampamentos} />
                    <label htmlFor="csr" id="lblCampamentos">Zona Campamentos</label>
                  </li>

              </ul>
            </div>
            <hr className="factigis_hr"/>
              <button className="factigis_submitButton btn btn-success" title="Ir " type="button" onClick={this.onClickAgregarCliente} >
                  <span><i className="fa fa-plus"></i> Agregar</span>
              </button>
          </TabPanel>

        {/* Tab busquedas */}
        <TabPanel>
        </TabPanel>

        {/* Tab direcciones */}
        <TabPanel>
        <h7><b>Datos de Dirección</b></h7>
        <hr className="factigis_hr-subtitle factigis_hr"/>
        <div className="factigis_BigGroupbox">

          <h8>Calle:</h8>
          <div className="factigis_groupbox">
            <input id="factigis_txtCalle" className="factigis-input" onChange={this.onChange} onBlur={this.onBlur}  title="Indique el nombre de la calle" type="text" placeholder="Seleccione el nombre de la calle"  />
            <button onClick={this.onClickCalle} className="factigis-selectFromMapButton factigis_btnSelectCliente btn btn-default" title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
            </button>
            <h8 className="factigis__toggleBtnLabel">{/* {this.state.toggleCalle} */} </h8>
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
            <button className="factigis_submitButton btn btn-success" title="Ir " type="button" onClick={this.onClickAgregarCliente} >
                <span><i className="fa fa-plus"></i> Agregar Dirección</span>
          </button>
        </div>
        </TabPanel>
        </Tabs>



      </div>
    );
  }
}

export default Factigis_Add;
