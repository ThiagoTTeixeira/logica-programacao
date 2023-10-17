
function urnaEletronica(){
    var candidato1 = 0;
    var nomecand1 = "";
    var candidato2 = 0;
    var nomecand2 = "";
    var candidato3 = 0;
    var nomecand3 = "";
    var votoBranco = 0;
    var votoNulo = 0;
    var porcentagem = 0;
    var senha = prompt("Qual a senha para encerramento da votação?")

    nomecand1 = prompt("Digite o nome do primeiro candidato")
    nomecand2 = prompt("Digite o nome do segundo candidato")
    nomecand3 = prompt("Digite o nome do terceiro candidato")

    for(var voto, r;senhac != senha;){
        voto = parseInt(prompt("Digite: "+ "\n"+
        "1 para votar em "+ nomecand1+ "\n"+
        "2 para votar em "+ nomecand2+ "\n"+
        "3 para votar em "+ nomecand3+ "\n"+
        "5 para Votar Branco"+ "\n"+
        "8 para Votar nulo"+ "\n"+
        "0 para encerrar votação"));

    
        if (voto == 1){
            console.log("Voto computado para ", nomecand1, ".")
            candidato1++;
        } else if (voto == 2){
            console.log("Voto computado para ", nomecand2, ".")
            candidato2++;
        } else if (voto == 3){
            console.log("Voto computado para ", nomecand3, ".")
            candidato3++;
        } else if (voto == 5){
            console.log("Você computado para Voto em Branco.")
            votoBranco++;
        } else if (voto == 8){
            console.log("Você computado para Voto Nulo.")
            votoNulo++;
        } else if(voto == 0){
            for (;r != "S" || r != "N";){
                r = prompt("Deseja encerrar a votação? Se sim, digite S se não, digite N");
                if (r == "S"){
                    for(var senhac; senhac != senha;){
                        senhac = prompt("Digite a senha para encerrar a votação?")
                        if (senhac == senha){ 
                            alert("Votação encerrada")
                        }
                        else{
                            alert("Senha incorreta, digite novamente")
                        }
                    }
                    
                }
                else{
                    alert("Votação irá continuar normalmente")
                }
            }
        } else{
            alert("Numero invalido")
        }

    }
    porcentagem = (candidato1 + candidato2 + candidato3 + votoBranco + votoNulo)/100
    if (candidato1 > candidato2 && candidato1 > candidato3){
        console.log("\n")
        console.log("Ganhador foi ", nomecand1, " com ", ((candidato1+votoBranco)/porcentagem), " de votos")
        console.log(nomecand2, " com ", (candidato2/porcentagem), " de votos")
        console.log(nomecand3, " com ", (candidato3/porcentagem), " de votos")
        console.log("Votos em Branco ", (votoBranco/porcentagem), " de votos")
        console.log("Votos nulo", (votoNulo/porcentagem), " de votos")
    } else  if (candidato2 > candidato1 && candidato2 > candidato3){
        console.log("\n")
        console.log("Ganhador foi ", nomecand2, " com ", ((candidato2+votoBranco)/porcentagem), " de votos")
        console.log(nomecand1, " com ", (candidato1/porcentagem), " de votos")
        console.log(nomecand3, " com ", (candidato3/porcentagem), " de votos")
        console.log("Votos em Branco ", (votoBranco/porcentagem), " de votos")
        console.log("Votos nulo", (votoNulo/porcentagem), " de votos")
    } else  if (candidato3 > candidato2 && candidato3 > candidato1){
        console.log("\n")
        console.log("Ganhador foi ", nomecand3, " com ", ((candidato3+votoBranco)/porcentagem), " de votos")
        console.log(nomecand1, " com ", (candidato1/porcentagem), " de votos")
        console.log(nomecand2, " com ", (candidato2/porcentagem), " de votos")
        console.log("Votos em Branco ", (votoBranco/porcentagem), " de votos")
        console.log("Votos nulo", (votoNulo/porcentagem), " de votos")
    }    else {
        console.log("\n")
        console.log("Empate! ") 
        console.log(nomecand1, " com ", (candidato1/porcentagem), " de votos")
        console.log(nomecand2, " com ", (candidato2/porcentagem), " de votos")
        console.log(nomecand3, " com ", (candidato3/porcentagem), " de votos")
        console.log("Votos em Branco ", (votoBranco/porcentagem), " de votos")
        console.log("Votos nulo", (votoNulo/porcentagem), " de votos")
    }

}
