var fs = require('fs');



//Ler os dados de um arquivo

var txt = fs.readFileSync('./BaseDados.txt', 'utf8');
console.log("Terminei de ler o arquivo, isto é o que estava nele: " + txt);

/* ----------- Modo Assíncrono ----------- */

/*fs.readFile('./BaseDados.txt' , 'utf8', function(err, txt) {
    console.log("Terminei de ler o arquivo, isto é o que estava nele: " + txt);
})
*/



// Escrever dados num arquivo

for (let i = 0; i < 10; i++) {

	// Se o arquivo não existir, irá dar ERRO
    var write = fs.readFileSync('./EscrevaAqui.txt', 'utf8');
	write += Math.E + " \n";

	// Escrevendo no arquivo
    fs.writeFileSync('./EscrevaAqui.txt' , write);
}

/* ----------- Modo Assíncrono ----------- */

fs.writeFile('./EscrevaAqui.txt' , write, function() {
    console.log("Acabei de escrever no arquivo");
})




// Adicionar ou remover diretórios e arquivos 

// unlink é a forma que o node usa para deletar os arquivos
fs.unlink('BaseDados.txt')

// mkdir = make directory
fs.mkdirSync('./pasta1');

// rmdir = remove directory
fs.rmdirSync('./pasta1');

/* ----------- Modo Assíncrono ----------- */

fs.mkdir('./pasta1', function() {
    fs.mkdir('./pasta1/pasta2', function() {
        fs.mkdir('./pasta1/pasta2/pasta3', function() {
            // etc ....
        });
    });
});
