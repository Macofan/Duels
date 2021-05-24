class Warrior{
    constructor(life, dmg){
        this.life = life
        this.dmg = dmg
    }
    attack(enemy){
        enemy.recieveDmg(this.dmg)
    }
    recieveDmg(damage){
        this.life -= damage
    }
}

module.exports = Warrior