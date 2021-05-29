class Paladin{
    constructor(life, dmg, heal){
        this.life = life
        this.dmg = dmg
        this.heal = heal
    }
    attack(enemy){
        enemy.recieveDmg(this.dmg)
    }
    recieveDmg(damage){
        this.life -= damage
    }
    recieveHeal(healing){ //agregar despues un check para que no sobrepase la vida maxima
        this.life += healing 
    }
    mend(ally){
        ally.recieveHeal(this.heal)
    }
}

module.exports = Paladin