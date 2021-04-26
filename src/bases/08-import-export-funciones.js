import heroes from '../data/heroes';

export const getHeroeById = id => heroes.find( item => item.id === id )

export const getHeroeByOwner = owner => heroes.filter( item => item.owner === owner )
 