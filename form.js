class Form{

constructor() {
    this.input=createInput("name")
     this.button = createButton("Play")
     this.greeting = createElement("h3")
    
}

hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}


display() {

var title = createElement("h2")
title.html("Car racing")
title.position(400,100)



this.input.position(400,150)


this.button.position(400,200)

 



this.button.mousePressed(function(){

    this.input.hide()
    this.button.hide()
    

    var name = input.value()
    playerCount+= 1
    player.update(name)
    player.updateCount(playerCount)

    this.greeting.html("Hello, Welcome " + name)
    this.greeting.position(400,160)

})


}


}