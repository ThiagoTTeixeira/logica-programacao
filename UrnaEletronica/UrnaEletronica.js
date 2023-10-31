function urnaEletronica(){
    let candidatos = [
        [1, "Kauan"],
        [2, "Jasson"],
        [3, "Juliana"],
        [4, "Thiago"],
        [5, "Hian"]
    ]
    let votos=[]
    let voto
    votoNulo = 0
    votoBranco = 0
    let senha = 123
    let configCand = confirm("Você gostaria de configurar os candidatos?")
    if (configCand){
        config()
    }
    configCand = !confirm("Você gostaria de configurar a senha?")
    if(configCand == false){
        config()
    }
    for (i = 0; i < 5; i++){
        if (votos.length< candidatos[i][0]){
            votos.push(0)
        }
    }
    for(let s = true, v = 0; s == true; v++){
        voto = parseInt(prompt("Digite sua opção"))
        let dataInicio = new Date();
        if (voto == senha){
            s = !confirm("Você gostaria de encerrar a votação?")
            v--
            if(s == false){
                let dataFinal= new Date()
            }
        }else{
            for (let w = false, i = 0, confirmaVoto = false; w == false; i++){
                if(i > 4 && voto != candidatos[i][0] && voto != 69){
                    confirmaVoto = confirm("Você confirma o voto nulo?")
                    if(confirmavoto){
                        votoNulo++
                    }else{
                        v--
                    }
                }else if (voto == 69){
                    confirmaVoto = confirm("Você confirma o voto branco?")
                    if(confirmaVoto){
                        votoBranco++
                    }else{
                        v--
                    }

                }else{
                    for (;candidatos[voto][1] != "";){
                        for(p = false, i=0; p != true; i++){
                            if(voto == candidatos[i][0]){
                                votos[i]++
                                
                            }
                        }
                        confirmaVoto = confirm("Você confirma o voto no candidato "+ candidatos[i][1]+"?")
                        if (confirmaVoto){
                            votos[voto]++
                        }else {
                            v--
                        }
                }
                w = true
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
    console.log("TOTAL DE VOTOS: ", v)
    for(var i = 0; i <= 99;i++){
        var result = votos[i]
        console.log(candidatos[i], " terminou com ", (result / porcentagem).toFixed(2), "% de votos")
    }

    function config(){
        if (configCand){
            for (i = 0; i < 5; i++){
                candidatos[i][0] = prompt("Digite o n° do "+ (i + 1) +" candidato")
                for(;candidatos[i][0] == 69 | candidatos[i][0] > 99;){
                    candidatos[i][0] = prompt("´Número indisponivel, não podeser 69, e nem maior que 99. Digite outro")
                }
                candidatos[i][1] = prompt("Digite o nome do "+ (i + 1) +" candidato")
                
            }
            return candidatos
        }
        else{
            senha = prompt("Digite a nova senha")
            return senha
        }
        
    }
}


