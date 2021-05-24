const Warrior = require("./Warrior")

test("Warrior loses 50 hp",()=>{
    let pepito = new Warrior(100, 10)
    let lighuen = new Warrior(1000, 50)
    lighuen.attack(pepito)
    expect(pepito.life).toBe(50)
})
