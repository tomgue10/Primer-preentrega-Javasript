function saludar(){
    let nombre = prompt("ingrese su nombre")
    alert("Bienvenido " + nombre);
    const titulo = document.getElementById("titulo")
    titulo.innerText = "Bienvenido " + nombre + " a SOUL KING"
}

class productos{
    constructor(producto, marca, precio){
        this.producto = producto
        this.marca = marca
        this. precio = precio
    }
}

let precio = [
    {producto: "Platillo", marca: "Zildjian", precio: "100000"},
    {producto: "Platillo", marca: "Sabian", precio: "85000"},
    {producto: "Platillo", marca: "Meinl", precio: "93000"},
    {producto: "Platillo", marca: "Istanbul", precio: "97000"},
    {producto: "Parche", marca: "Remo", precio: "8000"},
    {producto: "Parche", marca: "Evans", precio: "9000"},
    {producto: "Parche", marca: "Aquarian", precio: "8000"},
    {producto: "Parche", marca: "Encore", precio: "3600"},
    {producto: "Bateria", marca: "Sonor", precio: "745500"},
    {producto: "Bateria", marca: "Tama", precio: "390000"},
    {producto: "Bateria", marca: "Pearl", precio: "587000"},
    {producto: "Bateria", marca: "DW", precio: "978000"},
    {producto: "Soporte", marca: "Sonor", precio: "46500"},
    {producto: "Soporte", marca: "Tama", precio: "42000"},
    {producto: "Soporte", marca: "Pearl", precio: "35000"},
    {producto: "Soporte", marca: "Dixon", precio: "31000"},
]
function verPrecios(){
    precio.forEach((producto)=> {console.log (`${producto.producto} ${producto.marca} ${producto.precio}`)})
}
function cargarProducto(){
    let producto = prompt("Elija que producto desea comprar");
    let marca = prompt ("Que marca desea comprar")
    let precio = parseInt(prompt ("ingrese el precio"))
    const nuevoProducto = new productos(producto, marca, precio)
    carrito.push(nuevoProducto)
    alert("producto añadido al carrito")
}

function verCarrito(){
    carrito.forEach((producto) => alert(`Usted ha elegido ${producto.producto} de la marca ${producto.marca} por el precio de $ ${producto.precio}`))
}

function oferta(){
    const oferta = precio.filter((producto) => producto.precio < 8000);
    for (const ofertas of oferta){
        alert(`La oferta del dia es un parche ${ofertas.marca} por el precio de $ ${ofertas.precio}`
        );
    }
}

function finalizarCompra(){
    const total = carrito.reduce((acc, elemento) => acc + elemento.precio, 0);
    alert(`El total de su compra es de $ ${total}`)
}

let carrito = []


saludar()
verPrecios()

let opcion = prompt("Ingrese una opción \n 1: Ingresar productos \n 2: Mostrar ofertas \n 3: Ver carrito \n 4: Finalizar compra \n 5: Salir")

while (opcion !== "5"){
    if (opcion == "1"){cargarProducto(carrito)}
    else if (opcion == "2"){oferta()}
    else if (opcion == "3"){verCarrito()}
    else if (opcion == "4"){ finalizarCompra()}
    opcion = prompt("Vuelva a ingresar una opción \n 1: Ingresar productos \n 2: Mostrar ofertas \n 3: Ver carrito \n 4: Finalizar compra \n 5: Salir")
}


alert("Gracias por su compra!")