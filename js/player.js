class Player{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200, 200,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Imgs/d0wnload.png");
       World.add(world, this.body);
    }

    display(){
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        console.log("player is working");
    }
}