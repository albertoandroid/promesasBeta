//Promesas para codigo asincrono
/*
Una promesa es un objeto que representa la 
terminación o el fracoso eventual de una operacion
asincrona. 
*/

//Remplazamos callback hell por promesas
function getCar(id){
    return new Promise((resolve, reject)=>{
        //tarea asyncrona aqui
        setTimeout(()=>{
            console.log("obteniendo coche 23 de nuestra db")
            resolve({id: 23, modelo: 'X3'})
        }, 1000)
    })
}

function getModel(model){
    return new Promise((resolve, reject)=>{
        //tarea asyncrona aqui
        setTimeout(()=>{
            console.log("obteniendo modelo x3 features nuestra db")
            resolve({speed: 200, seat: 5, size: '3*4'})

        }, 1000)
    })
}

//Consumimos una promesa
const promesa1 = getCar(12)
//con then obtenemos el resolve de getCar si
//toda va bien que basicamente
//seria un coche
promesa1.then(coche =>console.log(coche))

//pero podemos hacerlo más simple
//cuando tenemos el coche, 
//queremos las caracteristicas del modelo
getCar(23)
    .then(coche =>getModel(coche.model))
    //este then es de la promera de getModel
    .then(model=>console.log(model))
    .catch(error=> console.log('Error', error.message))

/*
Como vemos utilizar promesas es un código más
limpio. buscar ventajas en  internet
y nos olvidamos del callbackhell
además anidamos .then para hacer todas las peticiones
que sean necesarias para nuestro código.
*/



/*
Esto será lo último
Asyn and Await
La declaración de función async define una función
asíncrona, la cual devuelve un objeto 
El operador await es usado para esperar a una Promise. 
Sólo puede ser usado dentro de una función async
function.
*/

async function mostrarModelo(){
    try{
    const coche2 = await getCar(23)
    const modelo = await getModel(coche2.model)
    console.log(modelo)
    }
    catch(err){
        console.log('Error: ', err.message)
    }
}

mostrarModelo()

/*
con el operador await podemos escribir codigo
asyncrono que parece sincrono. Y para los
desarrolaldores es más facil de leer.
Ya no tenemos la cadena .then de Promesas 
*/