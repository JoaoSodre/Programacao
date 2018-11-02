<!-- text-ident: -->

# Css

[Todos Propeties do Css](https://www.w3schools.com/cssref/default.asp) <br><br>

* [Syntaxes e Selectors](https://github.com/JoaoSodre/Programacao/blob/master/Front-End/Css.md#syntaxes-e-selectors)

## Syntaxes e Selectors

Selecionar **todas** as tags `<p>`.

```css
p {
    color: red;
    text-align: center;
}

<p> Olá! </p>
```

<br>
<br>

Seleciona a tag que possui esse id.

> Nota: O id deve ser ÚNICO e não pode começar com um número.

```css
#para1 {
    color: orange;
}

<p id="para1"> Sou o único laranja </p>
```

<br>
<br>

Seleciona todas as tags com o nome dessa **classe** nos atributos.

> Nota: O nome da classe não pode começar com um número.

```css
.centro {
    color:blue;
}

<p class="centro"> Somos da cor azul! </p>
<h1 class="centro"> Somos da cor azul! </h1>
```

<br>
<br>

Seleciona todas as tags `<p>` que possuem `centro` como valor de classe.

```css
p.centro {
    text-align: center;
    color: red;
}

<p class="centro"> Fui afetado! </p>

<h1 class="centro"> Não fui afetado! </h1>
<p> Também não fui afetado! </p>
```

<br>
<br>

As tags podem receber várias classes ao mesmo tempo, basta dar um espaço entre o nome delas.

```css
.pequeno {
    font-size: 50%;
}

.azul {
    color: blue;
}

<p class="pequeno azul"> Sou pequeno e azul</p>
<p class="azul"> Sou apenas azul <p>
```

<br>
<br>

Se dois blocos de **classes** possuirem os mesmos atributos para a **mesma tag**, o bloco que estiver mais ao final do algoritmo irá ser quem vai aparecer.

```css
p.large3 {
    font-size: 400%;
}

p.large1 {
    font-size: 50000%;
}

p.large2 {
    font-size: 100%;
}

<p class="large1 large2 large3"> Vou continuar do tamanho normal. </p> 
```

<br>
<br>

Syntax para caso exista 2 ou mais tags com os mesmos atributos, usada para economizar linhas de código.

```css
h1, h2, {
    text-align: center;
    color: yellow;
}

h1 {
    background-color: red;
}

<h1> Sou amarelo com o fundo vermelho </h1>
<h2> Sou apenas amarelo </h2>
```
