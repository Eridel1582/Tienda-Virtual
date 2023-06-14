
//? nav lateral
const icon = document.querySelector('#icon-menu'),
    menu = document.querySelector('#menu')

icon.addEventListener('click', (e) => {
    menu.classList.toggle('active')
    document.body.classList.toggle('opacity');

})

import { Productos } from './data/bdatos.js'

const lista = document.getElementById('lista')
const listacarrito = document.getElementById('listacarrito')
const template = document.getElementById('template').content
const template2 = document.getElementById('template2').content
const fragmento = new DocumentFragment()
let listTodo = Productos
let carrito = []

if(!localStorage.getItem('todo') ){
    localStorage.setItem('todo', JSON.stringify(listTodo)) 
}

const pintarTodoPrincipal = () => {

    listTodo = JSON.parse(localStorage.getItem('todo'))
    for (let i = 0; i < listTodo.length; i++) {
        template.getElementById('img').src = listTodo[i].img;
        template.getElementById('nom').textContent = listTodo[i].name;
        template.getElementById('pre').textContent = listTodo[i].precio;
        template.getElementById('cantidad').textContent = listTodo[i].cantidad
        template.getElementById('agregar').value = listTodo[i].id
        const templateClone = template.cloneNode(true);
        fragmento.appendChild(templateClone)
    }
    lista.appendChild(fragmento)
    eventoclick()
}

const saveTodo = () => {
    if (JSON.parse(localStorage.getItem('todo')) === null) {
        localStorage.setItem('todo', JSON.stringify(listTodo))
        return;
    }
    localStorage.setItem('todo', JSON.stringify(listTodo))
}

const updateEstado = (idTodo) => {
    listTodo = JSON.parse(localStorage.getItem('todo'))
    listTodo = listTodo.map((item) => {
        if (item.id == idTodo) {
            item.carrito += 1
        }
        carrito = item;
        return item;
    })
    //respaldamos la lista
    saveTodo()
    pintarTodo()
}
const Elimar = (idTodo) => {
    listTodo = JSON.parse(localStorage.getItem('todo'))
    listTodo = listTodo.map((item) => {
        if (item.id == idTodo) {
            item.carrito = item.carrito-1;
        }
        carrito = item;
        return item;
    })
    //respaldamos la lista
    saveTodo()
    pintarTodo()
}

const updateEstadocar = () => {
    let total = 0;
    carrito = JSON.parse(localStorage.getItem('todo'))
            for (let i = 0; i < carrito.length; i++) {
                if (carrito[i].carrito> 0) {
                    total = total + ((carrito[i].precio)*carrito[i].carrito)
                }
            }
            if(total == 0){
                alert('Carrito vacio')
                return
            }
            if (confirm('Confirma la compra ')) {
                window.alert('Precio a pagar: '+ total)
                for (let i = 0; i < carrito.length; i++) {
                    if (carrito[i].carrito > 0) {
                        for (let j = 0; j < listTodo.length; j++) {
                            if(carrito[i].id == listTodo[j].id){
                                listTodo[j].cantidad = carrito[i].cantidad - carrito[i].carrito
                                carrito[j].carrito = 0;
                                listTodo[j].carrito = 0;
                            }
                        }
                    }
                }
            }
    //respaldamos la lista
    saveTodo()
    location. reload()
    pintarTodo()
    pintarTodoPrincipal()
}

const eventoComprar = () => { 
    document.getElementById('menu').addEventListener('click', e => {
        e.preventDefault();
        const buy = e.target;
        if (buy.id === 'Comprar') {
            updateEstadocar()
        }

        if(buy.id == 'eliminar-car'){
            Elimar(buy.value)
        }
        e.stopImmediatePropagation();
    })
}

const eventoclick = () => {
    document.getElementById('lista').addEventListener('click', (e) => {
        e.preventDefault();
        const accion = e.target;
        if (accion.id === 'agregar') {
            //Todo: id encontrado --> modificar el estado del todo 
            const idTodo = accion.value
            updateEstado(idTodo);
        }
        e.stopImmediatePropagation();
    })
}

const pintarTodo = () => {
    let con=0
    listacarrito.innerHTML= ''
    carrito = JSON.parse(localStorage.getItem('todo'))
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].carrito>0) {
            con +=1;
            template2.getElementById('img-carrito').src = carrito[i].img;
            template2.getElementById('nom-car').textContent = carrito[i].name;
            template2.getElementById('pre-car').textContent = carrito[i].precio;
            template2.getElementById('eliminar-car').value = carrito[i].id;
            template2.getElementById('cantidad-car').textContent = carrito[i].carrito
            const templateClone2 = template2.cloneNode(true);
            fragmento.appendChild(templateClone2)
        }
    }
    listacarrito.appendChild(fragmento)
    eventoComprar()
    console.log(con);
    if(con === 0){
        listacarrito.innerHTML=`<div class="alert" role="alert">
            <span> Carrito vacio </span>
        </div> `
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    pintarTodo()
    pintarTodoPrincipal()
    
})



