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

let gastoTotal = 0;

boton.addEventListener("click", () =>{    
    const nuevoli = document.createElement("li");
        if(monto.value > 0){
            if(categoria.value == "carniceria"){
              nuevoli.textContent = monto.value;
                ulCarniceria.appendChild(nuevoli);
                gastoTotal += Number(monto.value);
                totalCarniceria.textContent = "El gasto total es: " + gastoTotal;

        }   else if(categoria.value == "verduleria"){
             nuevoli.textContent = monto.value;
                ulVerduleria.appendChild(nuevoli);
                gastoTotal += Number(monto.value);
                totalVerduleria.textContent = "El gasto total es: " + gastoTotal;
        } else if (categoria.value == "supermercado"){
            nuevoli.textContent = monto.value;
            ulSupermercado.appendChild(nuevoli);
            gastoTotal += Number(monto.value);
            totalSupermercado.textContent = "El gasto total es: " + gastoTotal;
        } else {
            nuevoli.textContent = monto.value;
            ulCasa.appendChild(nuevoli);
            gastoTotal += Number(monto.value);
            totalCasa.textContent = "El gasto total es: " + gastoTotal;
        }
    }
    })


    

