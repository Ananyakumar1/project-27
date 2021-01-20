class Chain{
    constructor(bodyA,bodyB,offsetX){
    this.offsetX = offsetX
    //this.offsetY = offsetY
        var options={
        bodyA: bodyA,
        bodyB: bodyB,
        pointB:{x: this.offsetX, y:0},
        stiffness: 0.01,
        length: 280
    }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
}
display(){
    var pp = this.chain.bodyB.position.x+ this.offsetX;
    stroke("white")
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,pp,this.chain.bodyB.position.y)
}
}
 