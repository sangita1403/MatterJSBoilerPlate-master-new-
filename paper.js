class Paper{
    constructor(x,y,radius){
        var r ={
            isStactic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
         this.body=Bodies.circle(x,y,radius,r);
         this.radius=radius;
         World.add(world,this.body);
    }
   display(){
            var position = this.body.position;
            // circleMode(CENTER);
            fill("green")
            circle(position.x,position.y,this.radius)
   }

}