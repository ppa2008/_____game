class Paper{

constructor(x,y,radius){
var options = {
isStatic :false,
'restitution' : 0.8,
'friction' : 0.5,
'density' : 1.2,

}

this.bodies = Bodies.circle(x,y,radius/2,options);
this.radius = radius


World.add(world,this.bodies)


}

display() {

var pos =this.bodies. position;
push();
ellipseMode(RADIUS)
translate(pos.x,pos.y)
ellipse(0,0,this.radius,this.radius)
fill("pink")
pop();
}
}