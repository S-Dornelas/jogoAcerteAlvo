<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiro ao alvo</title>
</head>

<body>

<canvas width="600" height="400"></canvas>
<h1>ACERTOS</h1><span id="pontos"></span>

<script>

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'green';
    pincel.fillRect(0, 0, 600, 400);

    var areaQueExibePontos = document.querySelector('#pontos');
    var raio = 10;
    var xAleatorio;
    var yAleatorio;
    var pontos = 0;

    function desenhaCirculo(x, y, raio, cor) {
        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function limpaTela() {
        pincel.fillStyle = 'green';
        pincel.fillRect(0, 0, 600, 400);
    }

    function desenhaAlvo(x, y) {
        desenhaCirculo(x, y, raio + 20, 'red');
        desenhaCirculo(x, y, raio + 10, 'white');
        desenhaCirculo(x, y, raio, 'red');
    }

    function sorteiaPosicao(maximo) {
        return Math.floor(Math.random() * maximo);
    }

    function atualizaTela() {
        limpaTela();
        xAleatorio = sorteiaPosicao(600);
        yAleatorio = sorteiaPosicao(400);
        desenhaAlvo(xAleatorio, yAleatorio);
    }

    setInterval(atualizaTela, 1500);

    function dispara(evento) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        if ((x > xAleatorio - raio)
            && (x < xAleatorio + raio)
            && (y > yAleatorio - raio)
            && (y < yAleatorio + raio)) {
            pontos++
            alert('Acertou!');
            areaQueExibePontos.textContent = pontos;
        } else {
            pontos--
            areaQueExibePontos.textContent = pontos;
        }
    }

    tela.onclick = dispara;

</script>

</body>

</html>
