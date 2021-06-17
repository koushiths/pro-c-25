class papper {
    constructor(x,y)
    {
        var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
			}

		this.x=x;
		this.y=y;
		
        this.image=loadImage("papper.png")

 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER);
			fill(128,128,128)
			rect(0,0);
			pop()
			
    }
}