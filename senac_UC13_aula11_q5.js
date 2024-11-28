
let numeroCorreto = Math.floor(Math.random() * 10) + 1;

let tentativa = "";

while (tentativa.toLowerCase() !== "sair") {
  
    tentativa = prompt("Adivinhe um número entre 1 e 10 (ou digite 'sair' para encerrar):");

    if (tentativa.toLowerCase() === "sair") {
        alert("Você saiu do jogo. Até logo!");
        break;  
    }


    tentativa = Number(tentativa);

    
    if (isNaN(tentativa)) {
        alert("Por favor, insira um número válido.");
    } else if (tentativa === numeroCorreto) {
        alert("Parabéns! Você acertou o número!");
        break;
    }
}
