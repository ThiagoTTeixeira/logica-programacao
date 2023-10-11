
function urnaEletronica(){
    // var candidato1 = 0;
    // var candidato2 = 0;
    // var candidato3 = 0;
    var votoBranco = 0;
    var votoNulo = 0;
    var porcentagem = 0;
    var votos = []
    var candidatos = [""]
    var cotcand = 0
    cotcand = parseInt(prompt("Quantos candidatos serão? Somente números inteiros"))
    for(var i = 1, c= 1;candidatos.length<cotcand+1; i++, c++){
        candidatos[i]= prompt("Digite o nome do "+ c+ "° candidato")
    }

    for(var voto, v=0;voto != 0; v++){
        voto = parseInt(prompt("Digite seu voto"));
        if (voto > (cotcand+2)){
            alert("Número Invalido")
            v--
        } else if (voto == 0){
            alert("Votação encerrada")
            v--
        }else if (votos == cotcand + 1){
            votoBranco++
        }else if (votos == cotcand + 2){
            votoNulo++
        }else {
            votos[votos.length]++
        }

    }

    porcentagem = (v/100)
    for(var i = 1; i < candidatos.length;i++){
        var result = votos[i]
        console.log(candidatos[i]+ " terminou com "+ (result / porcentagem)+ "% de votos")
    }
    console.log("Votos em Branco ", (votoBranco/porcentagem), "% de votos")
    console.log("Votos nulo ", (votoNulo/porcentagem), "% de votos")
    
    
//     if (candidato1 > candidato2 && candidato1 > candidato3){
//         console.log("\n")
//         console.log("Ganhador foi Candidato 1 ", ((candidato1+votoBranco)/porcentagem))
//         console.log("Candidato 2 ", (candidato2/porcentagem))
//         console.log("Candidato 3 ", (candidato3/porcentagem))
//         console.log("Votos em Branco ", (votoBranco/porcentagem))
//         console.log("Votos nulo", (votoNulo/porcentagem))
//     } else  if (candidato2 > candidato1 && candidato2 > candidato3){
//         console.log("\n")
//         console.log("Ganhador foi Candidato 2 ", ((candidato2+votoBranco)/porcentagem))
//         console.log("Candidato 1 ", (candidato1/porcentagem))
//         console.log("Candidato 3 ", (candidato3/porcentagem))
//         console.log("Votos em Branco ", (votoBranco/porcentagem))
//         console.log("Votos nulo", (votoNulo/porcentagem))
//     } else  if (candidato3 > candidato2 && candidato3 > candidato1){
//         console.log("\n")
//         console.log("Ganhador foi Candidato 3 ", ((candidato3+votoBranco)/porcentagem))
//         console.log("Candidato 1 ", (candidato1/porcentagem))
//         console.log("Candidato 2 ", (candidato2/porcentagem))
//         console.log("Votos em Branco ", (votoBranco/porcentagem))
//         console.log("Votos nulo", (votoNulo/porcentagem))
//     }    else {
//         console.log("\n")
//         console.log("Empate! ") 
//         console.log("Cndidato 1 ", (candidato1/porcentagem))
//         console.log("Candidato 2 ", (candidato2/porcentagem))
//         console.log("Candidato 3 ", (candidato3/porcentagem))
//         console.log("Votos em Branco ", (votoBranco/porcentagem))
//         console.log("Votos nulo", (votoNulo/porcentagem))
//     }

 }
