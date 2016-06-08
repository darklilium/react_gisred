

function moduleList(){

  return [
    [{application: 'STANDARD', alias: 'STANDARD', Available: 'no', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'standard.html', color: 'brown', img:'dist/css/images/gisredDashboard_images/icono_planificacion.png' }],
    [{application: 'FACTIGIS',alias: 'FACTIGIS', Available: 'yes', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigisDashboard.html', color: 'deepskyblue', img:'dist/css/images/gisredDashboard_images/icono_verificarcliente.png'}],
    [{application: 'INTERRUPCIONES',alias: 'INTERRUPCIONES' ,Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'interrupciones.html', color: 'yellowgreen', img:'dist/css/images/gisredDashboard_images/icono_interrupciones.png'}],
    [{application: 'AP', alias: 'AP' ,Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'apchq.html', color: 'cornflowerblue', img:'dist/css/images/gisredDashboard_images/icono_ap.png'}],
    [{application: 'MANEJO VEGETACION',alias: 'MANEJO VEGETACION', Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'standard.html', color: 'seagreen', img:'dist/css/images/gisredDashboard_images/icono_podas.png' }],
    [{application: 'INGRESO_CLIENTES',alias: 'INGRESO CLIENTES' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: 'slateblue', img:'dist/css/images/gisredDashboard_images/icono_cnr.png'}],
    [{application: 'CLIMA',alias: 'CLIMA' , Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'interrupciones.html', color: 'tomato', img:'dist/css/images/gisredDashboard_images/icono_clima.png'}],
    [{application: 'PMGD_PLANIFICACION',alias: 'PLANIFICACION' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'standard.html', color: 'mediumblue', img:'dist/css/images/gisredDashboard_images/icono_planificacion.png' }],
    [{application: 'CNR',alias: 'PERDIDAS' , Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: '#D6CF00', img:'dist/css/images/gisredDashboard_images/icono_perdidas.png'}],
    [{application: 'ADMINISTRADOR', alias: 'ADMINISTRADOR' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'apchq.html', color: 'black', img:'dist/css/images/gisredDashboard_images/icono_planificacion.png'}]
  ];

}

function insertMyData(list, permissions){
  var newList = [];

  permissions.forEach(permission => {
    list.forEach(array => {
      array.forEach(item => {
        if(item.application === permission.application){
          newList.push({
            application: item['application'],
            alias: item['alias'],
            available: item['Available'],
            Permission: 'yes',
            Insert: permission['insert'],
            Update: permission['update'],
            Delete: permission['delete'],
            url:item['url'],
            color: item['color'],
            img: item['img']
          });
        }
      });
    });
  });

  return newList;
}

export {moduleList, insertMyData};
