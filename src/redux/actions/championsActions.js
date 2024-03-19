import { createAction } from "@reduxjs/toolkit";

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