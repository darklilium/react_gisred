function FactigisModuleList(){

  return [
    [{module_name: 'FRONTOFFICE', alias: 'FRONTOFFICE', Available: 'yes', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'factigis.html', color: 'brown', img:'dist/css/images/gisredDashboard_images/icono_planificacion.png' }],
    [{module_name: 'BACKOFFICE',alias: 'FRONTOFFICE', Available: 'no', Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'backoffice_factigis.html', color: 'deepskyblue', img:'dist/css/images/gisredDashboard_images/icono_verificarcliente.png'}],
  ];

}

function FactigisInsertMyData(list, permissions){
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

export {FactigisModuleList,FactigisInsertMyData};
