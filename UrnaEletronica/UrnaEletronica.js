async function audioConfirmacao() {
    const audio = new Audio('./audio/confirmacao.mp3');
    await audio.play();
}

async function verificarIntegridadeUrna() {
    let hashUrnaAtual;
    let hashVerificado;

    await fetch('urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(conteudo => hashUrnaAtual = conteudo);
    
    await fetch('hashVerificado')
        .then(conteudo => conteudo.text())
        .then(conteudo => hashVerificado = conteudo);
        
    return {
        status: hashUrnaAtual === hashVerificado,
        hashUrnaAtual: hashUrnaAtual,
        hashVerificado: hashVerificado
    };

}
async function urnaEletronica(){
    let candidatos = [
        [1, "Kauan"],
        [2, "Jasson"],
        [3, "Juliana"],
        [4, "Thiago"],
        [5, "Hian"]
    ]
    let votos=[]
    let voto
    let dataFinal
    let dataInicio
    let votoNulo = 0
    let votoBranco = 0
    let senha = 123
    let v = 0
    let porcentagem
    configCand = confirm("Você gostaria de configurar a senha?")
    if(configCand){
        config()
    }
    for (i = 0; i < 5; i++){
            votos.push(0)
    }
    dataInicio = new Date();
    for(let s = false; s == false; v++){
        voto = parseInt(prompt("Digite sua opção"))
        if (voto == senha){
            s = confirm("Você gostaria de encerrar a votação?")
            v--
            if(s){
                dataFinal= new Date()
            }
        }else{
            for (let w = false, i = 0, confirmaVoto = false; w == false; i++){
                if(i > 4 && voto != 69){
                    confirmaVoto = confirm("Você confirma o voto nulo?")
                    if(confirmaVoto){
                        votoNulo++
                        await audioConfirmacao();
                    }else{
                        v--
                    }
                    w=true
                }else if (voto == 69){
                    confirmaVoto = confirm("Você confirma o voto branco?")
                    if(confirmaVoto){
                        votoBranco++
                        await audioConfirmacao();
                    }else{
                        v--
                    }
                    w = true
                }else{
                    if(voto == candidatos[i][0]){
                        confirmaVoto = confirm("Você confirma o voto no candidato "+ candidatos[i][1]+"?")
                        if (confirmaVoto){
                            votos[i]++
                            await audioConfirmacao();
                        }else {
                            v--
                        }
                        w=true
                    }
                }
            }
        }
    }
    porcentagem = v/100
    if(v>0){
        console.clear()
        console.log("\n")
        console.log("** BOLETIM DE URNA **")
        console.log("Inicio da voração: "+ dataInicio)
        console.log("Termino da voração: "+ dataFinal)
        console.log("\n")  
        console.log("TOTAL DE VOTOS: ", v)
        for(i = 0; i < 5;i++){
            console.log(candidatos[i][1]+ " terminou com "+ (votos[i]/porcentagem).toFixed(2)+ "% de votos")
        }
        console.log("Total votos brancos "+ (votoBranco/porcentagem).toFixed(2)+ "% de votos")
        console.log("Total votos nulos "+ (votoNulo/porcentagem).toFixed(2)+ "% de votos")

    }else{
        console.log("Não houve votação nesta urna")
    }

    verificarIntegridadeUrna().then(verificacao => {
        if (verificacao.status) {
            console.log('Hashes verificados, urna íntegra.');
        } else {
            console.log('URNA ADULTERADA!');
            console.log(`Hash da urna: ${verificacao.hashUrnaAtual}`);
            console.log(`Hash esperado: ${verificacao.hashVerificado}`);
        }
        console.log('Fim do programa');
    });
}


async function config(){
    senha = prompt("Digite a nova senha")
    return senha
}



