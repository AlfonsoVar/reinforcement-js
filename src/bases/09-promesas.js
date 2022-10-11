import getHeroeById from './bases/08-imp-exp'

/*const promesa = new Promise((resolve, reject) => {
    setTimeout(()=> {
        //Tarea:importar el getHeroeById
        const heroe = getHeroeById(2)
        resolve(heroe)
        //reject('No se pudo resivir el heroe')
        //console.log('2 segundo despues')
    }, 2000)
});

promesa.then(()=>{
    console.log('then promesa')
})
.catch(err => console.warn(err)); */
const getHeroeByAsync = (id) => {
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const p1 = getHeroeById(id);
            if(p1){
                resolve (p1)
            }else{
                reject('No se encontro el heroe')
            }
        }, 2000)
     });
}

getHeroeByAsync(5)
    .then(console.log)
    .catch(console.warn)