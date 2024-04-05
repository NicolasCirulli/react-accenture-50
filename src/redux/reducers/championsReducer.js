import { createReducer } from "@reduxjs/toolkit";
import { filterByName, load, loadAsync } from '../actions/championsActions'
const initialState = {
    all: [],
    filtered: [],
    search: "",
    loading: false
}


const reducer = createReducer( initialState, ( builder ) => {
    builder
    .addCase( load, ( state, action ) => {
        return { ...state, all: action.payload, filtered: action.payload }
    } )
    .addCase( filterByName, (state, action) => {
        const fnFilter = (champion) => champion.name.toLowerCase().startsWith(action.payload.toLowerCase()) 
        const aux = state.all.filter( fnFilter )
        return { ...state, filtered: aux, search: action.payload }
    })
    .addCase( loadAsync.pending, (state, action) => {
        return {...state, loading: true}
    } )
    .addCase( loadAsync.fulfilled, (state, action) =>{
        return { ...state, all: action.payload, filtered: action.payload, loading: false }
    } )
    .addCase( loadAsync.rejected, ( state, action) => {
        return {...state, loading: false}
    } )
} )

export default reducer