function urnaEletronica(){
    let candidatos = [
        [1, "Kauan"],
        [2, "Jasson"],
        [3, "Juliana"],
        [4, "Thiago"],
        [5, "Hian"],
    ]
    let votos=[0]
    let voto
    let votoNulo = 0
    let votoBranco = 0
    let senha = 123
    let v = 0
    let dataFinal
    let numCand
    console.clear()
    for (i = 0; i < 99; i++){
            votos.push(0)
    }
    let configCand = confirm("Você gostaria de configurar os candidatos?")
    if (configCand){
        config()
    }
    configCand = !confirm("Você gostaria de configurar a senha?")
    if(configCand == false){
        config()
    }
    let dataInicio = new Date();
    for(let s = false; s == false; v++){
        voto = parseInt(prompt("Digite sua opção"))
        confirmaVoto = false
        if (voto == senha){
            s = confirm("Você gostaria de encerrar a votação?")
            v--
            if(s == true){
                dataFinal= new Date()
            }
        }else{
            for (let w = false, i = 0, confirmaVoto = false; w != true; i++){
                if(i > 2){
                    confirmaVoto = confirm("Você confirma o voto nulo?")
                    if(confirmaVoto){
                        votoNulo++
                    }else{
                        v--
                    }
                    w = true
                
                }else if (voto == 69){
                    confirmaVoto = confirm("Você confirma o voto branco?")
                    if(confirmaVoto){
                        votoBranco++
                    }else{
                        v--
                    }
                    w = true
                }else if(voto == candidatos[voto][0]){
                            confirmaVoto = confirm("Você confirma o voto no candidato "+ candidatos[voto][1]+"?")
                            if (confirmaVoto){
                                votos[voto]++
                            }else {
                                v--
                            }  
                    w = true 
                }else if(voto == candidatos[voto-1][0] && voto){
                    confirmaVoto = confirm("Você confirma o voto no candidato "+ candidatos[voto-1][1]+"?")
                    if (confirmaVoto){
                        votos[voto-1]++
                    }else {
                        v--
                    }  
                    w = true 
                }    
            }    
        }
    }

    let porcentagem = v/100
    console.clear()
    console.log("\n")
    console.log("** BOLETIM DE URNA **")
    console.log("Inicio da voração: "+ dataInicio)
    console.log("Termino da voração: "+ dataFinal)
    console.log("\n")  
    console.log("TOTAL DE VOTOS: "+ v)
    console.log("Total votos em branco "+ (votoBranco/porcentagem).toFixed(2)+"% de votos")
    console.log("Total votos nulo "+ (votoNulo/porcentagem).toFixed(2)+"% de votos")

    for(var i = 0; i <= 99;i++){
        if (candidatos[i][1] != ""){
            console.log(candidatos[i][1], " terminou com "+ (votos[i]/porcentagem).toFixed(2)+ "% de votos")
        }
    }
    
    function config(){
        for (i = 0; i < 99; i++){
            candidatos[i] = [];
            for(let j = 0; j < 2; j++){
                if (j>0){
                    candidatos[i][j] = ""
                }else{
                    candidatos[i][j] = 0
                }
            }
        }
        if (configCand){
            for (i = 0; i < 5; i++){
                numCand = prompt("Digite o n° do "+ (i + 1) +" candidato")
                candidatos[numCand][0] = numCand
                for(;candidatos[numCand][0] == 69 | candidatos[numCand][0] > 99;){
                    candidatos[numCand][0] = prompt("Número indisponivel, não podeser 69, e nem maior que 99. Digite outro")
                }
                candidatos[numCand][1] = prompt("Digite o nome do "+ (i + 1) +" candidato")
                
            }
            return candidatos
        }
        else{
            senha = prompt("Digite a nova senha")
            return senha
        }
        
    }
}    
