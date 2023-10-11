
function urnaEletronica(){
    var candidato1 = 0;
    var candidato2 = 0;
    var candidato3 = 0;
    var votoBranco = 0;
    var votoNulo = 0;
    var porcentagem = 0;

    for(var voto;voto != 0;){
        voto = parseInt(prompt("Digite a opção"));

    
        if (voto == 1){
            console.log("Voto computado para candidato 1.")
            candidato1++;
        } else if (voto == 2){
            console.log("Voto computado para candidato 2.")
            candidato2++;
        } else if (voto == 3){
            console.log("Voto computado para candidato 3.")
            candidato3++;
        } else if (voto == 5){
            console.log("Você computado para Voto em Branco.")
            votoBranco++;
        } else if (voto == 8){
            console.log("Você computado para Voto Nulo.")
            votoNulo++;
        } else if(voto == 0){
           alert("Votação encerrada")
        } else{
            alert("Numero invalido")
        }

    }
    porcentagem = (candidato1 + candidato2 + candidato3 + votoBranco + votoNulo)/100
    if (candidato1 > candidato2 && candidato1 > candidato3){
        console.log("\n")
        console.log("Ganhador foi Candidato 1 ", ((candidato1+votoBranco)/porcentagem))
        console.log("Candidato 2 ", (candidato2/porcentagem))
        console.log("Candidato 3 ", (candidato3/porcentagem))
        console.log("Votos em Branco ", (votoBranco/porcentagem))
        console.log("Votos nulo", (votoNulo/porcentagem))
    } else  if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log("\n")
        console.log("Ganhador foi Candidato 2 ", ((candidato2+votoBranco)/porcentagem))
        console.log("Candidato 1 ", (candidato1/porcentagem))
        console.log("Candidato 3 ", (candidato3/porcentagem))
        console.log("Votos em Branco ", (votoBranco/porcentagem))
        console.log("Votos nulo", (votoNulo/porcentagem))
    } else  if (candidato3 > candidato2 && candidato3 > candidato1){
        console.log("\n")
        console.log("Ganhador foi Candidato 3 ", ((candidato3+votoBranco)/porcentagem))
        console.log("Candidato 1 ", (candidato1/porcentagem))
        console.log("Candidato 2 ", (candidato2/porcentagem))
        console.log("Votos em Branco ", (votoBranco/porcentagem))
        console.log("Votos nulo", (votoNulo/porcentagem))
    }    else {
        console.log("\n")
        console.log("Empate! ") 
        console.log("Cndidato 1 ", (candidato1/porcentagem))
        console.log("Candidato 2 ", (candidato2/porcentagem))
        console.log("Candidato 3 ", (candidato3/porcentagem))
        console.log("Votos em Branco ", (votoBranco/porcentagem))
        console.log("Votos nulo", (votoNulo/porcentagem))
    }

}
