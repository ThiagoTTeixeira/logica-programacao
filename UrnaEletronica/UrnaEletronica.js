
function urnaEletronica(){
    let candidato1 = 0;
    let nomecand1 = "";
    let candidato2 = 0;
    let nomecand2 = "";
    let candidato3 = 0;
    let nomecand3 = "";
    let votoBranco = 0;
    let votoNulo = 0;
    let porcentagem = 0; 
    let audioConf = document.getElementById("audioConf")
    let dataInicio = new Date();
    
    console.clear();

    for(let i = false; i != true;){
        nomecand1 = prompt("Digite o nome do primeiro candidato")
        nomecand2 = prompt("Digite o nome do segundo candidato")
        nomecand3 = prompt("Digite o nome do terceiro candidato")
        i = confirm("Você esta contente com os nomes dos candidatos?" + "\n" + nomecand1 + "\n" + nomecand2 + "\n" + nomecand3)
        
    }
    let senha = prompt("Qual a senha para encerramento da votação?")
    for(let voto, j, i = false; i != true;porcentagem++){
        voto = parseInt(prompt("Digite: "+ "\n"+
        "1 para votar em "+ nomecand1+ "\n"+
        "2 para votar em "+ nomecand2+ "\n"+
        "3 para votar em "+ nomecand3+ "\n"+
        "5 para Votar Branco"));

    
        if (voto == 1){
            j = confirm("Confirma o voto no " + nomecand1 + "?")
            if(j){
                console.log("Voto computado para ", nomecand1, ".")
                audioConf.play();
                candidato1++;
            }
            else{
                porcentagem--
            }
            
        } else if (voto == 2){
            j = confirm("Confirma o voto no " + nomecand2 + "?")
            if(j){
                console.log("Voto computado para ", nomecand2, ".")
                audioConf.play();
                candidato2++;
            }
            else{
                porcentagem--
            }
        } else if (voto == 3){
            j = confirm("Confirma o voto no " + nomecand3 + "?")
            if(j){
                console.log("Voto computado para ", nomecand3, ".")
                audioConf.play();
                candidato3++;
            }
            else{
                porcentagem--
            }
        } else if (voto == 5){
            j = confirm("Confirma o votar em branco?")
            if(j){
                console.log("Voto computado para voto em branco.")
                audioConf.play();
                votoBranco++;
            }
            else{
                porcentagem--
            }
        } else if(voto == senha){
            i = confirm("Você gostaria de encerrar a votação?")
            porcentagem--
        } else{
            vn = confirm("Deseja votar nulo?")
            if (vn){
                votoNulo++
                audioConf.play();
            }
            else{
                porcentagem--
            }
        }
         

    }
    let dataFinal = new Date();
    console.clear()
    console.log("\n")
    console.log("** BOLETIM DE URNA **")
    console.log("Inicio da voração: "+ dataInicio)
    console.log("Termino da voração: "+ dataFinal)
    console.log("\n")  
    console.log("TOTAL DE VOTOS: ", porcentagem)
    if (candidato1 > candidato2 && candidato1 > candidato3){
        console.log("Ganhador foi ", nomecand1, " com ", ((candidato1+votoBranco)/porcentagem*100).toFixed(2), "% de votos")
        console.log(nomecand2, " com ", (candidato2/porcentagem*100).toFixed(2), "% de votos")
        console.log(nomecand3, " com ", (candidato3/porcentagem*100).toFixed(2), "% de votos")
        console.log("Votos em Branco ", (votoBranco/porcentagem*100).toFixed(2), "% de votos")
        console.log("Votos nulo", (votoNulo/porcentagem*100).toFixed(2), "% de votos")
    } else  if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log("Ganhador foi ", nomecand2, " com ", ((candidato2+votoBranco)/porcentagem), "% de votos")
        console.log(nomecand1, " com ", (candidato1/porcentagem*100).toFixed(2), "% de votos")
        console.log(nomecand3, " com ", (candidato3/porcentagem*100).toFixed(2), "% de votos")
        console.log("Votos em Branco ", (votoBranco/porcentagem*100).toFixed(2), "% de votos")
        console.log("Votos nulo", (votoNulo/porcentagem*100).toFixed(2), "% de votos")
    } else  if (candidato3 > candidato2 && candidato3 > candidato1){
        console.log("Ganhador foi ", nomecand3, " com ", ((candidato3+votoBranco)/porcentagem*100).toFixed(2), "% de votos")
        console.log(nomecand1, " com ", (candidato1/porcentagem*100).toFixed(2), "% de votos")
        console.log(nomecand2, " com ", (candidato2/porcentagem*100).toFixed(2), "% de votos")
        console.log("Votos em Branco ", (votoBranco/porcentagem*100).toFixed(2), "% de votos")
        console.log("Votos nulo", (votoNulo/porcentagem*100).toFixed(2), "% de votos")
    }    else {
        console.log("Empate! ") 
        console.log(nomecand1, " com ", ((candidato1/porcentagem*100).toFixed(2)), "% de votos")
        console.log(nomecand2, " com ", (candidato2/porcentagem*100).toFixed(2), "% de votos")
        console.log(nomecand3, " com ", (candidato3/porcentagem*100).toFixed(2), "% de votos")
        console.log("Votos em Branco ", (votoBranco/porcentagem*100).toFixed(2), "% de votos")
        console.log("Votos nulo", (votoNulo/porcentagem*100).toFixed(2), "% de votos")
    }

}
