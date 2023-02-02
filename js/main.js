function saludar(){
    let user = prompt("ingrese su nombre")
    alert("Bienvenido " + user);
}

function seleccionarProducto(){
    producto = prompt("Seleccione que clase de producto desea comprar \n 1: Hardware \n 2: Platillos \n 3: Parches \n 4: Baterias").toLowerCase()
    if (producto == "1" || producto == "hardware") 
        {marca1 = prompt("Seleccione la marca \n 1: Sonor \n 2: Tama \n 3: Pearl \n 4: Dixon").toLocaleLowerCase()
            if((marca1 == "1" || marca1 == "sonor")){alert("Seleccionaste hardware Sonor");}
            else if ((marca1 == "2" || marca1 == "tama")){alert("Seleccionaste hardware Tama");}
            else if ((marca1 == "3" || marca1 == "pearl")){alert("Seleccionaste hardware Pearl");}
            else if ((marca1 == "4" || marca1 == "dixon")){alert("Seleccionaste hardware Dixon");}
            else{alert("Ingreso una opción invalida, por favor vuelva a intentarlo.")
            seleccionarProducto()}
                preciosFinalesHardware()
            }
    else if (producto == "2" || producto == "platillos")
        {marca2 = prompt("Seleccione la marca \n 1: Zildjian \n 2: Meinl \n 3: Sabian \n 4: Istanbul").toLocaleLowerCase()
            if((marca2 == "1" || marca2 == "zildjian")){alert("Seleccionaste platillos Zildjian");}
            else if((marca2 == "2" || marca2 == "meinl")){alert("Seleccionaste platillos Meinl");}
            else if((marca2 == "3" || marca2 == "sabian")){alert("Seleccionaste platillos Sabian");}
            else if((marca2 == "4" || marca2 == "zildjian")){alert("Seleccionaste platillos Istambul");}
            else{alert("Ingreso una opción invalida, por favor vuelva a intentarlo.")
            seleccionarProducto()}
                preciosFinalesPlatillos()}
    else if (producto == "3" || producto == "parches")
        {marca3 = prompt("Seleccione la marca \n 1: Remo \n 2: Evans \n 3: Aquarian \n 4: Encore").toLocaleLowerCase()
            if((marca3 == "1" || marca3 == "remo")){alert("Seleccionaste parches Remo");}
            else if((marca3 == "2" || marca3 == "evans")){alert("Seleccionaste parches Evans");}
            else if((marca3 == "3" || marca3 == "aquarian")){alert("Seleccionaste parches Aquarian");}
            else if((marca3 == "4" || marca3 == "encore")){alert("Seleccionaste parches Encore");}
            else{alert("Ingreso una opción invalida, por favor vuelva a intentarlo.")
            seleccionarProducto()}
                preciosFinalesParches()}
    else if (producto == "4" || producto == "baterias") 
        {marca4 = prompt("Seleccione la marca \n 1: Sonor \n 2: Tama \n 3: Pearl \n 4: DW").toLocaleLowerCase()
            if((marca4 == "1" || marca4 == "sonor")){alert("Seleccionaste baterias Sonor");}
            else if((marca4 == "2" || marca4 == "tama")){alert("Seleccionaste baterias Tama");}
            else if((marca4 == "3" || marca4 == "pearl")){alert("Seleccionaste baterias Pearl");}
            else if((marca4 == "4" || marca4 == "dw")){alert("Seleccionaste baterias DW");}
            else{alert("Ingreso una opción invalida, por favor vuelva a intentarlo.")
            seleccionarProducto()}
                preciosFinalesBaterias()}
    else {alert("Ingreso una opción invalida, por favor vuelva a intentarlo.")
        seleccionarProducto()
        }
}

function preciosFinalesHardware(){
    if((marca1 == "1" || marca1 == "sonor")){alert("El precio final de su soporte es de $" + (soporteSonor * 1.21));}
    else if((marca1 == "2" || marca1 == "tama")){alert("El precio final de su soporte es de $" + (soporteTama * 1.21));}
    else if((marca1 == "3" || marca1 == "pearl")){alert("El precio final de su soporte es de $" + (soportePearl * 1.21));}
    else if((marca1 == "4" || marca1 == "dixon")){alert("El precio final de su soporte es de $" + (soporteDixon * 1.21));}
        opcion = prompt("Que desea hacer a continuación \n 1: Ver más productos \n 2: Salir");
}

function preciosFinalesPlatillos(){   
    if((marca2 == "1" || marca2 == "zildjian")){alert("El precio final de su platillo es de $" + (platilloZildjian * 1.21));}
    else if((marca2 == "2" || marca2 == "meinl")){alert("El precio final de su platillo es de $" + (platilloMeinl * 1.21));}
    else if((marca2 == "3" || marca2 == "sabian")){alert("El precio final de su platillo es de $" + (platilloSabian * 1.21));}
    else if((marca2 == "4" || marca2 == "istanbul")){alert("El precio final de su platillo es de $" + (platilloIstanbul * 1.21));}
        opcion = prompt("Que desea hacer a continuación \n 1: Ver más productos \n 2: Salir");
}

function preciosFinalesParches(){
    if((marca3 == "1" || marca3 == "remo")){alert("El precio final de su parche es de $" + (parcheRemo * 1.21));}
    else if((marca3 == "2" || marca3 == "evans")){alert("El precio final de su parche es de $" + (parcheEvans * 1.21));}
    else if((marca3 == "3" || marca3 == "aquarian")){alert("El precio final de su parche es de $" + (parcheAquarian * 1.21));}
    else if((marca3 == "4" || marca3 == "encore")){alert("El precio final de su parche es de $" + (parcheEncore * 1.21));}
        opcion = prompt("Que desea hacer a continuación \n 1: Ver más productos \n 2: Salir");
}

function preciosFinalesBaterias(){
    if((marca4 == "1" || marca4 == "sonor")){alert("El precio final de su platillo es de $" + (bateriaSonor * 1.21));}
    else if((marca4 == "2" || marca4 == "tama")){alert("El precio final de su platillo es de $" + (bateriaTama * 1.21));}
    else if((marca4 == "3" || marca4 == "pearl")){alert("El precio final de su platillo es de $" + (bateriaPearl * 1.21));}
    else if((marca4 == "4" || marca4 == "dw")){alert("El precio final de su platillo es de $" + (bateriaDW * 1.21));}
        opcion = prompt("Que desea hacer a continuación \n 1: Ver más productos \n 2: Salir");
}

let platilloZildjian = 100000;
let platilloSabian = 85000;
let platilloMeinl = 93000;
let platilloIstanbul = 97000;
let parcheRemo = 8000;
let parcheEvans = 9000;
let parcheAquarian = 8000;
let parcheEncore = 3600;
let bateriaSonor = 745500;
let bateriaTama = 390000;
let bateriaPearl = 587000;
let bateriaDW = 978000;
let soporteSonor = 46500;
let soporteTama = 42000;
let soportePearl = 35000;
let soporteDixon = 31000;

saludar()

let opcion = prompt("ingrese una opción \n 1: Ver productos \n 2: Salir")

while(opcion !== "2"){
 seleccionarProducto()
}

alert("Gracias por su compra!")