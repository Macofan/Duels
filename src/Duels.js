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
//var failsafeC = welcomeC() //ESTO ROMPE EL PROGRAMA, HAY QUE REWORKEAR COMO FUNCIONA (probablemente con un loop que llame la funcion de error y te deje salir cuando le pongas el OK)


    //Termino el verano, comienzan las clases (aca se definen las class)

function welcomeC(){ //Menu principal
    let userInpWelcomeC = "Default"
    userInpWelcomeC = window.prompt (welcome) //Le pide el input para decidir a que menu mandarlo
    switch (userInpWelcomeC)  {
        case "Tutorial":
            tutorialC()
            break;
    
        default:
            errorC // NO TE MANDA ACA Y NO SE POR QUE
            break;
    }
}

function tutorialC() {
    window.prompt("Tutorial success")
}

function errorC() {
    let userInpErrorC = window.prompt(`Opcion no reconocida. Acordate de empezar las palabras con mayusculas.
    -Ok`)
    if (userInpErrorC = "Ok") {
        // No sumarle 1 al loop, asi termina
    } else {
        // Sumarle 1 al loop, asi te manda error de nuevo
    }


}

welcomeC()
