
 

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