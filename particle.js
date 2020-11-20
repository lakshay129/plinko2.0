class particle{
    constructor(x,y){
        var options={
         restitution:0.5,
        density:1
        }

         this.radius=8;
         this.body=Bodies.circle(x,y,this.radius,options);
         World.add(world,this.body);
         this.color=color(random(0,255),random(0,255),random(0,255));

    }

    display(){
        push ();
        var pos=this.body.position;
        var angle=this.body.angle;
        translate(pos.x,pos.y);
        rotate (angle);
        ellipseMode(RADIUS);
        fill (this.color);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}