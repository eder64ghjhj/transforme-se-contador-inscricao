/* 
let contador = 0;


const botao = document.getElementById('meuBotao');
const textoContador = document.getElementById('contagem');


botao.addEventListener('click', () => {
  
    if (contador < 10) {
        contador++; 
        textoContador.textContent = `${contador} inscritos`;
    }
});*/
 

let vagas = 10;
let inscritos = 0;


const contador = document.getElementById('inscritos');
const botao = document.getElementById('meuBotao');

botao.addEventListener('click',function () {
    if (inscritos < vagas) {
        inscritos++;
        contador.textContent = `${inscritos} inscritos`;
    }
});