class Paper {
    constuctor(x,y) {
        Bodies.ellipse(x, y, 25, 25)
        var options = {
            'isStatic' :false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
    }

    display()
}