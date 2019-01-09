/**
 * Módulos e funções usados nessa aplicação
 */
var f = require('./functions/controllerIncludes.js');

/**
 * Rotas da Aplicação
 */

var router = f.express.Router();

router.get('/', HomeGet);
router.get('/standard', Standard);
router.post('/cadastro', f.url, CadastrarCliente);
router.get('/search', ProcurarCliente);
router.get('/excluir/:item', DelItem);
router.get('/alterar/:item', ChangeItemPage);
router.post('/alterar', f.url, ChangingItem);
router.get('*', Error404);

/**
 * Renderiza a Home Page
 */

function HomeGet(req, res) {

	var Page = new f.Dado("Página Inicial");

	f.LerDataBase((dataBase) => {
		Page.pessoas = dataBase;
		res.render('index', Page.Render());
	});
}

/**
 * Dados Padrão 
 */

function Standard(req,res) {
	
	var Page = new f.Dado("Página Inicial");

	f.LerDataBasePadrao((dataBase) => {
		Page.pessoas = dataBase;
		res.render('index', Page.Render());
	});
}

/**
 * Adiciona uma pessoa na base de dados
 */

function CadastrarCliente(req, res) {

	var Page = new f.Dado("Cadastrado com Sucesso!");

	f.LerDataBase((dataBase) => {

		Page.pessoas = dataBase;

		Page.pessoas.push({
			nome: req.body.nome,
			area: req.body.area,
			hobbies: req.body.hobbies
		});
	
		f.fs.writeFile(Page.DATA_PATH, JSON.stringify(Page.pessoas), () => {});
	
		res.render('index', Page.Render());
	});
}

/**
 * Checa se o nome existe na base de dados
 */

function ProcurarCliente(req, res) {

	var Page = new f.Dado("Buscando em Arquivos", "Pessoas Encontradas");
	
	f.LerDataBase((dataBase) => {

		Page.pessoas = dataBase;

		if (req.url.indexOf("/search?buscar_nome=") != -1) {
			var reqName = req.query.buscar_nome.toLowerCase();
			if (reqName != "") {
				for (var i = 0; i < Page.pessoas.length; i++) {
					let nome = Page.pessoas[i].nome.toLowerCase();
					if (nome.indexOf(reqName) != -1) {
						Page.aprovados.push(i);
						Page.matches.push(Page.pessoas[i]);
					}
				}
				Page.pessoas = Page.matches;
				if (Page.pessoas.length == 0) {
					console.log("Nenhuma pessoa encontrada");
				}
			}
		}
		res.render('search', Page.Render());
	});
};

/**
 * Deleta uma pessoa da base de dados
 */

function DelItem(req,res) {

	var Page = new f.Dado();

	f.LerDataBase((dataBase) => {
		
		Page.pessoas = dataBase;
		var reqItem = req.params.item;

		// Removendo o número do request 
		var reqSemClass = reqItem.slice(0, (reqItem.length - 1));

		// Pegando o index dele(s) (Caso houver vários nomes) no banco de dados
		var indexArray = [];
		for (i = 0; i<Page.pessoas.length; i++){
	    	if (Page.pessoas[i].nome.replace(/ /g, "") === reqSemClass.replace(/ /g, "")) {
	        	indexArray.push(i);
			}
		}

		// Filtrando caso houver nomes iguais
		for (i = 0; i<indexArray.length; i++){
			if(indexArray[i] == reqItem.slice((reqItem.length - 1), reqItem.length)) {
				indexArray = null;
				indexArray = reqItem.slice((reqItem.length - 1), reqItem.length).toString();
				break;
			}
		}

		// Removendo o intem do array
		var ArraySemOIntem = [];
		for (i = 0; i<Page.pessoas.length; i++){
			if(reqSemClass + indexArray !== Page.pessoas[i].nome + i) {
				ArraySemOIntem.push(Page.pessoas[i]);
			}
		}

		Page.pessoas = ArraySemOIntem;
		f.fs.writeFile(Page.DATA_PATH, JSON.stringify(Page.pessoas), () => {});
		res.render('index', Page.Render());
	});
}

/**
 * Da possíbilidade ao usuário de mudar um intem na base de dados
 */

function ChangeItemPage(req,res) {

	var Page = new f.Dado("Alterar Pessoa", "Pessoas Cadastradas", "Alterar Pessoa");

	f.LerDataBase((dataBase) => {
		
		Page.pessoas = dataBase;
		
		var reqItem = req.params.item;

		for (i=0; i<Page.pessoas.length; i++) {
			if (Page.pessoas[i].nome + i == reqItem) {
				Page.alterar.nome = Page.pessoas[i].nome;
				Page.alterar.area = Page.pessoas[i].area;
				Page.alterar.hobbies = Page.pessoas[i].hobbies;
				Page.alterar.id = i;
				break;
			}
		}

		res.render('alterar', Page.Render());
	});
}

/**
 * Recebe as alterações e as salva no banco de dados
 */

function ChangingItem(req,res) {

	var Page = new f.Dado();

	f.LerDataBase((dataBase) => {

		Page.pessoas = dataBase;

		// Procurando o request no DataBase e o substituindo
		for (p = 0; p<Page.pessoas.length; p++) {
			if ((req.body.nome + req.body.id) === (Page.pessoas[p].nome + p)) {
				Page.pessoas[p].nome = req.body.nome; 
				Page.pessoas[p].area = req.body.area; 
				Page.pessoas[p].hobbies = req.body.hobbies;
				break;
			}
		}

		f.fs.writeFile(Page.DATA_PATH, JSON.stringify(Page.pessoas), () => {
			res.render('index',	Page.Render());
		});
	});
}

/**
 * Caso a página não foi encontrada ou não existe
 */

function Error404(req, res) {
	var Page = new f.Dado("Página não encontrada");
	res.render('error404', Page.Render());
}

module.exports = router;