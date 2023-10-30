
function urnaEletronica(){
    var votoBranco = 0;
    var votoNulo = 0;
    var porcentagem = 0;
    var votos = [0]
    var candidatos = [""]
    var cotcand = 0
    let audioConf = document.getElementById("audioConf")
    let dataInicio = new Date();
    let senha = 123

    let w = confirm("Você gostaria de configurar os candidatos? Se deseja usar o predefinido clique em cancelar")
    if (w){
        cotcand = parseInt(prompt("Quantos candidatos serão? Somente números inteiros"))
        for(var i = 0; i <= cotcand;i++){
            votos.push(0)
        }
        for(var i = 1, c= 1;candidatos.length<cotcand+1; i++, c++){
            candidatos.push( prompt("Digite o nome do "+ c+ "° candidato"))
        }
    }else{
        
    }
    

    for(var voto,f = false, v=0;f == false; v++){
        voto = parseInt(prompt("Digite seu voto"));
        if (voto > (cotcand+2)){
            alert("Número Invalido")
            v--
        } else if (voto == senha){
            v--
            let y = confirm("Deseja encerrar a votação?")
            if(y){
                alert("Votação encerrada")
                f = true
            }
            
        }else if (voto == cotcand + 1){
            y = confirm("Deseja encerrar a votação?")
            if(y){
                alert("Voto computado para voto em branco")
                votoBranco++
                audioConf.play()
            }else{
                v--
            }
            
        }else if (voto == cotcand + 2){
            y = confirm("Deseja encerrar a votação?")
            if(y){
                alert("Voto computado para voto em branco")
                votoNulo++
                audioConf.play()
            }else{
                v--
            }
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
