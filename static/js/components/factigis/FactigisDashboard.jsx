import React from 'react';
class FactigisDashboard extends React.Component {

  constructor(props){
    super(props);
    this.onClickWidget = this.onClickWidget.bind(this);

  }

  onClickWidget(event){
    window.location.href = "factigis.html";
  }
  render(){
      return (
    <div className="wrapper_factigisDashboard">
      <button type="button" onClick={this.onClickWidget}>Click Me! </button>
    </div>
  );
  }
}

export default FactigisDashboard;
