

const essaPalabraEUmPalindromo = function(){
    let palavra = prompt("Qual palavra ou frase você gostaria de saber se é um palíndromo?");
    let separandoAsLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida){
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }
}
essaPalabraEUmPalindromo();