// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combact`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combact`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        Saxon.receiveDamage(Viking.strength);
        if (Saxon.health <= 0) {
            this.saxonArmy.pop(Saxon);
        }
        return this.saxonArmy;
    }
    saxonAttack() {
        Viking.receiveDamage(Saxon.strength);
        if (Viking.health <= 0) {
            this.vikingArmy.pop(Viking);
        }
        return this.vikingArmy;
    }
    showStatus() {
        if (this.saxonArmy === []) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy === []) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings ans Saxons are still in the thick of battle.';
        }
    }
}
