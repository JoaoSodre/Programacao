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

    alert("Quantidades de Caras: " + quantidadeCaras.length);
    alert("Quantidades de Coroas: " + quantidadeCoroas.length);
}
