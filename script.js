//Constantes generales
const ZONA_URBANA="U";
const ZONA_RURAL="R";
const ZONA_FRONTERA="F";

//Funcion principal
function calcularBeca() {
    //Fase 1: Entrada
    let promedio = parseFloat(document.getElementById("promedio").value);
    let ingreso = parseFloat(document.getElementById("ingreso").value);
    let zona = document.getElementById("zona").value; //U, R, F


    //Fase2: Proceso
    let tipoBeca = hallarTipoBeca(promedio,ingreso); //Beca completa, Beca parcial, No recibe beca
    let montoBase = hallarMontoBase(tipoBeca); //6000, 3000, 0
    let porcentajeBoni = hallarPorcentajeBoni(zona, tipoBeca); //0%, 7%, 10%
    let bonificacion = montoBase * porcentajeBoni;
    let montoTotalBeneficio = montoBase + bonificacion;

    //Fase 3: Salida
    let salida = "<h1>resultado</h1>";
    salida = salida + "<b>Tipo de beca: </b>" + tipoBeca + "<br>";
    salida = salida + "<b>Monto base: S/ </b>" + montoBase + "<br>";
    salida = salida + "<b>% Bonificacion: </b>" + (porcentajeBoni*100).toFixed(2)+"%<br>";
    salida = salida + "<b>Bonificacion: S/</b>" + bonificacion.toFixed(2)+ "<br>";
    salida = salida + "<b>Monto total beneficio: S/ </b>" + montoTotalBeneficio.toFixed(2) + "<br>";
    document.getElementById("resultado").innerHTML = salida;
}

function hallarPorcentajeBoni(p_zona, p_tipoBeca) {
    if(p_tipoBeca=="No recibe beca") {
        return 0; //0%
    }

    if(p_zona=="R") {
        return 0.07; //7%
    } else if(p_zona=="F") {
        return 0.1; //10%
    } else {
        return 0; //Urbana, devuelve 0%
    }
}

//Funcion para obtener el monto base, segun el tipo de beca
function hallarMontoBase(p_tipoBeca) {
    switch(p_tipoBeca) {
        case "Beca completa":
            return 6000;
        case "Beca parcial":
            return 3000;
        default: //No recibe beca
            return 0;
    }
}

//Funcion para obtener el tipo de beca segun promedio e ingreso
function hallarTipoBeca(p_promedio, p_ingreso) {
    if(p_promedio<13) {
        return "No recibe beca";
    }

    if(p_promedio>=13 && p_promedio<16) {
        if(p_ingreso<1800) {
            return "Beca parcial";
        } else {
            return "No recibe beca";
        }
    }

    if(p_promedio>=16) {
        if(p_ingreso<3000) {
            return "Beca completa";
        } else if(p_ingreso<=4000) {
            return "Beca parcial";
        } else {
            return "No recibe beca";
        }
    }
}
