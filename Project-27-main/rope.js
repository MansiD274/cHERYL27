class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.xOffset=offsetX;
        this.yOffset=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2

        }
        this.body=Constraint.create(options);
        World.add(world,this.body);

    }
    display(){
        var pos1=this.body.bodyA.position;
        var pos2=this.body.bodyB.position;
        var newX=pos2.x+this.xOffset;
        var newY=pos2.y+this.yOffset;
        strokeWeight(5);
        line(pos1.x,pos1.y,newX,newY);
    }

}