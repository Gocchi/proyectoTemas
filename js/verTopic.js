var topicId = getParameterByName('topic_id');

var api = {
	url:'http://examen-laboratoria-sprint-5.herokuapp.com/topics/' + topicId
}
console.log(api.url);
var cargarPagina = function() {
	// alert('index cargado');
	mostrarTemaIndividual();
}
var mostrarTemaIndividual = function(data){
	$.getJSON(api.url, function(titulo){
		// console.log(titulo);
		// titulo.forEach(imprimirTitulo);
		imprimirTitulo(titulo);
	});
}

var imprimirTitulo = function(titulo){
	// console.log(titulo.id);
	var temaIndividual = $('#temaIndividual');
	var titulo = titulo.author_name;
	//agregar 
	temaIndividual.text(titulo);
}

$(document).ready(cargarPagina);
