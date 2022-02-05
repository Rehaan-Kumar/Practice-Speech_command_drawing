x = 0;
y = 0;
draw_rect = "";
draw_circ = "";
draw_square = "";
draw_triangle = "";

function setup() {
    canvas = createCanvas(900 , 600)
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML="System is listening. Please Speak"
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("status").innerHTML="The Speech has been recognized as "+content

    if(content == "circle" || content == "Circle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML="Started drawing circle"
        draw_circ = "set"
    }
    if(content == "rectangle" || content == "Rectangle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML="Started drawing rectangle"
        draw_rect = "set"
    }
    if(content == "square" || content == "Square") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML="Started drawing square"
        draw_square = "set"
    }
    if(content == "triangle" || content == "Triangle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML="Started drawing triangle"
        draw_triangle = "set"
    }
}

function draw() {
    if(draw_circ == "set") {
        radius = Math.floor(Math.random() * 200)
        circle(x , y , radius)
        document.getElementById("status").innerHTML="Circle is drawn"
        draw_circ = ""
    }
    if(draw_rect == "set") {
        rect(x , y , 150 , 100)
        document.getElementById("status").innerHTML = "Rectangle is drawn"
        draw_rect = ""
    }
    if(draw_square == "set") {
        side = Math.floor(Math.random() *150)
        square(x , y , side)
        document.getElementById("status").innerHTML = "Square is drawn"
        draw_square = ""
    }
    if(draw_triangle == "set"){
        triangle(x , y , x+50 , y-100 , x+100 , y)
        document.getElementById("status").innerHTML = "Triangle is drawn"
        draw_triangle = ""
    }
}