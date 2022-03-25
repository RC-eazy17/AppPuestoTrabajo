// const { response } = require("express")

//const { response } = require("express")

// const res = require("express/lib/response")
const url = 'http://localhost:3000/api/categoria/'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalCategoria = new bootstrap.Modal(document.getElementById('modalPrincipal'))
const formCategoria =  document.querySelector('form')
const categoria =  document.getElementById('categoria')
const compañia =  document.getElementById('compañia')
const posicion =  document.getElementById('posicion')
const ubicacion =  document.getElementById('ubicacion')
const descripcion =  document.getElementById('descripcion')
const aplicar =  document.getElementById('aplicar')
const email =  document.getElementById('email')
const tipo =  document.getElementById('tipo')
const fecha =  document.getElementById('fecha')


let opcion = ''

btnJob.addEventListener('click', ()=>{
    categoria.value = ''
    compañia.value = ''
    posicion.value = ''
    ubicacion.value = ''
    descripcion.value = ''
    aplicar.value = ''
    email.value = ''
    tipo.value = ''
    fecha.value = ''

    modalCategoria.show()


})

const mostrar = (categorias) => {
    categorias.forEach(categoria => {
        
        resultados += `<tr>
                            <td style="display: none; ">${categoria.Id}</td>
                            <td>${categoria.Categoria}</td>
                            <td style="display: none; ">${categoria.Tipo}</td>
                            <td>${categoria.Compañia}</td>
                            <td>${categoria.Posicion}</td>
                            <td>${categoria.Ubicacion}</td>
                            <td style="display: none; ">${categoria.Descripcion}</td>
                            <td style="display: none; ">${categoria.Aplicar}</td>
                            <td style="display: none; ">${categoria.Email}</td>
                            <td style="display: none; ">${categoria.Fecha}</td>
                            
                            <td class="text-center"><a class="btnDetalle btn btn-primary">Detalle</a>
                        </tr>
                    `
    })
    contenedor.innerHTML =  resultados

}

// const mostrar2 = (categorias) => {
//     categorias.forEach(categoria => {
        
//         resultados += `<tr>
//                             <td>${categoria.Id}</td>
//                             <td>${categoria.Categoria}</td>
//                             <td>${categoria.Tipo}</td>
//                             <td>${categoria.Compañia}</td>
//                             <td>${categoria.Posicion}</td>
//                             <td>${categoria.Ubicacion}</td>
//                             <td>${categoria.Descripcion}</td>
//                             <td>${categoria.Aplicar}</td>
//                             <td>${categoria.Email}</td>
//                             <td>${categoria.Fecha}</td>
                            
//                             <td class="text-center"><a class="btnEditar btn btn-primary">Detalle</a>
//                             <a class="btnBorrar btn btn-danger">Borrar</a></td>
//                         </tr>
//                     `
//     })
//     contenedor.innerHTML =  resultados

// }

fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error) )


const on  = (element, event, selector, handler) =>{
    //console.log(handler)
    element.addEventListener(event, e =>{
        if(e.target.closest(selector)){
            handler(e)
        } 
    })

}




let idForm = 0
on(document, 'click', '.btnDetalle', e =>{
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const categoriaForm = fila.children[1].innerHTML
    const tipoForm = fila.children[2].innerHTML
    const compañiaForm = fila.children[3].innerHTML
    const posicionForm = fila.children[4].innerHTML
    const ubicacionForm = fila.children[5].innerHTML
    const descripForm = fila.children[6].innerHTML
    const aplicForm = fila.children[7].innerHTML
    const emailForm = fila.children[8].innerHTML
    const fechaForm = fila.children[9].innerHTML

    categoria.value = categoriaForm
    ubicacion.value = ubicacionForm
    posicion.value = posicionForm
    compañia.value = compañiaForm
    email.value = emailForm
    descripcion.value = descripForm
    tipo.value =  tipoForm
    aplicar.value = aplicForm
    fecha.value = fechaForm

    

    opcion = 'detalle'

    modalCategoria.show()
})

formCategoria.addEventListener('submit', (e)=>{
    e.preventDefault()
    if (opcion=='crear') {
        //console.log('OPCION CREAR')
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Categoria: categoria.value,
                Tipo: tipo.value,
                Compañia: compañia.value,
                Posicion: posicion.value,
                Ubicacion: ubicacion.value,
                Descripcion: descripcion.value,
                Aplicar: aplicar.value,
                Email: email.value,
                Fecha: fecha.value
            })
        })
        .then( response => response.json() )
        .then( data =>{
            const nCate = []
            nCate.push(data)
            mostrar(nCate)
        })
        
    }
    if (opcion=='detalle') {
        //console.log('OPCION EDITAR')
        fetch(url+idForm, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Categoria: categoria.value,
                Tipo: tipo.value,
                Compañia: compañia.value,
                Posicion: posicion.value,
                Ubicacion: ubicacion.value,
                Descripcion: descripcion.value,
                Aplicar: aplicar.value,
                Email: email.value,
                Fecha: fecha.value
            })
        })
        .then( response => response.json() )
        .then( response => location.reload() )

    }
    modalCategoria.hide()
})


