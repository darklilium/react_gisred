import React from 'react';
import ReactDOM from 'react-dom';
import cookieHandler from 'cookie-handler';
import {saveGisredLogin} from '../../services/login-service';
import ImageGallery from 'react-image-gallery';
import MenuImages from '../../services/ap_services/ap_getMenuImages';
import {saveSettings} from '../../services/login-service';
class APMenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentImg: 0,
      currentComuna: '',
      showIndex: true
    };


  }
  componentWillMount(){
    //if theres no cookie, the user cannot be in dashboard.
    if(!cookieHandler.get('usrprmssns')){
      window.location.href = "index.html";
      return;
    }
    //else , change the comunas and set up the first one
    this.setState({
      currentImg: 0, currentComuna: MenuImages[0].name
    });
  }
  handleImageLoad(event) {
  //  console.log('Image loaded ', event.target);

  }

  handlePlay() {
    this._imageGallery.play()
  }

  handlePause() {
    this._imageGallery.pause()
  }

  onClick(){
    console.log("entering to....", this.state.currentComuna);
    saveSettings("muni"+this.state.currentComuna);
  }

  //when u slide the img, the state for currentImg and currentComuna will be modified.
  onSlide(index, x){
    this.setState({
      currentImg: index,
      currentComuna: MenuImages[index].name
    });
  }
  render() {

    const images = MenuImages;
    return (
      <div className="apmenu_wrapper">

        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
          showIndex={this.state.showIndex}
          onSlide={this.onSlide.bind(this)}/>
          <div className="btn-group apmenu_buttongroup" role="group" aria-label="...">
            <button type="button" className="btn btn-default apmenu_button" onClick={this.handlePlay.bind(this)} ><i className="fa fa-play" aria-hidden="true"></i>  Play</button>
            <button type="button" onClick={this.onClick.bind(this)} className="btn btn-default btn btn-info apmenu_button apmenu_button-login">Entrar</button>
            <button type="button" className="btn btn-default apmenu_button" onClick={this.handlePause.bind(this)}><i className="fa fa-pause" aria-hidden="true"></i>  Pause</button>
          </div>

      </div>
    );
  }
}

export default APMenu;
