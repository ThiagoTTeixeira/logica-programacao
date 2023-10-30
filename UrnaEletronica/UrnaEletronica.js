
function urnaEletronica(){
    var votoBranco = 0;
    var votoNulo = 0;
    var porcentagem = 0;
    var votos = [0]
    var candidatos = [""]
    var cotcand = 0
    let audioConf = document.getElementById("audioConf")
    let dataInicio = new Date();
    cotcand = parseInt(prompt("Quantos candidatos serão? Somente números inteiros"))
    for(var i = 0; i <= cotcand;i++){
        votos.push(0)
    }
    for(var i = 1, c= 1;candidatos.length<cotcand+1; i++, c++){
        candidatos.push( prompt("Digite o nome do "+ c+ "° candidato"))
    }

    for(var voto, v=0;voto != 0; v++){
        voto = parseInt(prompt("Digite seu voto"));
        if (voto > (cotcand+2)){
            alert("Número Invalido")
            v--
        } else if (voto == 0){
            alert("Votação encerrada")
            v--
        }else if (voto == cotcand + 1){
            votoBranco++
            audioConf.play()
        }else if (voto == cotcand + 2){
            votoNulo++
            audioConf.play()
        }else {
            votos[voto]++
            audioConf.play()
        }

    }
    let dataFinal = new Date();
    console.clear()
    console.log("\n")
    console.log("** BOLETIM DE URNA **")
    console.log("Inicio da voração: "+ dataInicio)
    console.log("Termino da voração: "+ dataFinal)
    console.log("\n")  
    console.log("TOTAL DE VOTOS: ", v)
    porcentagem = (v/100)
    for(var i = 1; i < candidatos.length;i++){
        var result = votos[i]
        console.log(candidatos[i], " terminou com ", (result / porcentagem).toFixed(2), "% de votos")
    }
    console.log("Votos em Branco ", (votoBranco/porcentagem).toFixed(2), "% de votos")
    console.log("Votos nulo ", (votoNulo/porcentagem).toFixed(2), "% de votos")
    
 }
