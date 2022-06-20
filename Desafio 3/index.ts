let botaoAtualizar =<HTMLButtonElement> document.getElementById('atualizar-saldo');
let botaoLimpar = <HTMLButtonElement>document.getElementById('limpar-saldo');
let soma = <HTMLInputElement>document.getElementById('soma');
let campoSaldo = <HTMLElement>document.getElementById('campo-saldo');

if(campoSaldo)
    campoSaldo.innerHTML = '0'

function somarAoSaldo(soma: number) {
  
    let valor = campoSaldo.innerHTML
    console.log(typeof valor)
    let valor2 = Number(valor)
    valor2 += Number(soma)
    console.log(valor)
    campoSaldo.innerHTML = valor2.toString()
   }
   


function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});