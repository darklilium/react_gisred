import cookieHandler from 'cookie-handler';
import APEditor from '../../../js/components/pstreetlights/AP_Editor.jsx';
import createQueryTask from '../../../js/services/createquerytask-service';
import layers from '../../../js/services/layers-service';
import {crearRectangulo} from '../../../js/services/crearRectangulo';

function ap_showEditor(attributes,callbackMain){
  cookieHandler.remove('crrntgrphc');
  var elementMedidor = document.getElementById('wrapper_medidores');
  var elementLuminaria = document.getElementById('wrapper_luminarias');
  var elementLuminariaAsociada = document.getElementById('wrapper_luminariasAsociadas');



  if ((elementMedidor.style.display=='none') && (elementLuminaria.style.display=='none') && (elementLuminariaAsociada.style.display=='none')){
    console.log("Esta apagado todo");
    $('.ap_wrapper-editor').css('visibility', 'visible').css('display','flex');

    ap_getPics(attributes['ID_NODO'],attributes['COMUNA'],(callback)=>{

      let attributesSelected = {
        TIPO_CONEXION:attributes['TIPO_CONEXION'] ,
        TIPO:attributes['TIPO'],
        POTENCIA:attributes['POTENCIA'],
        PROPIEDAD:attributes['PROPIEDAD'],
        OBSERVACION:attributes['OBSERVACION'],
        ID_LUMINARIA:attributes['ID_LUMINARIA'],
        ID_NODO:attributes['ID_NODO'],
        ROTULO:attributes['ROTULO']

      }
      ap_getPicsAttached(callback, (mySecondCallback)=>{
        let mysettings = {
          graphics:  attributesSelected,
          pics: mySecondCallback
        };
        cookieHandler.set('crrntgrphc',mysettings);
        callbackMain(mysettings);
      });

    });

  }else{
    console.log("Esta prendido alguno tabla medidores");
    $('.ap_wrapper-editor').css('visibility', 'hidden').css('display','flex');

  }


}

function ap_getPics(idnodo,comuna,callback){
  var getOIDPicSrv = createQueryTask({
    url: layers.read_ap_catastro_fotos(),
    whereClause: "COMUNA='"+comuna + "' AND ID_NODO="+ idnodo
  });
  getOIDPicSrv((map, featureSet) => {
    if(!featureSet.features.length){
      console.log("no hay fotos");
      return callback("NOHAYFOTOS");
    }
    //if theres results then:
    let myOIDPerGetThePics = featureSet.features.map((feature)=>{
      return feature.attributes['OBJECTID'];
    });
    //  console.log(myOIDPerGetThePics[0]);
      callback(myOIDPerGetThePics[0]);

  },(errorPics)=>{
    console.log("Error getting the pics for this node",errorPics);
  });

}

function ap_getPicsAttached(idnodo, mySecondCallback){
  if (idnodo=='NOHAYFOTOS'){

    return mySecondCallback([]);
  }
  //ask about the number of pics and which ones are
  var myAttachedInfoLayer = new esri.layers.FeatureLayer(layers.read_ap_catastro_fotos());
  myAttachedInfoLayer.queryAttachmentInfos(idnodo,onResult,onFault);

  function onResult(eventArray,tokenObject){
    if (!eventArray.length){
      console.log("no hay pics para mostrar");
        mySecondCallback(eventArray);
    }else{
      console.log("hay", eventArray.length,"pics para mostrar");

        mySecondCallback(eventArray);
    }

  }
  function onFault(eventObject,tokenObject){
    console.log("Error getting the attached pics", eventObject);
  //  mySecondCallback([]);
  }


}


function ap_getClickedLuminaria(geometry, callback){

    var myRectangulo = crearRectangulo(geometry,3);
    var qTaskInterruptions = new esri.tasks.QueryTask(layers.read_ap_luminariasQuery());
    var qInterruptions = new esri.tasks.Query();

    qInterruptions.returnGeometry = true;
    qInterruptions.outFields=["*"];
    qInterruptions.geometry = myRectangulo;
    qInterruptions.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;

    qTaskInterruptions.execute(qInterruptions, (featureSet)=>{
    
      if(!featureSet.features.length){
        return callback([]);
      }
      callback(featureSet.features);
    }, (Errorq)=>{
      console.log(Errorq,"Error doing query for luminaria clicked");
      callback([]);
    });

}

export {ap_showEditor, ap_getClickedLuminaria}
