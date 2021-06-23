    //Aca se definen variables

//El menu principal

var welcome = `Bienvenido a DUELS!
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
var failsafeC = welcomeC //Testing a ver si Dario lo arreglo

    //Termino el verano, comienzan las clases (aca se definen las class)

function welcomeC(){ //Menu principal
    failsafeC = welcomeC
    let userInpWelcomeC = "Default"
    userInpWelcomeC = window.prompt (welcome) //Le pide el input para decidir a que menu mandarlo
    switch (userInpWelcomeC)  {
        case "Tutorial":
            tutorialC()
            break;
    
        default:
            errorC() 
            break;
    }
}

function tutorialC() {
    failsafeC = tutorialC
    window.prompt("Tutorial success")
}

function errorC() {
    let userInpErrorC = window.prompt(`Opcion no reconocida. Acordate de empezar las palabras con mayusculas.
    -Ok`)
    switch (userInpErrorC)  {
        case "Ok":
            failsafeC()
            break;
        
        case "ok":
            errorCool()
            break;
    
        default:
            errorC() 
            break;
    }


}
function errorCool() {
    let runMenu = errorC;
    let userInpErrorCool = window.prompt(`Usted no aprende, verdad?`)
//    document.getElementById("Duels!").style.backgroundImage = "Usted no aprende verdad.png";         //No estaria andando, no es tan importante.
    if (userInpErrorCool = "Ok") {                                                 //El else no anda, siempre te manda a failsafeC
        runMenu = failsafeC;
    } else {
        runMenu = errorC;
    }
    runMenu()
}

  



welcomeC()
