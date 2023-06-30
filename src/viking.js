// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    
    receiveDamage(damage) {
        this.health -= damage
        if (this.health>0)
        {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
        
        
    }
    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage
        if(this.health>0)
        {
            return `A Saxon has received ${damage} points of damage`
        }
        else {

         return `A Saxon has died in combat`
        }
    }




}

// War
class War  {
    vikingArmy = []
    saxonArmy = []


addViking(viking)
{
    this.vikingArmy.push(viking)
}

addSaxon(saxon)
{
    this.saxonArmy.push(saxon)
}

vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

   let war = randomSaxon.receiveDamage(randomViking.strength)


    for (let i=0; i<=this.saxonArmy.length; i++) {
        if (this.saxonArmy[i].health<=0)
        {
            this.saxonArmy.splice(i,1)
        }
    }
    return war 

}


saxonAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

   let car = randomViking.receiveDamage(randomSaxon.strength)


    for (let i=0; i<=this.vikingArmy.length; i++) {
        if (this.vikingArmy[i].health<=0)
        {
            this.vikingArmy.splice(i,1)
        }
    }
    return car 

}


showStatus(){
    if(this.saxonArmy.length==0){
        return `Vikings have won the war of the century!`
    }

    else if (this.vikingArmy.length==0){
        return "Saxons have fought for their lives and survived another day..."
    }

    else {
        return `Vikings and Saxons are still in the thick of battle.`
    }

}

}

// Iteration 5

// if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
