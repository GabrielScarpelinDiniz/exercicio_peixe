var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload,
        create,
        update
    }
}
var peixinho
var game = new Phaser.Game(config)

function preload(){
    this.load.image("mar", "assets/bg_azul-escuro.png")
    this.load.image("logo", "assets/logo-inteli_branco.png")
    this.load.image("peixe", "assets/peixes/baiacu.png")
    this.load.image("concha", "assets/peixes/concha.png")
}
function create(){
    this.add.image(400, 300, "mar")
    this.add.image(400, 525, "logo").setScale(0.5)
    this.add.image(700, 50, "concha").setScale(1.0)

    //Guardando o peixinho dentro de uma variável
    peixinho = this.add.image(400, 300, "peixe")
    //Flipando o peixinho
    peixinho.setFlip(true, false)


}
function update(){
    peixinho.x = this.input.x
    peixinho.y = this.input.y
}