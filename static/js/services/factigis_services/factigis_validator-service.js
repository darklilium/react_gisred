import layers from '../../services/layers-service';
import token from '../../services/token-service';

function factigis_validator(point, callbackMain){
  console.log("my point to validate", point);

  var concesionResponse = concesionZoneValidator(point, (callback1)=>{
    var campamentosResponse = campamentosZoneValidator(point, (callback2)=>{
      var transmisionResponse = transmisionZoneValidator(point, (callback3)=>{
        var vialidadResponse = vialidadZoneValidator(point, (callback4)=>{
          console.log("my returned values",callback1,callback2,callback3,callback4);

            //zona concesion, zona campamentos, zona restringida, zona vialidad
            return callbackMain({zonaConcesion: callback1, zonaCampamentos: callback2, zonaRestringida: callback3,zonaVialidad: callback4});

        });
      });
    });
  });

}


function concesionZoneValidator(point,callback){

  var qTaskConcesion = new esri.tasks.QueryTask(layers.read_factigis_distribucion());
  var qConcesion = new esri.tasks.Query();
  qConcesion.geometry = point;
  qConcesion.spatialRelationship = esri.tasks.Query.SPATIAL_REL_WITHIN;
  qConcesion.where = "1=1";
  qConcesion.returnGeometry = true;
  qTaskConcesion.execute(qConcesion, (featureSet)=>{
    if(featureSet.features.length){

      return callback(true);
    }else{
      console.log("no hay", featureSet.features.length, "concesion");
      return callback(false);
    }

  }, (Errorq)=>{

    return callback("error");

  });


}

function campamentosZoneValidator(point,callback){
  var qTaskCampamentos = new esri.tasks.QueryTask(layers.read_campamentos());
  var qCampamentos = new esri.tasks.Query();
  qCampamentos.geometry = point;
  qCampamentos.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;
  qCampamentos.where = "1=1";
  qCampamentos.returnGeometry = true;
  qTaskCampamentos.execute(qCampamentos, (featureSet)=>{
    if(featureSet.features.length){

      return callback(false);
    }else{
      console.log("no hay", featureSet.features.length, "campamento");
      return callback(true);
    }

  }, (Errorq)=>{

    return callback("error");

  });

}

function transmisionZoneValidator(point,callback){

  var qTaskCampamentos = new esri.tasks.QueryTask(layers.read_factigis_transmision());


  var qCampamentos = new esri.tasks.Query();
  qCampamentos.geometry = point;
  qCampamentos.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;
  qCampamentos.where = "1=1";
  qCampamentos.returnGeometry = true;
  qTaskCampamentos.execute(qCampamentos, (featureSet)=>{
    if(featureSet.features.length){
      console.log("hay", featureSet.features.length, "trans", featureSet);

      return callback(false);
    }else{
      console.log("no hay", featureSet.features.length, "trans");
      return callback(true);
    }

  }, (Errorq)=>{
    console.log(Errorq,"Error doing query for campamentos");
    return callback("error");

  });

}

function vialidadZoneValidator(point,callback){
  var qTaskVialidad = new esri.tasks.QueryTask(layers.read_factigis_vialidad());
  var qVialidad = new esri.tasks.Query();
  qVialidad.geometry = point;
  qVialidad.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;
  qVialidad.where = "1=1";
  qVialidad.returnGeometry = true;
  qTaskVialidad.execute(qVialidad, (featureSet)=>{
    if(featureSet.features.length){

      return callback(false);
    }else{

      return callback(true);
    }

  }, (Errorq)=>{
    console.log(Errorq,"Error doing query for vialidad");
    return callback("error");

  });
}
export {factigis_validator};
