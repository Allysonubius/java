/* *
 * JS - Vinculando um documento JS
 * @author Allyson de OLiveira Brandao
 * */
/*Jokenpo*/

function jogar() {
    if (document.getElementById("pedra").checked == false &&
        document.getElementById("papel").checked == false &&
        document.getElementById("tesoura").checked == false) {
        alert("Selecione uma opção !")
    } else {
        //Lógica principal
        var sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case
            0:
                document.getElementById("pc").src = "img/pcpedra.png";
                breack;
            case
            1:
                document.getElementById("pc").src = "img/pcpapel.png";
            case
            2:
                document.getElementById("pc").src = "img/pctesoura.png";
        }
        //verificar o vencedor ou declarar empate
        if ((document.getElementById("pedra").checked == true && sorteio == 0) ||
            (document.getElementById("papel").checked == true && sorteio == 1) ||
            (document.getElementById("tesoura").checked == true && sorteio == 2)) {
            document.getElementById("placar").innerHTML = "Empate";
        } else if ((document.getElementById("pedra").checked == true && sorteio == 2) ||
            (document.getElementById("papel").checked == true && sorteio == 0) ||
            (document.getElementById("tesoura").checked == true && sorteio == 1)) {
            document.getElementById("placar").innerHTML = "Jogador Venceu";
        } else {
            document.getElementById("placar").innerHTML = "computador venceu";
        }
    }

    function newFunction() {
        return {};
    }
}

function resetar() {
    document.getElementById("pc").src = "img/pc.png";
    document.getElementById("placara").innerHTML = "";
}