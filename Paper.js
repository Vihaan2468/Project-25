class Paper
{
constructor(x,y,width,height)
{
var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
this.x=x
this.y=y
this.width=width
this.height=height

this.image=loadImage("sprites/paper.png")
this.body=Bodies.rectangle(x,y,width,height)
World.add(world,this.Body)

display()
{
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyforce(paperObject.body,paperObject.body.position,{ x:130,y:-140})

}
}
