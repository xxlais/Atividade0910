function exercicio1(){
    alert("Alerta de JavaScript");
}

function exercicio2(){
    alert("Alerta de JavaScript");

    var aluno= "João da Silva";
    var primeiraNota= 7;
    var segundaNota=8.5;

    alert(aluno + " primeira nota: " + primeiraNota + "  segunda nota: " + segundaNota);
    alert(aluno + " nota total: " + (primeiraNota*0.4+segundaNota*0.6));
}

function exercicio3(){
    var alunos = ["João da Silva", "José de Andrade", "Maria do Nascimento", "Zezé Legal"];
    var primeirasNota  = [7, 5, 9, 3];
    var segundasNota = [8.5, 7.8, 5.5, 4];

    for (var i=0; i<3; i++) { 
        alert(alunos[i] + " primeira nota: " + primeirasNota[i] + "  segunda nota: " + segundasNota[i]);
        alert(alunos[i] + " nota total: " + (primeirasNota[i]*0.4+segundasNota[i]*0.6));
        
    }    
}

exercicio3();
function exercicio4(nota1, nota2){
    var media = nota1*0.4+nota2*0.6;
    if (media < 3.0){
        return "Reprovado";
    }
    if (media == 4.0){
        return "Recuperação";
    }
    if (media == 5.0){
        return "Recuperação";
    }    
    if (media == 6.0){
        return "Aula de reforço";
    }
    if (media == 7.0){
        return "Aula de reforço";
    }
    if (media > 7.0){
        return "Aprovado";
    }
}