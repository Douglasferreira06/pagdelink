let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 2 * Math.PI,
    random: 0 // Definindo a propriedade random inicialmente
};

function drawCircle(c) {
    ctx.clearRect(0, 0, tela.width, tela.height); // Limpa o canvas antes de desenhar
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);
    ctx.fill();
    ctx.stroke();
}

function updateCircle() {
   // circle.x += 1; // Move o círculo para a direita
   // circle.y += 2; // Move o círculo para baixo
    circle.x -= 3; // Move o círculo para a esquerda
    circle.random += 4; // Incrementa a propriedade random

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.1; // Incrementa o ângulo final
    } else {
        circle.fim = 0; // Reinicia o ângulo final se passar de 2 * Math.PI
    }

    drawCircle(circle);
}

// Chama a função updateCircle a cada 200 milissegundos
let intervalID = setInterval(updateCircle, 200);

drawCircle(circle);
