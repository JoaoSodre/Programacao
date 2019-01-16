var bodyParser = require('body-parser')
var express = require('express');
var fs = require('fs');

/**
 * Converter objetos de POST requests para strings
 */

var url = bodyParser.urlencoded({ extended: false });

/**
 * Classe com os dados dinâmicos de cada página
 */

class Dado {
	constructor(_title, _tituloTabelaClientes, _tituloTabelaCadastro) {
		this.DATA_PATH = "./model/BancoDados.json";
		this.STANDARD_DATA = "./model/DadosPadrao.json";
		this.title = _title || "Cadastro de Pessoas";
		this.tituloTabelaClientes = _tituloTabelaClientes || "Pessoas Cadastradas";
		this.tituloTabelaCadastro = _tituloTabelaCadastro || "Cadastro de Pessoa";
		this.alterar = {};
		this.pessoas = [];
		this.matches = [];
		this.aprovados = [];

		/**
		 * Retorna um objeto com as informações atualizadas da própia classe
		 */

		this.Render = () =>
			({
				title: this.title,
				alterar: this.alterar,
				pessoas: this.pessoas,
				aprovados: this.aprovados,
				tituloTabelaCadastro: this.tituloTabelaCadastro,
				tituloTabelaClientes: this.tituloTabelaClientes
			})
	}
}

/**
 * Retorna os dados da base de dados 
 */

var LerDataBase = dataBase => {

	var Data = new Dado();
	var dadosPadrao = fs.readFileSync(Data.STANDARD_DATA, "utf8");

	fs.readFile(Data.DATA_PATH, "utf8", (err, texto) => {

		if (err) {
			fs.writeFile(Data.DATA_PATH, dadosPadrao, (err2) => {
				if (err2) fs.mkdirSync('./model');
				fs.writeFile(Data.DATA_PATH, dadosPadrao, () => { });
			});
		}

		else if (texto == "") {
			fs.writeFile(Data.DATA_PATH, dadosPadrao, () => {
				dataBase(JSON.parse(dadosPadrao));
			});
		}

		else dataBase(JSON.parse(texto))

	});
}

var LerDataBasePadrao = dataBase => {

	var Data = new Dado();

	fs.readFile(Data.STANDARD_DATA, "utf8", (err, texto) => {
		if (err) console.log(err);
		else {
			fs.writeFile(Data.DATA_PATH, texto, () => { });
			dataBase(JSON.parse(texto));
		}
	});
}

module.exports.url = url;
module.exports.express = express;
module.exports.fs = fs;
module.exports.Dado = Dado;
module.exports.LerDataBasePadrao = LerDataBasePadrao;
module.exports.LerDataBase = LerDataBase;