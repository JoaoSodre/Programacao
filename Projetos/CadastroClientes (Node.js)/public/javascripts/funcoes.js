function ConfirmarDados() {
	if(confirm("Deseja desfazer as alterações feitas?")) {
		window.location.href = "/standard"
	}
}

function MudarPagina() {
	if (window.location.href.indexOf("standard") !== -1) {
		window.location.href = "/#";
	}
	if (window.location.href.indexOf("excluir") !== -1) {	
		window.location.href = "/#";
	}
	if (window.location.href.indexOf("alterar") !== -1) {	
		window.location.href = "/#";
	}
}

function ConfirmarExclusao(id) {
	if(confirm("Deseja realmente excluir?")) 
		window.location.href = "/excluir/" + id;
}

/* Agora as funções apenas precisam RETORNAR 
'true' para funcionar o POST ou GET */

function CadastrarPessoa() {
	
	// Pegando dados do usuário
	var nome = $("#nome").val();
	var area = $("#area").val(); 
	var hobbies = $("#hobbies").val();

	// Irá enviar todos os '.val()' que possuirem o atributo 'name'
	return true;
}