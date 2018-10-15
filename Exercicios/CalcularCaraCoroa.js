function CalcularCaraCoroa(quantasVezes)
{  
	function Aleatorio()
	{
		numAleat = Math.random() * 10;
		return numAleat;
	}

	var quantidadeCaras = [];
	var quantidadeCoroas = [];
	var resultados = [];
	var resultA;
	var numAleat;

	numAleat = Math.random() * 10;

	for (var LL = 0 ; LL < quantasVezes ; LL++)
	{
		if (numAleat > 5)
		{
			resultados.push("Cara");
			Aleatorio();
			continue;
		}

		if (numAleat < 5)
		{
			resultados.push("Coroa");
			Aleatorio();
			continue;
		}
	}

	for (var UU = 0; UU < quantasVezes ; UU++)
	{
		resultA = resultados[UU];

		if (resultA == "Cara")
		{
			quantidadeCaras.push(1);
			continue;
		}

		if (resultA == "Coroa")
		{
			quantidadeCoroas.push(1);
			continue;
		}
	}

	console.log("Quantidades de Caras: " + quantidadeCaras.length);
	console.log("Quantidades de Coroas: " + quantidadeCoroas.length);
	return resultados;
}

resultados = CalcularCaraCoroa(6);

function Repetiu() 
{
	PPP = resultados[YY + 1];
	return PPP;
}

var duasCoroaSeg = [];
var duasCaraSeg = [];
var tresCoroaSeg = [];
var tresCaraSeg = [];

for (var i = 0; i < resultados.length; i++)
{
	PPP = resultados[i]

	if(PPP == "Coroa")
	{
		Repetiu();
		if (PPP == "Coroa")
		{
			i++
			Repetiu();
			if (PPP == "Coroa")
			{
				i++
				tresCaraSeg.push(1)
				continue;
			}
			else 
			{
				duasCoroaSeg.push(1);
				continue;
			}
		}
		else {continue;}
	}

	if(PPP == "Cara")
	{
		Repetiu();
		if (PPP == "Cara")
		{
			i++
			Repetiu();
			if (PPP == "Cara")
			{
				i++
				tresCoroaSeg.push(1)
				continue;
			}
			else 
			{
				duasCaraSeg.push(1);
				continue;
			}
		}
		else {continue;}
	}
}
console.log("2 Coroas: " + duasCoroaSeg.length);
console.log("2 Caras: " + duasCaraSeg.length);
console.log("3 Coroas: " + tresCoroaSeg.length);
console.log("3 Caras: " + tresCaraSeg.length);
