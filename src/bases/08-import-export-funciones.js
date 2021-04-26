import { heroes } from './data/heroes';

const getHeroeById = id => heroes.find( item => item.id === id ) ? true : false
console.log(getHeroeById(2));

const getHeroeByOwner = owner => heroes.filter( item => item.owner === owner )
console.log(getHeroeByOwner('DC'));