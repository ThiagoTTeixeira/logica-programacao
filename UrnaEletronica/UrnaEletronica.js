
function urnaEletronica(){
    var voto;
    
    for(;voto != 0;){
        const voto = parseInt(document.getElementById('voto').value);
        var candidato1;
        var candidato2;
        var candidato3;
        var votoBranco;
        var votoNulo;

    
        if (voto == 1){
            window.alert("Você votou no candidato 1.")
            candidato1++;
        } else if (voto == 2){
            window.alert("Você votou no candidato 2.")
            candidato2++;
        } else if (voto == 3){
            window.alert("Você votou no candidato 3.")
            candidato3++;
        } else if (voto == 5){
            window.alert("Você votou em branco.")
            votoBranco++;
        } else if (voto == 8){
            window.alert("Você votou nulo.")
            votoNulo++;
        } else{
            window.alert("Numero invalido")
        }
    }

    

}
