class DeathKnight{
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
    interrupt(enemy, turnDur){
        enemy.blockSpell(current, turnDur)
    }
    silence(enemy, turnDur){
        enemy.blockSpell(all, turnDur)
    }
}

module.exports = DeathKnight