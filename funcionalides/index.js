const monto = document.getElementById("monto");
const boton = document.getElementById("button");
const categoria = document.getElementById("categoria");
const ulCarniceria = document.getElementById("ul-carniceria");
const ulVerduleria = document.getElementById("ul-verduleria");
const ulSupermercado = document.getElementById("ul-supermercado");
const ulCasa = document.getElementById("ul-casa");
const totalCarniceria = document.getElementById("gastoCarniceria");
const totalVerduleria = document.getElementById("gastoVerduleria");
const totalSupermercado = document.getElementById("gastoSupermercado");
const totalCasa = document.getElementById("gastoCasa");
const valorgeneral = document.getElementById("totalgeneral");

let gastoTotalCarniceria = 0;
let gastoTotalVerduleria = 0;
let gastoTotalSupermercado = 0;
let gastoTotalCasa = 0;

let gastos = [];

const gastosGuardados = localStorage.getItem("gastos");

if (gastosGuardados !== null) {
    gastos = JSON.parse(gastosGuardados);

    gastos.forEach((gasto) => {
        console.log(gasto.categoria + ": " + gasto.monto);
    });
}

boton.addEventListener("click", () => {
    if (monto.value < 0 || monto.value == "") {
        alert("Por favor ingresa un numero valido");
    }

    if (monto.value > 0) {
        var numeroConvertido = Number(monto.value);

        if (categoria.value == "carniceria") {
            gastoTotalCarniceria = gasto(ulCarniceria, totalCarniceria, gastoTotalCarniceria);
            agregarGasto(numeroConvertido, categoria.value);
        } else if (categoria.value == "verduleria") {
            gastoTotalVerduleria = gasto(ulVerduleria, totalVerduleria, gastoTotalVerduleria);
            agregarGasto(numeroConvertido, categoria.value);
        } else if (categoria.value == "supermercado") {
            gastoTotalSupermercado = gasto(ulSupermercado, totalSupermercado, gastoTotalSupermercado);
            agregarGasto(numeroConvertido, categoria.value);
        } else {
            gastoTotalCasa = gasto(ulCasa, totalCasa, gastoTotalCasa);
            agregarGasto(numeroConvertido, categoria.value);
        }
    }

    let valorgral = gastoTotalCarniceria + gastoTotalCasa + gastoTotalSupermercado + gastoTotalVerduleria;
    valorgeneral.textContent = "La suma total es $: " + valorgral;
});

function agregarGasto(montoNuevo, categoriaNueva) {
    const gasto = {
        categoria: categoriaNueva,
        monto: montoNuevo
    };

    gastos.push(gasto);
    localStorage.setItem("gastos", JSON.stringify(gastos));

    const mostrarGastos = JSON.parse(localStorage.getItem("gastos"));
    console.log(mostrarGastos);
}

function gasto(listaUl, totalCategoria, gastoTotalCategoria) {
    const nuevoli = document.createElement("li");

    nuevoli.textContent = monto.value;
    listaUl.appendChild(nuevoli);

    gastoTotalCategoria += Number(monto.value);
    totalCategoria.textContent = "El gasto total es: $" + gastoTotalCategoria;
    monto.value = "";

    return gastoTotalCategoria;
}