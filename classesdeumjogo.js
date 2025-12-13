class Heroe{
    constructor(heroName , heroAge , heroType) {
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }
    
        
     atack() {
        let golpe = ""
                switch (this.heroType) {
        case "Mago":
            golpe = "Magia";
            break

        case "Monge":
            golpe = "Artes Marciais";
            break

        case "Guerreiro":
            golpe = "Espada";
            break

        case "Ninja":
            golpe = "Shuriken";
            break
                } 
console.log(`O herói ${this.heroType}' atacou usando ${golpe}`)
    }
}
let Guerreiro = new Heroe ("Rotus" , 360, "Guerreiro")
let Ninja = new Heroe ("Tonikô", 40, "Ninja")
let Monge = new Heroe ("Adrianus",70, "Monge")
let Mago = new Heroe ("Mestre dos Magos", 140, "Mago")

Ninja.atack()
Guerreiro.atack()
Monge.atack()
Mago.atack()

