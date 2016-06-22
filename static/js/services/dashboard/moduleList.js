

function moduleList(){

  return [
    {application: 'STANDARD', alias: 'STANDARD', Available: 'yes', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'standard.html', color: 'brown', img:'dist/css/images/gisredDashboard_images/icono_planificacion.png' },
    {application: 'FACTIGIS',alias: 'FACTIGIS', Available: 'yes', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigisDashboard.html', color: 'deepskyblue', img:'dist/css/images/gisredDashboard_images/icono_verificarcliente.png'},
    {application: 'INTERRUPCIONES',alias: 'INTERRUPCIONES' ,Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'interrupciones.html', color: 'yellowgreen', img:'dist/css/images/gisredDashboard_images/icono_interrupciones.png'},
    {application: 'AP', alias: 'AP' ,Available: 'yes',Permission: 'yes', Insert: 'no', Update: 'no', Delete: 'no', url:'apdashboard.html', color: 'cornflowerblue', img:'dist/css/images/gisredDashboard_images/icono_ap.png'},
    {application: 'MANEJO VEGETACION',alias: 'MANEJO VEGETACIÓN', Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'standard.html', color: 'seagreen', img:'dist/css/images/gisredDashboard_images/icono_podas.png' },
    {application: 'INGRESO_CLIENTES',alias: 'INGRESO CLIENTES' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: 'slateblue', img:'dist/css/images/gisredDashboard_images/icono_cnr.png'},
    {application: 'CLIMA',alias: 'CLIMA' , Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'interrupciones.html', color: 'tomato', img:'dist/css/images/gisredDashboard_images/icono_clima.png'},
    {application: 'PMGD_PLANIFICACION',alias: 'PLANIFICACIÓN' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'standard.html', color: 'mediumblue', img:'dist/css/images/gisredDashboard_images/icono_planificacion.png' },
    {application: 'CNR',alias: 'PÉRDIDAS' , Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: '#D6CF00', img:'dist/css/images/gisredDashboard_images/icono_perdidas.png'},
    {application: 'ADMINISTRADOR', alias: 'ADMINISTRADOR' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'apchq.html', color: 'black', img:'dist/css/images/gisredDashboard_images/icono_planificacion.png'}
  ];

}

function insertMyData(list, permissions){
  var newList = [];

  permissions.forEach(permission => {
    list.forEach(array => {
      if(array.application === permission.application){
          newList.push({
            application: array['application'],
            alias: array['alias'],
            Available: array['Available'],
            Permission: 'yes',
            Insert: permission['insert'],
            Update: permission['update'],
            Delete: permission['delete'],
            url:array['url'],
            color: array['color'],
            img: array['img']
          });
        }

    });
  });

  return newList;
}

function excludeData(allList, yourList,yourPropList){
  var props = yourPropList;


  var result = allList.filter(function(o1){
  // filter out (!) items in result2
    return !yourList.some(function(o2){
        return o1.application === o2.application;          // assumes unique id
    });
  }).map(function(o){
  // use reduce to make objects with only the required properties
  // and map to apply this to the filtered array as a whole
    return props.reduce(function(newo, name){
        newo[name] = o[name];
        return newo;
    }, {});
  });

  return result;
}


export {moduleList, insertMyData, excludeData};
