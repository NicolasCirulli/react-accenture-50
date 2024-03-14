import { createReducer } from "@reduxjs/toolkit";
import { filterByName, load } from '../actions/championsActions'
const initialState = {
    all: [],
    filtered: [],
    search: ""
}


const reducer = createReducer( initialState, ( builder ) => {
    builder.addCase( load, ( state, action ) => {
        return { ...state, all: action.payload, filtered: action.payload }
    } ).addCase( filterByName, (state, action) => {
        const fnFilter = (champion) => champion.name.toLowerCase().startsWith(action.payload.toLowerCase()) 
        const aux = state.all.filter( fnFilter )
        return { ...state, filtered: aux, search: action.payload }
    })
} )

export default reducer