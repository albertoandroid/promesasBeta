/*
Por lo general necesitas hacer varias llamadas
a apis distintas ejemplo, faceboo, twitter y cuando
todas acaban quieres hacer algo en ese momento
y no antes. En ese momento devuelve algo
al cliente
*/

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('leyendo datos de coches de google')
        resolve(1)
    },1000)
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('leyendo datos de motos de google')
        resolve(2)
    },1000)
})

//Cuando se completen las dos promesas queremos
//hacer algo a través del metodo all
//que se le pasa un array de promesas
//y nos devuelve un resolved
//cuando todas acaben.

Promise.all([p1, p2])
    .then(result=>console.log(result))
    .catch(err => console.log('Error', err.message))

    //Estamos trabajando con un hilo
    //recordar, 
    //lo que nos devuelve es un array
    //con el valor de cada promesa
    //en este caso como tenemos dos
    //el primer valor del array es de la 
    //promesa 1 y el segundo de la promesa2
    //Si alguna promesa es rejectect
    //lo que nos devuelve es el mensaje de error
    //y da igual las que acabaran correctamente


    //como hemos visto Promise.all() acaba cuando
    //todas acaban,
    //pero aveces quieres consumir la promsea
    //nada más se haya acabado, sin esperar al 
    //resto, para ello tenemos race, pero no 
    //obtenemos el resto, sino solo la primera
    


    Promise.race([p1, p2])
    .then(result=>console.log(result))
    .catch(err => console.log('Error', err.message))