// Obtén el contexto de dibujo del canvas
const canvas = document.getElementById("stadiumCanvas");
const ctx = canvas.getContext("2d");

// Dibujar el campo de fútbol
function drawFootballPitch() {
  ctx.fillStyle = "#34c924"; // Color verde para el césped
  ctx.fillRect(100, 100, 600, 600); // Dibujar el campo de fútbol

  // Líneas del campo
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 5;

  // Líneas de banda
  ctx.strokeRect(100, 100, 600, 600);

  // Línea central
  ctx.beginPath();
  ctx.moveTo(400, 100);
  ctx.lineTo(400, 700);
  ctx.stroke();

  // Círculo central
  ctx.beginPath();
  ctx.arc(400, 400, 50, 0, Math.PI * 2);
  ctx.stroke();

  // Área de penalti
  ctx.strokeRect(100, 250, 150, 300); // Área de penalti izquierda
  ctx.strokeRect(550, 250, 150, 300); // Área de penalti derecha

  // Punto de penalti
  ctx.beginPath();
  ctx.arc(175, 400, 5, 0, Math.PI * 2); // Punto de penalti izquierdo
  ctx.arc(625, 400, 5, 0, Math.PI * 2); // Punto de penalti derecho
  ctx.fillStyle = "#fff";
  ctx.fill();
}

// Dibujar las gradas
function drawStands() {
  ctx.fillStyle = "#333";
  
  // Lado izquierdo
  ctx.fillRect(50, 100, 50, 600); 
  // Lado derecho
  ctx.fillRect(700, 100, 50, 600); 
  // Lado superior
  ctx.fillRect(100, 50, 600, 50); 
  // Lado inferior
  ctx.fillRect(100, 750, 600, 50); 
}

// Dibujar el techo
function drawRoof() {
  ctx.fillStyle = "#888";
  ctx.beginPath();
  ctx.moveTo(50, 100); // Esquina superior izquierda
  ctx.lineTo(750, 100); // Esquina superior derecha
  ctx.lineTo(725, 50); // Parte superior del techo
  ctx.lineTo(75, 50); // Parte superior del techo
  ctx.closePath();
  ctx.fill();
}

// Dibujar las torres de luz
function drawLightTowers() {
  ctx.fillStyle = "#ccc";
  // Torre de luz izquierda
  ctx.fillRect(50, 150, 20, 150);
  ctx.beginPath();
  ctx.arc(60, 150, 30, 0, Math.PI * 2);
  ctx.fill();
  
  // Torre de luz derecha
  ctx.fillRect(730, 150, 20, 150);
  ctx.beginPath();
  ctx.arc(740, 150, 30, 0, Math.PI * 2);
  ctx.fill();
}

// Dibujar entradas
function drawEntrances() {
  ctx.fillStyle = "#666";
  // Entradas principales
  ctx.fillRect(200, 750, 100, 50); // Entrada inferior izquierda
  ctx.fillRect(500, 750, 100, 50); // Entrada inferior derecha
}

// Dibujar el estadio completo
function drawStadium() {
  drawFootballPitch();
  drawStands();
  drawRoof();
  drawLightTowers();
  drawEntrances();
}

// Llamar a la función para dibujar el estadio
drawStadium();
