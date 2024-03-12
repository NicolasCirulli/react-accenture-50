import axios from 'axios'

export const getChampions = async () => {
    try{
        const respuesta = await axios("http://localhost:4000/api/personajes")
        return respuesta.data
    }catch( err){
        return []
    }
}

 

