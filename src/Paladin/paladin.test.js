const Paladin = require("./Paladin")

test("Paladin gains 1 hp",()=>{
    let bolvar = new Paladin(10, 2, 1)
    bolvar.mend(bolvar)
    expect(bolvar.life).toBe(11)
})
