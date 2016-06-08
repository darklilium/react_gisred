import React from 'react';
import ReactDOM from 'react-dom';
import ReactTabs from 'react-tabs';

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

class Factigis_Add extends React.Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      selectedTab: 0
    }
  }
  componentWillMount(){

  }
  handleSelect(index, last){
    this.setState({selectedTab: index});


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
          <h8>Rut:</h8>
          <div className="factigis_groupbox">
            <input id="ap_txtRotuloLuminaria" className="factigis-input" ref="rutValue" title="Ingrese Rut" type="text" placeholder="Rut del Cliente"  />
            <button className="factigis-selectFromMapButton btn btn-default" title="Ir " type="button" >
              <span><i className="fa fa-map-marker"></i></span>
              </button>
          </div>

          <h8>Poste:</h8>
          <div className="factigis_groupbox">
            <input id="ap_txtObsLuminaria" className="factigis-input" ref="rotuloValue" title="Poste o Cámara" type="text" placeholder="Poste o cámara encontrado" />
            <button className="factigis-selectFromMapButton btn btn-default" title="Ir " type="button" >
              <span><i className="fa fa-map-signs"></i></span>
            </button>
          </div>

          <h8>Dirección:</h8>
          <div className="factigis_groupbox">
            <input id="ap_txtObsLuminaria" className="factigis-input" ref="dirValue" title="Dirección" type="text" placeholder="Dirección encontrada" />
            <button className="factigis-selectFromMapButton btn btn-default" title="Ir " type="button" >
              <span><i className="fa fa-home"></i></span>
              </button>
          </div>

          <hr className="factigis_hr"/>
          <h9>Información de Factibilidad:</h9>
          <ul className="factigis_ul">
            <li>
              <input type="checkbox" name="manager" id="manager" />
              <label htmlFor="manager">Project Manager</label>
            </li>
            <li>
              <input type="checkbox" name="webdesigner" id="webdesigner" />
              <label htmlFor="webdesigner">Web Designer</label>
            </li>
            <li>
              <input type="checkbox" name="webdev" id="webdev" />
              <label htmlFor="webdev">Web Developer</label>
            </li>
            <li>
              <input type="checkbox" name="csr" id="csr" />
              <label htmlFor="csr">Customer Service Representative</label>
            </li>
            <li>
              <input type="checkbox" name="csr2" id="csr2" />
              <label htmlFor="csr2">Customer Service Representative</label>
            </li>
          </ul>
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
