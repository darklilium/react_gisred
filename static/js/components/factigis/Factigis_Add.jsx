import React from 'react';
import ReactDOM from 'react-dom';

class Factigis_Add extends React.Component {
  constructor(props){
    super(props);

  }
  componentWillMount(){

  }

  render(){
    return (
      <div className="wrapper_factigisAdd">

        <button className="btn btn-default" title="Ir " type="button" >
            <span><i className="fa fa-lightbulb-o"></i></span>
        </button>
      </div>
    );
  }
}

export default Factigis_Add;
