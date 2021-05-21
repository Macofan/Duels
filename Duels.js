    //Aca se definen variables

//El menu principal
let welcome = `Bienvenido a DUELS!
-Tutorial
-Guerrero
-Picaro
-Paladin
-Caballero de la Muerte
-Dummy`
    
// El 'como jugar', añadir cuando sepa bien como funciona el juego
let tutorial = `
Te curas y ganas
`

// skill/s, help, ayuda y habilidades todas te llevan aca. Agregar todas las habilidades cuando ya tenga el codigo hecho.
let skills = `
1 Shield
2 Heal
`

//Si hay un error y no se puede ir al siguiente menu, te va a devolver a esta variable, la cual guarda el menu en el que estabas antes del error
let failsafeC = welcomeC


    //Termino el verano, comienzan las clases (aca se definen las class)

    
function welcomeC (){ //Menu principal
    let failsafeC = welcomeC
    var userInp = window.prompt(welcome);
    switch (userInp) {
        case "Tutorial":
            tutorialC
            break;
    
        default:
            errorC
            break;
    }
}

function tutorialC() {
    let failsafeC = tutorialC
    window.prompt("Tutorial success")
}

function errorC() {
    var userInp = window.prompt(`Opcion no reconocida. Acordate de empezar las palabras con mayusculas.
    -Ok`)
    if (userInp = "Ok") {
        failsafeC
    } else {
        errorC
    }


}

welcomeC()
