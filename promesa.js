//const p = new Promise(function(resolve, reject){

//})
//Promesas para codigo asincrono
/*
Una promesa es un objeto que representa la 
terminación o el fracoso eventual de una operacion
asincrona. 
*/

//Si es como se crea una promesa
const p = new Promise((resolve, reject)=>{
    //async work

    //si lo hace correctamente, devuelve el dato
    //que queremos
    setTimeout(()=>{
        //Si todo ok, devolvemos resultado con 
        //el metodo resolve y devolvemos
        //los datos que quermarmos
        //resolve(1);
        //si la promesa ha sido rechazada, por 
        //cualquier tipo de error, utilizamos 
        //reject
        reject(new Error('Se ha producido un error'))
    }, 1000)
    

    
})
//Asi es como consumimos una promesa
//then para obtener el resultado cuando ha sido
//resuelta la promera y completada satisfactoriamente
//catch cuando la promesa ha sido rechazada es 
//decir ha dado error
p
    .then(result => console.log('Result: ' + result))
    .catch(err=> console.log('Error: ' + err.message))
    