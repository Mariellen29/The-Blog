/* #DOM (Document Object Model)

    * É um HTML convertido para um objeto Javascript;
    * API que representa e interage com o html
    * Estrutura de dados do tipo árvore, criada pelo browser
    * Propriedades e Métodos;


    # Para que?

    * Javascript isa a DOM para se conectar ao HTML
    * Manipular o HTM com o JavaScript
    * Você só programa para web porque existe a DOM.*/


// getElementById ()
/* ( Te da um retorno de element)*/

const element = document.getElementById('blog-title')
console.log(element);

// getElementByClassName
/* ( te da um retorno de HTML colection)*/

const eLEment = document.getElementsByClassName('.box2')
console.log(eLEment);

// getElementByTagName
/* ( te da um retorno de HTML colection)*/

const eLEMent = document.getElementsByTagName('h2')
console.log(eLEMent);

// querySelector()
/* ( Te da um retorno de element)
esse é um pouco mais lento que o ById*/

const ELemen = document.querySelector('p')
console.log(ELemen);

// querySelectotAll()
/* ( Te da um retorno de Node List)*/

const Eements = document.querySelectorAll('.page1')
console.log(Eements);

Eements.forEach(Ee => console.log(Ee))


/* com a DOM também é possivel manipular o conteúdo do hatml. Se eu quiser por exemplo trocar o texto da minha pagina eu utilizo:

const element = document.querySelector('p') (não necessáriamente o querySelector, pode ser outro)

element.textContent = "Aqui eu digito o texto que eu quero colocar na página"

isso fará com que todos os textos com a tag p no HTML seja modificado com o que eu coloquei entre aspas no elemento acima. 

Depois de modificar temos que imprimir no JS com:

console.log(element.textContent)

Caso eu não queiraa Modificar a tag p o HTML mas quero acrescentar algo a toda TAG P que nela contém então eu utilizo:

element.textContent += "Aqui eu digito o texto que eu quero colocar na página"
console.log(element.textContent)
*/

/* O Innertext tem a mesma função que o textContent, porém o Innertext não tem como somar o elemento como o Content, pois Innertext significa texto interno ou seja ele irá modificar o texto interno do seu HTML. 

const element = document.querySelector('p')
element.innerText = "Aqui eu digito o texto que eu quero modificar na página"

*/

/* O InnerHTML serve para acrescentar texto usando tags do HTML:

const element = document.querySelector('p')
element.innerHTML = "Aqui eu digito o texto que eu quero acrescentar na página <strong> usando tag do HTML </strong>"
*/

/* Também conseguimos manipular o texto contido dentro da tag input para isso usamos o elemento value:

console.log(element.value)
element.value = "O texto que eu quero modificar na caixa do input"
*/

/* Também podemos manipular atributos do HTML*/

const header = document.querySelector('header')
header.setAttribute('id', 'header')

//dessa maneira na linha acima eu adicionei o atributo id no header

const headerID = document.querySelector('#header')

/* se o header tivesse um atributo class por exemplo poderiamo ainda incluir:

console.log(headerID.getAtribute('class'))

que o JS iria imprimi no cosul o atributo no html */


//também é possivel remover os atributos adicionado

header.removeAttribute('id')

/* Também o possivel adicionar classes n atributo class com:

header.setAtribute('class', 'box header') */

/* Além das propriedades do HTML a DOM também permite modificar os atibutos do CSS por exemplo;

const element = document.querySelector('p')
element.style.backgroundColor = "red"
console.log(element.style.backgroundColor)

dessa forma todas as caixa com a tag p mudaria o fundo da tela com a cor vermelho*/

