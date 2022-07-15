/* CRIAÇÃO DE VARIAVEIS */

// Event listener
cataTecla = addEventListener("keydown", sorteio);
otoque = addEventListener("touchend", sorteio);


// Variaveis de controle
limit = 10;
jogadas = 16;
regen_on = false;

//informações
document.getElementById("jogadas").value = 16;
document.getElementById("fichas").value = 10;

// Variaveis para o jogo
quadr = [];
premios = [
        [nome = "Roseira arco-íris", qtd = 0],
        [nome = "Óculos personalizado", qtd = 0],
        [nome = "Caixa de som", qtd = 0],
        [nome = "Fone Bluetooth", qtd = 0],
        [nome = "Kit baralho", qtd = 0],
        [nome = "Bicicleta", qtd = 0],
        [nome = "Micro ondas", qtd = 0],
        [nome = "MP5", qtd = 0],
        [nome = "Lamborghini", qtd = 0]];
aviso = [false, false, false, false, false, false, false, false, false];
boxs = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function sorteio(){

    if(jogadas > 0 && limit >= 0){
        // Escolhe qual box será selecionado
        var sera = Math.ceil(Math.random() * 16);
        console.log("Numero random: " + sera);
    
        // Muda o estilo do box selecionado
        let box = document.getElementById("quad" + sera);
        box.style.border = "dashed red 4px";
    
        // Qtd de jogadas
        jogadas--;
        quadr = [];

        // Cata tudo
        for(i = 0; i < 16; i++){

            let sla = document.getElementById("quad" + (i + 1));
            quadr.push(sla);

        }

        console.log(quadr);

        /* SÓ SEI QUE NADA SEI */
        if(quadr[0].style.border == "4px dashed red"){
            boxs[0] = true;
        }
        if(quadr[1].style.border == "4px dashed red"){
            boxs[1] = true;
        }
        if(quadr[2].style.border == "4px dashed red"){
            boxs[2] = true;
        }
        if(quadr[3].style.border == "4px dashed red"){
            boxs[3] = true;
        }
        if(quadr[4].style.border == "4px dashed red"){
            boxs[4] = true;
        }
        if(quadr[5].style.border == "4px dashed red"){
            boxs[5] = true;
        }
        if(quadr[6].style.border == "4px dashed red"){
            boxs[6] = true;
        }
        if(quadr[7].style.border == "4px dashed red"){
            boxs[7] = true;
        }
        if(quadr[8].style.border == "4px dashed red"){
            boxs[8] = true;
        }
        if(quadr[9].style.border == "4px dashed red"){
            boxs[9] = true;
        }
        if(quadr[10].style.border == "4px dashed red"){
            boxs[10] = true;
        }
        if(quadr[11].style.border == "4px dashed red"){
            boxs[11] = true;
        }
        if(quadr[12].style.border == "4px dashed red"){
            boxs[12] = true;
        }
        if(quadr[13].style.border == "4px dashed red"){
            boxs[13] = true;
        }
        if(quadr[14].style.border == "4px dashed red"){
            boxs[14] = true;
        }
        if(quadr[15].style.border == "4px dashed red"){
            boxs[15] = true;
        }

        /* CONDIÇÕES PARA A VITÓRIA */
        
        // Primeira linha
        if (boxs[0] == true && boxs[1] == true && boxs[2] == true && boxs[3] == true && aviso[0] == false){
            // Destaca o prêmio
            document.getElementById("premio1").style.backgroundColor = "lightgreen";
            
            // Dá o prêmio
            aviso[0] = true;
            premios[0][1] += 1;
            document.getElementById("n-rosa").value = premios[0][1];
            
            // Avisa que ganhou
            alert("VOCÊ GANHOU O PRÊMIO DA PRIMEIRA LINHA!");
        }

        // Segunda linha
        if (boxs[4] == true && boxs[5] == true && boxs[6] == true && boxs[7] == true && aviso[1] == false){
            // Destaca o prêmio
            document.getElementById("premio2").style.backgroundColor = "lightgreen";
            
            // Dá o prêmio
            aviso[1] = true;
            premios[1][1] += 1;
            document.getElementById("n-oculos").value = premios[1][1];
            
            // Avisa que ganhou
            alert("VOCÊ GANHOU O PRÊMIO DA SEGUNDA LINHA!");
        }
        
        // Terceira linha
        if (boxs[8] == true && boxs[9] == true && boxs[10] == true && boxs[11] == true && aviso[2] == false){
            // Destaca o prêmio
            document.getElementById("premio3").style.backgroundColor = "lightgreen";
            
            // Dá o prêmio
            aviso[2] = true;
            premios[2][1] += 1;
            document.getElementById("n-caixa").value = premios[2][1];

            // Aviso que ganhou
            alert("VOCÊ GANHOU O PRÊMIO DA TERCEIRA LINHA!");
        }

        // Quarta linha
        if (boxs[12] == true && boxs[13] == true && boxs[14] == true && boxs[15] == true && aviso[3] == false){
            // Destaca
            document.getElementById("premio4").style.backgroundColor = "lightgreen";
            
            // Dá o prêmio
            aviso[3] = true;
            premios[3][1] += 1;
            document.getElementById("n-fone").value = premios[3][1];
            
            // Avisa que ganhou
            alert("VOCÊ GANHOU O PRÊMIO DA QUARTA LINHA!");
        }

        // Primeira coluna
        if (boxs[0] == true && boxs[4] == true && boxs[8] == true && boxs[12] == true && aviso[4] == false){
            // Destaca
            document.getElementById("premio5").style.backgroundColor = "lightgreen";
            
            // Dá o prêmio
            aviso[4] = true;
            premios[4][1] += 1;
            document.getElementById("n-cartas").value = premios[4][1];
            
            // Avisa que ganhou
            alert("VOCÊ GANHOU O PRÊMIO DA PRIMEIRA COLUNA!");
        }

        // Segunda coluna
        if (boxs[1] == true && boxs[5] == true && boxs[9] == true && boxs[13] == true && aviso[5] == false){
            // Destaca
            document.getElementById("premio6").style.backgroundColor = "lightgreen";
                        
            // Dá o prêmio
            aviso[5] = true;
            premios[5][1] += 1;
            document.getElementById("n-bike").value = premios[5][1];
            
            // Aviso
            alert("VOCÊ GANHOU O PRÊMIO DA SEGUNDA COLUNA!");
        }

        // Terceira coluna
        if (boxs[2] == true && boxs[6] == true && boxs[10] == true && boxs[14] == true && aviso[6] == false){
            // Destaca
            document.getElementById("premio7").style.backgroundColor = "lightgreen";
            
            // Dá o prêmio
            aviso[6] = true;
            premios[6][1] += 1;
            document.getElementById("n-micro").value = premios[6][1];
            
            // Avisa
            alert("VOCÊ GANHOU O PRÊMIO DA TERCEIRA COLUNA!");
        }

        // Quarta coluna
        if (boxs[3] == true && boxs[7] == true && boxs[11] == true && boxs[15] == true && aviso[7] == false){
            // Destaca
            document.getElementById("premio8").style.backgroundColor = "lightgreen";
            
            // Dá o prêmio
            aviso[7] = true;
            premios[7][1] += 1;
            document.getElementById("n-mp5").value = premios[7][1];
            
            // Avisa
            alert("VOCÊ GANHOU O PRÊMIO DA QUARTA COLUNA!");
        }

        // Linha na diagonal
        if (boxs[0] == true && boxs[5] == true && boxs[10] == true && boxs[15] == true && aviso[8] == false){
            //Destaca
            document.getElementById("premio9").style.backgroundColor = "lightgreen";
            
            // Dá o prêmio
            aviso[8] = true;
            premios[8][1] += 1;
            document.getElementById("n-lambo").value = premios[8][1];
            
            // Avisa
            alert("VOCÊ GANHOU O PRÊMIO DA LINHA DIAGONAL!");
        }
    }
    else{
        alert("Suas jogadas acabaram! Aperte o botão ''Reiniciar'' para jogar de novo.");
    }

    // Mostrar informações da rodada
    document.getElementById("jogadas").value = jogadas;
}

