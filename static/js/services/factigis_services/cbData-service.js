
var tipoCliente = [
	{ value: '2', label: 'RESIDENCIAL' },
	{ value: '3', label: 'COMERCIAL' },
	{ value: '4', label: 'ESTATAL' },
	{ value: '5', label: 'INDUSTRIAL' },
	{ value: '9', label: 'MUNICIPAL'},
	{ value: '10', label: 'AGRICOLA' },
	{ value: '11', label: 'UTILIDAD PUBLICA' }
];

var tipoContribuyente = [
	{ value: '1', label: 'PERSONA NATURAL' },
	{ value: '2', label: 'PERSONA JURIDICA' },
	{ value: '81', label: 'AUTOCONSUMO' }
];

var tipoEmpalme = [
	{ value: 'aereo', label: 'AÉREO'},
	{ value: 'subterraneo', label: 'SUBTERRÁNEO' }
];

var tipoMonoTri=[
	{ value: 'monofasico', label: 'MONOFÁSICO'},
	{ value: 'trifasico', label: 'TRIFÁSICO' }
];

var tipoEmpalmeAereo = [
	{ value: 'A6', label: 'AÉREO' },
	{ value: 'A9', label: 'SUBTERRÁNEO' }
];

var E_A6_MONO=[
	{ value: '0.60', label: 'Potencia: 0.60', empalme: 'A6', nominalEmpalme: '0.66', nominalInterruptor: '3', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO' },
	{ value: '1.23', label: 'Potencia: 1.23', empalme: 'A6', nominalEmpalme: '1.32', nominalInterruptor: '6', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO'},
	{ value: '2', label: 'Potencia: 2', empalme: 'A6', nominalEmpalme: '2.2', nominalInterruptor: '10', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO'},
	{ value: '3', label: 'Potencia: 3', empalme: 'A6', nominalEmpalme: '3.3', nominalInterruptor: '15', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO'},
	{ value: '4', label: 'Potencia: 4', empalme: 'A6', nominalEmpalme: '4.4', nominalInterruptor: '20', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO'},
	{ value: '5', label: 'Potencia: 5', empalme: 'A6', nominalEmpalme: '5.5', nominalInterruptor: '25', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO'}
];

var E_A9_MONO=[
	{ value: '6', label: 'Potencia: 6', empalme: 'A9', nominalEmpalme: '6.6', nominalInterruptor: '30', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO' },
	{ value: '7', label: 'Potencia: 7', empalme: 'A9', nominalEmpalme: '7.7', nominalInterruptor: '35', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO'},
	{ value: '8', label: 'Potencia: 8', empalme: 'A9', nominalEmpalme: '8.8', nominalInterruptor: '40', tipoEmpalme:'AEREO', tipoFase: 'MONOFASICO'}
];

var E_S6_MONO=[
	{ value: '0.60', label: 'Potencia: 0.60', empalme: 'S6', nominalEmpalme: '0.66', nominalInterruptor: '3', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO' },
	{ value: '1.23', label: 'Potencia: 1.23', empalme: 'S6', nominalEmpalme: '1.32', nominalInterruptor: '6', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO'},
	{ value: '2', label: 'Potencia: 2', empalme: 'S6', nominalEmpalme: '2.2', nominalInterruptor: '10', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO'},
	{ value: '3', label: 'Potencia: 3', empalme: 'S6', nominalEmpalme: '3.3', nominalInterruptor: '15', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO'},
	{ value: '4', label: 'Potencia: 4', empalme: 'S6', nominalEmpalme: '4.4', nominalInterruptor: '20', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO'},
	{ value: '5', label: 'Potencia: 5', empalme: 'S6', nominalEmpalme: '5.5', nominalInterruptor: '25', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO'}
];

var E_S9_MONO=[
	{ value: '6', label: 'Potencia: 6', empalme: 'S9', nominalEmpalme: '6.6', nominalInterruptor: '30', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO' },
	{ value: '7', label: 'Potencia: 7', empalme: 'S9', nominalEmpalme: '7.7', nominalInterruptor: '35', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO'},
	{ value: '8', label: 'Potencia: 8', empalme: 'S9', nominalEmpalme: '8.8', nominalInterruptor: '40', tipoEmpalme:'SUBTERRANEO', tipoFase: 'MONOFASICO'}

];

var E_A18_TRI=[
	{ value: '4', label: 'Potencia: 4', empalme: 'A18', nominalEmpalme: '3.9', nominalInterruptor: '6', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'},
	{ value: '6', label: 'Potencia: 6', empalme: 'A18', nominalEmpalme: '6.6', nominalInterruptor: '10', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'},
	{ value: '9', label: 'Potencia: 9', empalme: 'A18', nominalEmpalme: '9.9', nominalInterruptor: '15', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'},
	{ value: '12', label: 'Potencia: 12', empalme: 'A18', nominalEmpalme: '13.2', nominalInterruptor: '20', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'},
	{ value: '15', label: 'Potencia: 15', empalme: 'A18', nominalEmpalme: '16.5', nominalInterruptor: '25', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'},
	{ value: '18', label: 'Potencia: 18', empalme: 'A18', nominalEmpalme: '19.8', nominalInterruptor: '30', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'}

];

var E_A27_TRI= [
	{ value: '23', label: 'Potencia: 23', empalme: 'A27', nominalEmpalme: '23.1', nominalInterruptor: '35', tipoEmpalme:'AEREO'  , tipoFase: 'TRIFASICO'},
	{ value: '26', label: 'Potencia: 26', empalme: 'A27', nominalEmpalme: '26.4', nominalInterruptor: '40', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'}
];

var E_AR48_TRI = [
	{ value: '30', label: 'Potencia: 30', empalme: 'AR48', nominalEmpalme: '29.7', nominalInterruptor: '45', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO' },
	{ value: '31', label: 'Potencia: 31', empalme: 'AR48', nominalEmpalme: '33', nominalInterruptor: '50', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'},
	{ value: '37', label: 'Potencia: 37', empalme: 'AR48', nominalEmpalme: '39.6', nominalInterruptor: '60', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'},
	{ value: '43', label: 'Potencia: 43', empalme: 'AR48', nominalEmpalme: '46.2', nominalInterruptor: '70', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'}

];

var E_AR75_TRI = [
	{ value: '49', label: 'Potencia: 49', empalme: 'AR75', nominalEmpalme: '52.8', nominalInterruptor: '80', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO' },
	{ value: '55', label: 'Potencia: 55', empalme: 'AR75', nominalEmpalme: '59.4', nominalInterruptor: '90', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'},
	{ value: '61', label: 'Potencia: 61', empalme: 'AR75', nominalEmpalme: '66', nominalInterruptor: '100', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO'}

];

var E_AR100_TRI = [
	{ value: '77', label: 'Potencia: 77', empalme: 'AR100', nominalEmpalme: '82.5', nominalInterruptor: '125', tipoEmpalme:'AEREO' , tipoFase: 'TRIFASICO' }

];

var E_S18_TRI = [
	{ value: '4', label: 'Potencia: 4', empalme: 'S18', nominalEmpalme: '3.9', nominalInterruptor: '6', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO' },
	{ value: '6', label: 'Potencia: 6', empalme: 'S18', nominalEmpalme: '6.6', nominalInterruptor: '10', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '9', label: 'Potencia: 9', empalme: 'S18', nominalEmpalme: '9.9', nominalInterruptor: '15', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '12', label: 'Potencia: 12', empalme: 'S18', nominalEmpalme: '13.2', nominalInterruptor: '20', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '15', label: 'Potencia: 15', empalme: 'S18', nominalEmpalme: '16.5', nominalInterruptor: '25', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '18', label: 'Potencia: 18', empalme: 'S18', nominalEmpalme: '19.8', nominalInterruptor: '30', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'}

];

var E_S27_TRI = [
	{ value: '23', label: 'Potencia: 23', empalme: 'S27', nominalEmpalme: '23.1', nominalInterruptor: '35' , tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '26', label: 'Potencia: 26', empalme: 'S27', nominalEmpalme: '26.4', nominalInterruptor: '40', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'}

];

var E_SR48_TRI = [
	{ value: '30', label: 'Potencia: 30', empalme: 'SR48', nominalEmpalme: '29.7', nominalInterruptor: '45', tipoEmpalme:'SUBTERRANEO'  , tipoFase: 'TRIFASICO'},
	{ value: '31', label: 'Potencia: 31', empalme: 'SR48', nominalEmpalme: '33', nominalInterruptor: '50', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '37', label: 'Potencia: 37', empalme: 'SR48', nominalEmpalme: '39.6', nominalInterruptor: '60', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '43', label: 'Potencia: 43', empalme: 'SR48', nominalEmpalme: '46.2', nominalInterruptor: '70', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'}

];

var E_SR75_TRI = [
	{ value: '49', label: 'Potencia: 49', empalme: 'SR75', nominalEmpalme: '52.8', nominalInterruptor: '80', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO' },
	{ value: '55', label: 'Potencia: 55', empalme: 'SR75', nominalEmpalme: '59.4', nominalInterruptor: '90', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '61', label: 'Potencia: 61', empalme: 'SR75', nominalEmpalme: '66', nominalInterruptor: '100', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},

];

var E_SR100_TRI = [
	{ value: '77', label: 'Potencia: 77', empalme: 'SR100', nominalEmpalme: '82.5', nominalInterruptor: '125' , tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},

];

var E_SR150_TRI = [
	{ value: '92', label: 'Potencia: 92', empalme: 'SR150', nominalEmpalme: '99', nominalInterruptor: '150' , tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '98', label: 'Potencia: 98', empalme: 'SR150', nominalEmpalme: '105.6', nominalInterruptor: '160' , tipoFase: 'TRIFASICO'},
	{ value: '107', label: 'Potencia: 107', empalme: 'SR150', nominalEmpalme: '115.5', nominalInterruptor: '175', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '123', label: 'Potencia: 123', empalme: 'SR150', nominalEmpalme: '132', nominalInterruptor: '200', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'}

];

var E_SR225_TRI = [
	{ value: '138', label: 'Potencia: 138', empalme: 'SR225', nominalEmpalme: '148.5', nominalInterruptor: '225', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO' },
	{ value: '153', label: 'Potencia: 153', empalme: 'SR225', nominalEmpalme: '165', nominalInterruptor: '250', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '184', label: 'Potencia: 184', empalme: 'SR225', nominalEmpalme: '198', nominalInterruptor: '300', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'}

];

var E_SR350_TRI = [
	{ value: '196', label: 'Potencia: 196', empalme: 'SR350', nominalEmpalme: '211', nominalInterruptor: '320', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO' },
	{ value: '215', label: 'Potencia: 215', empalme: 'SR350', nominalEmpalme: '231', nominalInterruptor: '350', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '246', label: 'Potencia: 246', empalme: 'SR350', nominalEmpalme: '264', nominalInterruptor: '400', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'},
	{ value: '276', label: 'Potencia: 276', empalme: 'SR350', nominalEmpalme: '297', nominalInterruptor: '450', tipoEmpalme:'SUBTERRANEO' , tipoFase: 'TRIFASICO'}

];

var AEREO_MONOFASICOS = [
	{ value: 'A6', label: 'A-6' },
	{ value: 'A9', label: 'A-9' }
];

var SUB_MONOFASICOS = [
	{ value: 'S6', label: 'S-6' },
	{ value: 'S9', label: 'S-9' }
];

var AEREO_TRIFASICOS = [
	{ value: 'A18', label: 'A-18' },
	{ value: 'A27', label: 'A-27' },
	{ value: 'AR48', label: 'AR-48' },
	{ value: 'AR75', label: 'AR-75' },
	{ value: 'AR100', label: 'AR-100' }

];

var SUB_TRIFASICOS = [
	{ value: 'S18', label: 'S-18' },
	{ value: 'S27', label: 'S-27' },
	{ value: 'SR48', label: 'SR-48' },
	{ value: 'SR75', label: 'SR-75' },
	{ value: 'SR100', label: 'SR-100' },
	{ value: 'SR150', label: 'SR-150' },
	{ value: 'SR225', label: 'SR-225' },
	{ value: 'SR350', label: 'SR-350' }
];

function detallesEmpalmes(designacionEmpalme){

	if(designacionEmpalme=='A6'){
		return E_A6_MONO;
	}
	if(designacionEmpalme=='A9'){
		return E_A9_MONO;
	}
	if(designacionEmpalme=='A18'){
		return E_A18_TRI;
	}
	if(designacionEmpalme=='A27'){
		return E_A27_TRI;
	}
	if(designacionEmpalme=='AR48'){
		return E_AR48_TRI;
	}
	if(designacionEmpalme=='AR75'){
		return E_AR75_TRI;
	}
	if(designacionEmpalme=='AR100'){
		return E_AR100_TRI;
	}
	if(designacionEmpalme=='S6'){
		return E_S6_MONO;
	}
	if(designacionEmpalme=='S9'){
		return E_S9_MONO;
	}
	if(designacionEmpalme=='S18'){
		return E_S18_MONO;
	}
	if(designacionEmpalme=='S27'){
		return E_S27_MONO;
	}
	if(designacionEmpalme=='SR48'){
		return E_SR48_MONO;
	}
	if(designacionEmpalme=='SR75'){
		return E_SR75_MONO;
	}
	if(designacionEmpalme=='SR100'){
		return E_SR100_MONO;
	}
	if(designacionEmpalme=='SR150'){
		return E_SR150_MONO;
	}
	if(designacionEmpalme=='SR225'){
		return E_SR225_MONO;
	}
	if(designacionEmpalme=='SR350'){
		return E_SR350_MONO;
	}
}

export {tipoCliente,tipoContribuyente,tipoEmpalme, tipoMonoTri,
			AEREO_MONOFASICOS,SUB_MONOFASICOS, AEREO_TRIFASICOS, SUB_TRIFASICOS, detallesEmpalmes}
