var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "green";
canvas.fillRect(50,140,750,450);
canvas.fillRect(0,190,750,1000);
canvas.fillRect(100,140,1200,1000);
//barn code
canvas.fillRect(50,100,750,400);
canvas.fillStyle = "gray";
for(var i = 0; i <13; i++){
canvas.fillRect(50,120 + (i*30),750,5);
}
for(var i = 0; i< 25; i++){
  canvas.fillRect(70 + (i*30),100,5,400);
}

canvas.fillStyle = "darkred";
canvas.beginPath();
canvas.moveTo(800,100);
canvas.lineTo(900,1);
canvas.lineTo(1000 ,70);
canvas.fill();

canvas.beginPath();
canvas.moveTo(800,100);
canvas.lineTo(900,1);
canvas.lineTo(125,1);
canvas.lineTo(50,100);
canvas.fill();

canvas.fillStyle = "red";
canvas.beginPath();
canvas.moveTo(800,500);
canvas.lineTo(800,100);
canvas.lineTo(1000,70);
canvas.lineTo(1000,400);
canvas.fill();

canvas.fillStyle = "saddlebrown"
canvas.beginPath();
canvas.moveTo(850,475);
canvas.lineTo(950,425);
canvas.lineTo(950,250);
canvas.lineTo(850,275)
canvas.fill()
//barn code ends
//sun starts
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(0,0,90,0,90)
canvas.stroke();
canvas.fill();
//sun ends

//pig starts
canvas.fillStyle = "pink";
canvas.fillRect(400,750,120,50);
canvas.fillRect(490,800,30,50);
canvas.fillRect(400,800,30,50)
canvas.beginPath();
canvas.arc(520,750,30,0,90)
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(510,740,5,0,90)
canvas.stroke();
canvas.fill();
canvas.beginPath();
canvas.arc(540,740,5,0,90)
canvas.stroke();
canvas.fill();
canvas.fillRect(510,760,30, 5)
canvas.fillRect(400,800,30, 2)
canvas.fillRect(490,800,30, 2)

canvas.beginPath();
canvas.fillStyle = "saddlebrown";
canvas.arc(430,755,5,0,90)
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "saddlebrown";
canvas.arc(450,775,5,0,90)
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "saddlebrown";
canvas.arc(460,755,5,0,90)
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "saddlebrown";
canvas.arc(475,779,5,0,90)
canvas.stroke();
canvas.fill();

canvas.fillStyle="pink";
canvas.fillRect(385,750,15,10);
//pig ends
