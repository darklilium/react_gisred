

function moduleList(){

  return [
    [{module_name: 'STANDARD', alias: 'STANDARD' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'standard.html', color: 'brown', img:'dist/css/images/factigis_images/icono_planificacion.png' }],
    [{module_name: 'FACTIGIS',alias: 'FACTIGIS' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: 'deepskyblue', img:'dist/css/images/factigis_images/icono_verificarcliente.png'}],
    [{module_name: 'INTERRUPCIONES',alias: 'INTERRUPCIONES' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'interrupciones.html', color: 'yellowgreen', img:'dist/css/images/factigis_images/icono_interrupciones.png'}],
    [{module_name: 'AP_WEB', alias: 'AP' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'apchq.html', color: 'cornflowerblue', img:'dist/css/images/factigis_images/icono_ap.png'}],
    [{module_name: 'MANEJO VEGETACION',alias: 'MANEJO VEGETACION' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'standard.html', color: 'seagreen', img:'dist/css/images/factigis_images/icono_podas.png' }],
    [{module_name: 'INGRESO_CLIENTES',alias: 'INGRESO CLIENTES' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: 'slateblue', img:'dist/css/images/factigis_images/icono_cnr.png'}],
    [{module_name: 'CLIMA',alias: 'CLIMA' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'interrupciones.html', color: 'tomato', img:'dist/css/images/factigis_images/icono_clima.png'}],
    [{module_name: 'PMGD_PLANIFICACION',alias: 'PLANIFICACION' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'standard.html', color: 'mediumblue', img:'dist/css/images/factigis_images/icono_planificacion.png' }],
    [{module_name: 'CNR',alias: 'PERDIDAS' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no',url:'factigis.html', color: '#D6CF00', img:'dist/css/images/factigis_images/icono_perdidas.png'}],
    [{module_name: 'ADMINISTRADOR', alias: 'ADMINISTRADOR' ,Permission: 'no', Insert: 'no', Update: 'no', Delete: 'no', url:'apchq.html', color: 'black', img:'dist/css/images/factigis_images/icono_planificacion.png'}]
  ];

}
export {moduleList};