/* outra forma de alterar o estilo é via HTML, Se no seu HTML tiver uma tag <style></style>
por Exemplo:

HTML:

<body> 
    <style>
    .active {
    color: red 
    }

    .green {
    background-color: green
    }
    </style>
</body>

JS:

const element = document.querySelector('body')
element.classList.add('active', 'green')
console.log(element.classList)

se quisermos remover um desses estilos podemos usar:

element.classList.remove('active')
desse jeito a cor vermelha é removida da pagina

também temos o:

element.classList.toggle('active') 

esse ultimo servira pra devolver a cor vermelha a pagina caso ela tenha sido removida, ou remover da pagina caso ela tenha sido adicionada*/

/* para navegar pelos elementos pais podemos usar tanto o parentNode como o parent Element*/

const body = document.querySelector('body')

console.log(body.parentElement)
// ou console.log(body.parentNode)

/* Para navegar pelos elementos filhos temos os:
ChildNode e children*/

const el = document.querySelector('body')

console.log(el.childNodes)
/* note que no sonsul ele mostra text entre os elementos porque ele considera o espaços vazios entre a tags*/

console.log(el.children)
/*já no chidren ele não mostra os espaços vazio entre as tags, mostra apenas as tags filho*/

// firstChild e firstElementChild

console.log(el.firstChild)
// O firstchild também considera elementos vazios entre as tgs filho por isso o primeiro filho a encontra uma #text

console.log(el.firstElementChild)
// Esse já desconsidera os espaços vazios, pegando já a primeira tag filho do body

//lastChild e lastElementCild

console.log(el.lastChild)
console.log(el.lastElementChild)
//ambos irão mostrar o ultimo elemento filho

/*navegando entre os irmãos:

nextSiling e nextElementSibling*/

const elm = document.querySelector('body h1')
console.log(elm.nextElementSibling)//pega o próximo elemento ignorado espaço vazio
console.log(elm.nextSibling)//considera espaço vazio

//previouSibling e PreviousElementSibling
const eln = document.querySelector('body p')
console.log(eln.previousSibling)//considera espaço vazio
console.log(eln.previousElementSibling)// Considera o proximo elemento


/* Também é possivel criar e adicionar elemento no JS.

Para criar usamos o creatElement:

const div = document.creatElement('div');
div.innerText = "olá Devs"

Assim foi criado elemento, mas ainda não aparece na pagina. Para aparecer nós podemos usar dois outros elementos:

    * Append (que aparecerá depois da tag)
    * Prepend (que aparecerá Antes da tag)


const body = document.querySelector('body')
body.prepend(div) ou
body.append(div)*/

// Adicionando elementos

/* const div = document.creatElement('div');
div.innerText = "olá Devs!"

    * insertbefore
Esse elemento serve para por uma tag nova (criada aqui no JS) entre duas tag já existente no HTML. 

const body = document.querySelector('body')
body.insertBefore(div, script)

Dessa maneira a nova div criada será inserida antes da tag script dentro do body. 
Não existe um insertAfter para inserir essa tag depois do script, para isso ser posivel você deve utilizar os seguintes elementos:

const body = document.querySelector('body')
body.insertBefore(div, header.nextElementSibling)*/


//Eventos:

/* Adicionando evento via HTML:

HTML:

<h1 ONclick="print">The Blog</h1>

JS:

function print(){
    console.log('print')
}

Assim quando clicar no h1 será impresso o print no JS.
esse ON tem varias opções onclick é uma delas*/

//Eventos de teclado

const input = document.querySelector('input')

input.onkeyup = function () {
    console.log('rodei')
}

/* o onkeyup utiliza a tecla de seta pra cima e o onkeydown a seta de baixo*/

//Eventos via JS

const h2 = document.querySelector('h2')

h2.addEventListener('mouseup', print)
function print() {
    console.log('print')
}

// outra maneira de executar eventos pelo JS é:

h2.onclick = print
function print() {
    console.log('print')
}
h2.onclick = function () {
    console.log('outro momento')
}

/*O problema dessa maneira é que o JS só vai imprimir o ultimo comando que vc der e desconsiderar os anteriores */

//argumento event

input.onkeydown = function (event) {
    console.log(event)
}
