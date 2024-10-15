const essaPalabraEUmPalindromo = function(){
    let palavra = document.getElementById("texto_Teste").value;
    console.log(palavra);
    let separandoAsLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    let escreveResposta = document.querySelector("p");
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida){
        escreveResposta.innerText = "A palavra " + palavra + " é um palíndromo!";
    } else {
        escreveResposta.innerText = "A palavra " + palavra + " não é um palíndromo!";
    }
}
