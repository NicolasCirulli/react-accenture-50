import axios from 'axios'

export const getChampions = async () => {
    try{
        const respuesta = await axios("http://localhost:5000/api/personajes")
        return respuesta.data
    }catch( err){
        return []
    }
}

export const getChampionById = async ( id ) => {
    try {
        const respuesta = await axios( 'http://localhost:5000/api/personajes/' + id )
        return respuesta.data
    } catch (error) {
        return {}
    }
}

/* http://localhost:4000/api/personajes/ + params.id  */