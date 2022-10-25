// E-COMMERCE, VENTA DE PRODUCTOS DE DECORACION DE ESTUDIO CREA

// MATES = 1200
// ALMOHADONES = 1000
// CANASTOS = 1500
// PLANTAS MEDIANAS = 1200
// PLANTAS GRANDES = 1800

//IDENTIFICACION DEL USUARIO

let nombreUsuario = prompt('- ESTUDIO CREA - Como es tu nombre?')
alert (`Bienvenidx ${nombreUsuario}! Comencemos...`)

//COMPRA

function sumaProductos (total, monto){
    return resultado = total + monto
 }
 
 let productos = parseInt(prompt('Que producto deseas comprar? 1. Mates - 2. Almohadones - 3. Canastos - 4.Plantas Medianas - 5.Plantas Grandes'))
 let totalCompra = 0
 let seguirComprando = true 
 let decision
 
 while (seguirComprando === true){
 if (productos ===1){
     totalCompra = sumaProductos(totalCompra, 1200)
 } else if (productos ===2){
     totalCompra = sumaProductos(totalCompra, 1000)
 } else if (productos ===3){
     totalCompra = sumaProductos(totalCompra, 1500)
 } else if (productos ===4) {
     totalCompra = sumaProductos(totalCompra, 1200)
 } else if (productos === 5){
     totalCompra = sumaProductos(totalCompra, 1800)
 }else {
     productos = parseInt(prompt('Selecciona un producto de nuestro catalogo: 1.Mates - 2.Almohadones - 3.Canastos - 4.Plantas Medianas - 5.Plantas Grandes'))
     continue
 }

decision = parseInt(prompt('Deseas comprar algo mas? 1.Si - 2.No'))
 if (decision === 1){
    productos = parseInt(prompt('Que producto deseas comprar? 1.Mates - 2.Almohadones - 3.Canastos - 4.Plantas Medianas - 5.Plantas Grandes'))
 } else {
    seguirComprando = false
 }
}

alert (`El total de tu compra es ${totalCompra}`)

//PAGO

function tresCuotas (total, tres){
    resultado = total/tres
}
function seisCuotas (total, seis){
    resultado = total/seis
}

let pago = parseInt(prompt('Como deseas realizar el pago? 1.Pago unico con transferencia bancaria o debito - 2. 3 cuotas sin interes con credito - 3. 6 cuotas sin interes con credito')) 

if (pago === 1){
    alert (`Pago unico de ${totalCompra}. Para continuar, realiza la transferencia a estudio.crea o ingresa los datos de la tarjeta en el formulario correspondiente.`)
} else if (pago === 2){
    tresCuotas (totalCompra, 3)
    alert (`El pago de tu compra se realizara en tres cuotas de ${resultado} cada una. Para continuar, ingresa los datos de la tarjeta en el formulario correspondiente.`)
} else if (pago === 3){
    seisCuotas (totalCompra, 6)
    alert (`El pago de tu compra se realizara en seis cuotas de ${resultado} cada una. Para continuar, ingresa los datos de la tarjeta en el formulario correspondiente.`)
}

alert (`${nombreUsuario}, agradecemos tu compra y esperamos volver a verte pronto :) - ESTUDIO CREA -`)
