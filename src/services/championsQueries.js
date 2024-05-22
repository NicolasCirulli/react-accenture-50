import axios from 'axios'

const api = import.meta.env.VITE_APP_API

export const getChampions = async () => {
    try{
        const respuesta = await axios(api+"api/personajes")
        return respuesta.data
    }catch( err){
        return []
    }
}

export const getChampionById = async ( id ) => {
    try {
        const respuesta = await axios( api+'api/personajes/' + id )
        return respuesta.data
    } catch (error) {
        return {}
    }
}

/* http://localhost:4000/api/personajes/ + params.id  */