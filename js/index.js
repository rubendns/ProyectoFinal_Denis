const tableProductos = document.querySelector('#tablaProductos')
const inputBuscar = document.querySelector('#inputSearch')
const divToast = document.querySelector('div.toast-msg')

function crearFilaHTML(producto) {
    return `<tr>
                    <td class="class-table-number">${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>$ ${producto.precio}</td>
                    <td><button id="${producto.id}" class="button button-outline button-big-emoji">🤍</button></td>
                </tr>`
}

function activarClickEnBotonesProductos() {
    const botones = document.querySelectorAll('button.button.button-outline.button-big-emoji')
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            let producto = productos.find((prod) => prod.id === parseInt(boton.id))
            favoritos.push(producto)
            divToast.textContent = "Se agregó un producto a favoritos: " + producto.nombre
            guardarFavsEnLocalStorage()
        })
    })
}

function cargarProductos(array) {
    tableProductos.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto) => tableProductos.innerHTML += crearFilaHTML(producto))
        activarClickEnBotonesProductos()
    } else {
        divToast.textContent = "No hay productos para listar."
    }
}

inputBuscar.addEventListener("search", () => {
    if (inputBuscar.value.trim() !== "") {
        let arrayResultante = productos.filter((producto) => producto.nombre.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
        cargarProductos(arrayResultante)
    }
})

cargarProductos(productos)