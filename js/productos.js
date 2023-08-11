const productos = [
    { id: 1, nombre: "Bateria iPhone 7", precio: 11500, categoria: "Telefonía" },
    { id: 2, nombre: "Bateria iPhone 7 PLUS", precio: 12000, categoria: "Telefonía" },
    { id: 3, nombre: "Bateria iPhone 8", precio: 12000, categoria: "Telefonía" },
    { id: 4, nombre: "Bateria iPhone 8 PLUS", precio: 13000, categoria: "Telefonía" },
    { id: 5, nombre: "Bateria iPhone X", precio: 16000, categoria: "Telefonía" },
    { id: 6, nombre: "Bateria iPhone XS", precio: 17000, categoria: "Telefonía" },
    { id: 7, nombre: "Bateria iPhone XS MAX", precio: 19000, categoria: "Telefonía" },
    { id: 8, nombre: "Bateria iPhone XR", precio: 18000, categoria: "Telefonía" },
    { id: 9, nombre: "Bateria iPhone 11", precio: 25000, categoria: "Telefonía" },
    { id: 10, nombre: "Bateria iPhone 13", precio: 599.99, categoria: "29000" },
]

function guardarFavsEnLocalStorage() {
    if (favoritos.length > 0) {
        localStorage.setItem('MisFavoritos', JSON.stringify(favoritos))
    }
}

function recuperarFavoritosDeLocalStorage() {
    if (localStorage.getItem('MisFavoritos')) {
        return JSON.parse(localStorage.getItem('MisFavoritos'))
    } else {
        return []
    }
}


const favoritos = recuperarFavoritosDeLocalStorage()