$(function(){
	//$("table").DataTable();
	//var elementos = $(".principal")
	// elementos.text("Novo texto");
	
	/*elementos.animate({
		"margin-left": "100px"
		
	}, 3000);	
	
	*/
	/*elementos.each(function(){
		var texto = $(this).text();
		console.log(texto);
	});
	var nomes = [
		"Paulo",
		"Juvenal",
		"Ant�nio",
		"Hulisses",
		"Ger�nimo",
		"Maicon"
	];
	*/
	/*
	$.each(nomes, function(index, value){
		console.log(index, value);
	});
	
	var pessoa = {
		"nome": "Paulo Salvatore",
		"idade": 24,
		"signo":"Sagit�rio",
		"signo_ingles": "sagittarius"
	};
	*/
	var numero = 5;
	var texto = "edl�nia";
	var decimal = 10.1;
	var booleano = false;
	console.log(numero);
	console.log(texto);
	console.log(decimal);
	console.log(booleano);
	console.log(typeof (numero));
	console.log(typeof (texto));
	console.log(typeof (decimal));
	console.log(typeof ( booleano));
	
	var nome = "edlania";
	var sobrenome = "souza";
	
	console.log(nome + " " + sobrenome)
	
	var valor_refeicao = 42.54;
	var taxa_servico = 0.1 * valor_refeicao
	var total = taxa_servico + valor_refeicao
	console.log(total)
	var horoscopo = {
		"sagitario": "As pessoas de sagit�rios s�o as melhores, blabla",
		"touro": "Pessoas de touro tratam as outras pessoas mal",
		"gemeos": "Pessoas de gemeos s�o julgadas o tempo inteiro",
		"libra": "Pessoas de libra n�o decidem nada nunca, pior signo",
		"escorpiao": "Aparentemente s�o pessoas frias, vingativas e far�o de tudo para usar isso contra"
		
	}
	

	$("#buscar").click(function(){
		var signo = $("#signo").val();
		
		if (horoscopo[signo] == undefined) {
			console.log("Esse signo n�o existe");
			$("#exibir_signo").text("Esse signo n�o existe.");
		}
		else {
			$("#exibir_signo").text(horoscopo[signo]);
		}
	});
});

	
	/*var api = "http://sandipbgt.com/theastrologer/api/horoscope/{signo_ingles}/today/";
	
	$("table tbody tr").each(function(){
		var signo_ingles = $(this).data("signo_ingles");
		var tr = $(this);
		var horoscopo = "";
		
		$.getJSON(api.replace("{signo_ingles}", signo_ingles), function(data) {
			console.log(data);
			horoscopo = data.horoscope;
		}).always(function(){
			tr.find("td").eq(3).text(horoscopo);
		});
		
	});
	
	
	// console.log(pessoa["nome"], pessoa["idade"], pessoa["signo"]);
	*/
