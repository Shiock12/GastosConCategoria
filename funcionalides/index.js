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

let gastoTotalCarniceria = 0;
let gastoTotalVerduleria = 0;
let gastoTotalSupermercado = 0;
let gastoTotalCasa = 0;

boton.addEventListener("click", () =>{    
        if(monto.value > 0){
            if(categoria.value == "carniceria"){
                gastoTotalCarniceria = gasto (ulCarniceria,totalCarniceria,gastoTotalCarniceria);
        }   else if(categoria.value == "verduleria"){
            gastoTotalVerduleria = gasto(ulVerduleria,totalVerduleria,gastoTotalVerduleria);
        } else if (categoria.value == "supermercado"){
            gastoTotalSupermercado = gasto(ulSupermercado,totalSupermercado,gastoTotalSupermercado);
        } else {
            gastoTotalCasa = gasto(ulCasa,totalCasa,gastoTotalCasa)
        }
    }
    })

    function gasto(listaUl,totalCategoria,gastoTotalCategoria){

        const nuevoli = document.createElement("li");
        
        nuevoli.textContent = monto.value;
        listaUl.appendChild(nuevoli);

        gastoTotalCategoria += Number(monto.value);
        totalCategoria.textContent  = "El gasto total es: $" + gastoTotalCategoria;

        return gastoTotalCategoria;

    }