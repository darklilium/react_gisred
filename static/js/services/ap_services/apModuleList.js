


function APModuleList(){

  return [
    {application: 'AP', module: 'NORMAL', alias: 'AP MUNICIPAL', Available: 'yes', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'apmenu.html', color: 'brown', img:'dist/css/images/gisredDashboard_images/icono_planificacion.png' },
    {application: 'AP', module: 'ADMINISTRADOR',alias: 'ADMINISTRADOR', Available: 'no', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'backoffice_AP.html', color: 'deepskyblue', img:'dist/css/images/gisredDashboard_images/icono_verificarcliente.png'},
  ];

}

function APInsertMyData(list, permissions){
  var newList = [];

  permissions.forEach(permission => {

    list.forEach(array => {
      if(array.module === permission.module && array.application=== permission.application){
        newList.push({
          module: array['module'],
          alias: array['alias'],
          available: array['Available'],
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

function excludeDataAP(allList, yourList,yourPropList){
  var props = yourPropList;


  var result = allList.filter(function(o1){
  // filter out (!) items in result2
    return !yourList.some(function(o2){
        return o1.module === o2.module;          // assumes unique id
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

export {APModuleList,APInsertMyData,excludeDataAP};
