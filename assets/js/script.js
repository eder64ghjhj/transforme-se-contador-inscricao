


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



let idade = 20;

if(isNaN(idade)) {
    console.log("Nao é um numero valido");
} else if(idade < 0 || idade > 100) {
    console.log("Idade nao existe");
} else if( idade < 8) {
    console.log("Menor de 8 anos,nao pode se inscrever");
} else if (idade <= 18) {
    console.log("Pode se inscrever (Menor de idade")
} else if (idade <=30) {
    console.log("Maior de idade ,pode se inscrever")
} else{
    console.log("Nao pode se inscrever,maior de 30")
}