function startTimer(duration, display){
            
    var timer = duration, minutes, seconds;
    
    intervalo = setInterval(function (){
       //magica
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // exibe
        display.textContent = minutes + ":" + seconds;

        //
        if (--timer < 0 && limit <10) {
            limit++;
            document.getElementById("fichas").value = limit;
            timer = duration;
        }
        else if( limit >= 10){
            clearInterval(intervalo);
        }
    }, 1000);


}

function reiniciar(){
    if(limit > 0){
        limit--;

        if(limit < 10 && regen_on == false){
            regen_on = true;
    
            
            var duration = 60 * 5; // Converter para segundos
            display = document.querySelector('#timer'); // selecionando o timer
            startTimer(duration, display); // iniciando o timer
            
        }
        else if(limit >= 10 && regen_on == true){
            clearInterval(startTimer);
            regen_on = false;
        }
        else{}
    
        document.getElementById("fichas").value = limit;
    
        for(let i = 0; i < 16; i++){
            let sla = document.getElementById("quad" + (i + 1));
            sla.style.border = "none";        
        }
        
        for(let i = 0; i < 9; i++){
            let sla = document.getElementById("premio" + (i + 1));
            sla.style.backgroundColor = "honeydew";        
        }
    
        for(let i = 0; i < 9; i++){
            aviso[i] = false;
        }
    
        for(let i = 0; i < 16; i++){
            boxs[i] = false;
        }
        
        jogadas = 16;
    
        console.log("Valores dos boxs:\n" + 
                    "\n1º box: " + boxs[0] +
                    "\n2º box: " + boxs[1] +
                    "\n3º box: " + boxs[2] +
                    "\n4º box: " + boxs[3] +
                    "\n5º box: " + boxs[4] +
                    "\n6º box: " + boxs[5] +
                    "\n7º box: " + boxs[6] +
                    "\n8º box: " + boxs[7] +
                    "\n9º box: " + boxs[8] +
                    "\n10º box: "+ boxs[9] +
                    "\n11º box: "+ boxs[10] +
                    "\n12º box: "+ boxs[11] +
                    "\n13º box: "+ boxs[12] +
                    "\n14º box: "+ boxs[13] +
                    "\n15º box: "+ boxs[14] +
                    "\n16º box: "+ boxs[15]
                    );
    
        console.log(aviso);
    }
    else{
        alert("Suas fichas acabaram!\nAguarde para obter mais!");
    }
   
}

function aparecerinf(){
    let katiau = document.getElementById("popup-regra");
    katiau.style.visibility = "visible";
}
function sumirinf(){
let katiau = document.getElementById("popup-regra");
    katiau.style.visibility = "hidden";
}

function aparecerpremio(){
    let katiou = document.getElementById("popup-premio");
    katiou.style.visibility = "visible";
}
function sumirpremio(){
    let katiou = document.getElementById("popup-premio");
    katiou.style.visibility = "hidden";
}

function meupremio(){
    let katiei = document.getElementById("popup-meu-premio");
    katiei.style.visibility = "hidden";
}
function erameupremio(){
    let katiei = document.getElementById("popup-meu-premio");
    katiei.style.visibility = "hidden";
}

function ganhei(){
    let katiou = document.getElementById("popup-meu-premio");
    katiou.style.visibility = "visible";
}

function perdi(){
    let katiei = document.getElementById("popup-meu-premio");
    katiei.style.visibility = "hidden";
}
