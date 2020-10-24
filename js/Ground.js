class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(500,990,1000,40,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1000,40);
    }
}