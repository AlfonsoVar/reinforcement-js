//import {heroes} from './Data/heroes';
//import {heroes} from './Data/heroes'

import heroes, {owners} from "../Data/heroes"

const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id)
}

const getHeroeByOwner = (owner) => {
    return heroes.filter(heroes => heroes.owner === owner)
}
//console.log(getHeroeByOwner('Marvel'))
// console.log(owners)

export{
    getHeroeById as default,
    getHeroeByOwner
}