function mediaAluno() {
    

    // document.write("Olá, Mundo");
    // console.log("Imprimindo no console");
    // window.alert("Texto no alerta do navegador");

    // console.log("Inicio do Programa");

    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);

    var result = "";

    const media = (nota1 + nota2 + nota3) / 3;

    // console.log("A 1° nota é: " , nota1);
    // console.log("A 2° nota é: " , nota2);
    // console.log("A 3° nota é: " , nota3);



    if (media >= 7) {
        result = "APROVADO";
        document.getElementById('resultado2').innerHTML = 'A média do aluno é: ' + media + '<br>' + result;

    } else if (media >= 5) {
        result = "EXAME";
        document.getElementById('resultado2').innerHTML = 'A média do aluno é: ' + media + '<br>' + result;       
    } else{
        result = "REPROVADO";
        document.getElementById('resultado2').innerHTML = 'A média do aluno é: ' + media + '<br>' + result;
    }
    
}

