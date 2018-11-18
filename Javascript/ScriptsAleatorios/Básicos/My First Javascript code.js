function parte1() {
	alert("Sério que você escolheu " + a1 + "?");
	alert("Porque não " + (a1 - Math.floor(Math.random() * 51)) + "?");
	if (a1 < 100) {
		alert("Você tem preconceito com números maiores que 100?");
		alert("Vou diminuir seu número de 10 em 10 só por isso :(");
		a1 = parseInt(a1);
		while (a1 < 100) {
			a1 = a1 + 10
			alert(a1);
		}
		if (a1 > 100) {
			alert("Ainda não gostei desse número!!");					
			while (a1 > 100) {		
				a1 = a1 - 1
				alert(a1);
			}
			lindo();
		}	
		else if (a1 < 100) {
			alert("wtf");
		}	
		else {
			lindo();
		}
	}
	else if (a1 > 100) {
		alert("Você tem preconceito com números menores que 100?");
		alert("Vou diminuir seu número de 10 em 10 só por isso :(");
		a1 = parseInt(a1);
		while (a1 > 100) {
			a1 = a1 - 10
			alert(a1);
		}
		if (a1 < 100) {
			alert("Ainda não gostei desse número!!");					
			while (a1 < 100) {		
				a1 = a1 + 1
				alert(a1);
			}
			lindo();
		}	
		else if (a1 > 100) {
			alert("wtf");
		}	
		else {
			lindo();
		}
	}
	else {
		alert("Pra falar a verdade gostei do 100!");
		alert("Vou deixar assim mesmo");
		alert("Estranho você ter escolhido 100 dessa vez Hmmmmmmmmm");
	}
}
function die() {
	alert("Eu te avisei");
	for (i=0; i<15; i++) {
		alert("DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE! DIE!");
		}
}
function menor200() {
	a1 = prompt("Escolhe outro menor que 200!");
	if (a1 > 200) {
		alert("Não me faça ficar bravo denovo...");
		a1 = prompt("escolhe outro... MENOR QUE 200!!!");
		if (a1 > 200){
			die();
		}
		else if ((a1 > 0) && (a1 <= 200)) {
			achoBom();
		}
		else {
			numNegativo();
		}
	}
	else if ((a1 > 0) && (a1 <= 200)) {
		achoBom();
	}
	else {
		numNegativo()
	}
} 
function lindo() {
	alert("Exatamente o que eu queria!");
	enfrentar();
}
function achoBom() {
	alert("Acho bom mesmo");
	a1 = parseInt(a1);
	parte1();
}
function numNegativo() {
	a1 = prompt("Número negativo não pode, escolhe outro");
		if (a1 < 0) {
			a1 = prompt("MAIOR #$%&*");
			if (a1 < 0) {
				die();
			}
			else if ((a1 <= 200) && (a1 > 0)) {
				achoBom();
			}
			else {
				menor200();
			}
		}
		else if ((a1 > 0) && (a1 <= 200)) {
			achoBom();
		}
		else {
			menor200();
		} 
}
function enfrentar() {
	alert("Agora sim >:)");
	alert("Vai querer me enfrentar é?");
}
alert("Olá visitante!");
a1 = prompt("Qual o seu número favorito?");
if (a1 != 0) {
	if (a1 < 0) {
		numNegativo();
	}
	else if (a1 > 200) {
		menor200();
	}
	else {
		parte1();
	}
}
else {
	alert("Qual o seu problema em escolher 0?");
	alert("Aliais quem é que escolhe 0 dentre muitos números?");
	alert("Tenho certeza que você é uma daquelas pessoas esquisitas...");
}
