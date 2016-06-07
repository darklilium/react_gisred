

function moduleList(){

  return [
    [{module_name: 'STANDARD', alias: 'STANDARD', Available: 'no', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'standard.html', color: 'brown', img:'dist/css/images/factigis_images/icono_planificacion.png' }],
    [{module_name: 'FACTIGIS',alias: 'FACTIGIS', Available: 'yes', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: 'deepskyblue', img:'dist/css/images/factigis_images/icono_verificarcliente.png'}],
    [{module_name: 'INTERRUPCIONES',alias: 'INTERRUPCIONES' ,Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'interrupciones.html', color: 'yellowgreen', img:'dist/css/images/factigis_images/icono_interrupciones.png'}],
    [{module_name: 'AP_WEB', alias: 'AP' ,Available: 'yes',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'apchq.html', color: 'cornflowerblue', img:'dist/css/images/factigis_images/icono_ap.png'}],
    [{module_name: 'MANEJO VEGETACION',alias: 'MANEJO VEGETACION', Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'standard.html', color: 'seagreen', img:'dist/css/images/factigis_images/icono_podas.png' }],
    [{module_name: 'INGRESO_CLIENTES',alias: 'INGRESO CLIENTES' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: 'slateblue', img:'dist/css/images/factigis_images/icono_cnr.png'}],
    [{module_name: 'CLIMA',alias: 'CLIMA' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'interrupciones.html', color: 'tomato', img:'dist/css/images/factigis_images/icono_clima.png'}],
    [{module_name: 'PMGD_PLANIFICACION',alias: 'PLANIFICACION' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'standard.html', color: 'mediumblue', img:'dist/css/images/factigis_images/icono_planificacion.png' }],
    [{module_name: 'CNR',alias: 'PERDIDAS' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: '#D6CF00', img:'dist/css/images/factigis_images/icono_perdidas.png'}],
    [{module_name: 'ADMINISTRADOR', alias: 'ADMINISTRADOR' , Available: 'no',Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'apchq.html', color: 'black', img:'dist/css/images/factigis_images/icono_planificacion.png'}]
  ];

}

function insertMyData(list, permissions){
  var newList = [];

  permissions.forEach(permission => {
    list.forEach(array => {
      array.forEach(item => {
        if(item.module_name === permission.module){
          newList.push({
            module_name: item['module_name'],
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
