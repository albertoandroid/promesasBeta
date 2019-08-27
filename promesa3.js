//devolvemos una promesa que esta
//resuelta, util para unitTest
const p = Promise.resolve({id: 1})
p.then(result => console.log(result))

const p1 = Promise.reject(new Error('Error por motivo Unit Test'))
p1.catch(error => console.log(error))
