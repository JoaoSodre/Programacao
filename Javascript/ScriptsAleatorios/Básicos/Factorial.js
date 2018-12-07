function fatorial(n) {  
    // Caso parâmetro chegar a zero, ele termina
    if (n === 0) {
        return 1;
    }

    // Caso for um número negativo, não irá funcionar
    else if (n < 0) {
        return "Não é possível achar um fatorial de número negativo";
    }

    else {
        // Usando função recursiva
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5)); // -> 120