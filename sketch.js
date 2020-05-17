const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gamestate = 0;
var story;
var front, game;
var enter = 0;
var backgroundImg;
var character;
var character1;
var timer = 30;
var player;

function preload() {
    //charImg = loadImage(" download(1).png");
    backgroundImg = loadImage("Imgs/mfbk.jpg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(displayWidth, displayHeight - 113);
    front = new Front();
    front.display();

}

function draw(){
    background(255);
    if(enter == 1){
        gamestate = 1;
        background(backgroundImg);
        player = new Player();
        player.display();
    }
    if(gamestate === 1){
        if(frameCount % 60 === 0 && timer > 0){
            timer = timer - 1;
        }
        textSize(100);
        textAlign(CENTER, CENTER);
        text(timer, displayWidth / 2, displayHeight / 2);
    }
}