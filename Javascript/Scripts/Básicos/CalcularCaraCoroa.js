const CalcularCaraCoroa = (quantasVezes) => {
	const Aleatorio = () => {
		numAleat = Math.random() * 10;
		return numAleat;
	}

	var quantidadeCaras = [];
	var quantidadeCoroas = [];
	var numAleat = Math.random() * 10;

	for (var i = 0; i < quantasVezes; i++) {
		if (numAleat > 5) {
			quantidadeCaras.push(1);
			Aleatorio();
			continue;
		}

		else if (numAleat < 5) {
			quantidadeCoroas.push(1);
			Aleatorio();
			continue;
		}

		else {
			console.log("A moeda caiu de lado, qual a chance disso acontecer?");
			continue;
		}
	}
	console.log("Quantidades de Caras: " + quantidadeCaras.length);
	console.log("Quantidades de Coroas: " + quantidadeCoroas.length);
}