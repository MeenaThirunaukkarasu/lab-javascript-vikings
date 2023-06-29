// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    recieveDamage(theDamage) {
        this.health -= theDamage;
        
    }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}

