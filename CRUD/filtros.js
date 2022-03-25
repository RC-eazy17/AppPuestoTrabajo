const d= document;
//toda este archivo se copia y peca directo, en lo unico que debemos agregar
// y adaptar es en los otros archivos
// se exporta la funcion de search con los parametros que se ven
// y se hace una arrow funtion con condicional para que mientras
// escribas en el buscador se vaya aplicando el filtro en tiempo
// real su funcion es basicamente agregar o quitar la clase filter 
// que en el css vemos que tiene la funcion de ocultar

export default function searchFilters(input, selector){
d.addEventListener("keyup", e => {
    if(e.target.matches(input)){
        d.querySelectorAll(selector).forEach(el => (el.textContent.toLowerCase().includes(e.target.value))? el.classList.remove("filter"):el.classList.add("filter"));
    }
})
}