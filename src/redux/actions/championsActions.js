import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getChampions } from "../../services/championsQueries";

export const load = createAction( 'loadChampions', (champions) => {
    return {
        payload: champions
    }
} )

export const filterByName = createAction( 'filterByName', ( value ) =>{
    return {
        payload : value
    }
} )

export const loadAsync = createAsyncThunk( 'loadAsync', async() => {
    const personajes = await getChampions()
    return personajes
})