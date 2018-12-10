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

    try {
        // Se o arquivo não existir, dar ERRO
        var write = fs.readFileSync('./EscrevaAqui.txt', 'utf8');
        write += Math.E + "\n";

        // Escrevendo no arquivo
        fs.writeFileSync('./EscrevaAqui.txt' , write);
    } 
    
    /* Caso der o erro ira criar o arquivo
    e diminuir uma unidade no i */
    catch (error) {
        fs.writeFileSync('./EscrevaAqui.txt', "");
        i--;
    }
}

/* ----------- Modo Assíncrono ----------- */

// Apenas substituir nos 'fs.writeFileSync()' acima
fs.writeFile('./EscrevaAqui.txt' , write, function() {
    // *Algo para ele fazer, quando terminar*
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




// Criando Readable Streams

// Criando uma stream que ler os buffers
var minhaReadStream = fs.createReadStream(__dirname + '/textoLorem.txt');
// __dirname = Caminho até a pasta atual, ou seja, o mesmo que o ponto (.)
// É possível usar o 'utf8' como segundo parâmetro para os caracteres serem renderizados depois

// Toda vez que um buffer passar pela stream ele acionar o evento 'data', com ele é possível ver os chunks sendo passados
minhaReadStream.on('data', function(dados){
    console.log(dados);
});




// Criando Writable Streams

var minhaReadStream = fs.createReadStream(__dirname + '/textoLorem.txt');
var meuWriteStream = fs.createWriteStream(__dirname + '/escrevaAqui.txt')

// Toda vez que receber um pedaço dos dados... 
minhaReadStream.on('data', function(data){

    console.log("Novo pedaço de data recebido");

    // Escreva-os num arquivo da WriteStream
    meuWriteStream.write(data);
    // Método 'write()' da stream funciona da mesma forma que o 'fs.writeFile()'
});




// Pipes

var minhaReadStream = fs.createReadStream(__dirname + '/textoLorem.txt');
var meuWriteStream = fs.createWriteStream(__dirname + '/escrevaAqui.txt');

minhaReadStream.pipe(meuWriteStream);