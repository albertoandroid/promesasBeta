/*
Cuando hacemos una petición a una base de datos
los resultados no se obtienen inmediatamente,
sino que imagina la situación. Requieres una lista
de coches que tienes en tu base de datos, lanzas
la operación de lectura, y esperas a que el gestor
de base de datos te responda. Aunque a simple vista
pueda parecer que ocurre al momento, puede tardar
varios milisegundos o segundos, según la operación
por lo tanto, para gestionar esta situación tenemos
tres patrones en javaScrip
Callback
Promises
Async/await

*/
const coche = getCoche(23);

function getCoche(id){
    //setTimeout simula el tiempo de petición
    //a una base de datos real
    setTimeout(()=>{
        console.log("obteniendo coche 23 de nuestra db")
        return {id: 23, modelo: 'X3'}
    }, 1000)
}

getCocheCallback(23, function(coche){
    console.log(coche)
})
//Utilizamos arrow
getCocheCallback(23, (coche)=>{
    console.log(coche)
    getFeatures(coche.model, (features)=>{
        console.group(features)
    })
    //llamamos a get Caracteristicas

})

//1 Callback
//Añadimos el parametro callback en la funcion, y 
//el callback es una funcion que vamos a llamar
//cuando tengamos el resutlado de la base de datos
function getCocheCallback(id, callback){
    //setTimeout simula el tiempo de petición
    //a una base de datos real
    setTimeout(()=>{
        console.log("obteniendo coche 23 de nuestra db")
        callback({id: 23, modelo: 'X3'})
    }, 1000)
}

//Una vez tenemos el coche, queremos acceder
//a toda la información que tiene ese coche
//velocidad maxima, consumos, tamaños, deposito
//etc.

function getFeatures(model, callback){
    setTimeout(()=>{
        console.log('caracteristicas modelo de base datos')
        callback({speed: 200, seat: 5, size: '3*4'})
    }, 1000)
    
}




//Esto es lo que se llama el infierno de 
//Callback, es decir llamar una y otra vez
//a callback con los datos que obtienes de la
//llamada anterior. 
getCocheCallback(23, (coche)=>{
    console.log(coche)
    getFeatures(coche.model, (features)=>{
        console.group(features)
    })
    //llamamos a get Caracteristicas

})


/*
El infierno de callback, se puede solucionar
en vez de utilizando funciones anonimas, funciones
con nombre
*/




function getCocheNameFuncion(id){
    getCocheCallback2(23, showCoche)
}

function showFeatures(features){
    console.log(features)
    getFeatures(coche.model, showFeatures)
}

function showCar(coche){
    console.log(coche)
}


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