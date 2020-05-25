class Shooter{
    constructor(body,point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.03,
            length: 10
        }
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }

    fly() {
      this.shot.bodyA = null;
    }

    display(){
   // consol.log("inside display");  
        if (this.shot.bodyA) {
           // consol.log("hellow")
            var point1 = this.shot.bodyA.position;
            var point = this.shot.pointB;
            strokeWeight(4);
            line(point1.x, point1.y, point.x, point.y);   
        }


    }
    
}