var axios = require('axios');
var chart = require('./scripts/StareViz/bubbleChart.js');
var d3= require('d3');
var data;

// esta funcion al ser ejecutada, consulta al backend en la ruta 'ejemplo' y muestra su respuesta por console log, en color rojo
const backendResponse = () => axios.default.get('http://localhost:3000/json').then(
    response => console.log(`%c${JSON.stringify(response.data)}`, 'color: #F00'),
    error => console.error(error)
);


var funcionTest= function(){
  console.log("there is no god");
};

console.log("I'm the frontend!");

backendResponse(); // aca ejecuto la funcion backendResponse
