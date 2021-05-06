class Bob {

    constructor(x,y,r){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.x = x ;
        this.y = y ;
        this.r = r;

        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position ;
        push () ;
        translate (pos.x,pos.y) ;
        fill ("pink");
        ellipse (0,0,this.r,this.r) ;
        pop() ;
    }   

}