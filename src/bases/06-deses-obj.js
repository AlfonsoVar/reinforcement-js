const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}
const retornaPersona = ({clave, nombre, edad, rango = 'Capitan'})=> {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        enios: edad,
        coordenadas:{
            lat:14.7476243,
            lng:-12.7523752
        }
    }
}
const {nombreClave, enios, coordenadas:{lat, lng}} = retornaPersona(persona);

console.log(lat, lng)
console.log(nombreClave, enios)