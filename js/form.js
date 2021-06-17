class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(400, 80);
        this.input.position(550,400);
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('background', 'lightpink');

    

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            PlayerCount += 1;
            player.index = PlayerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '100px');
        })

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        })

    }
}