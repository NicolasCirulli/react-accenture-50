import { createReducer } from "@reduxjs/toolkit";
import { login, logout, update } from "../actions/userAction";

const initialState = {
    user: {}
}



const userReducer = createReducer( initialState, ( builder ) => {
    builder
        .addCase( login, ( state, action ) => {
            return {...state, user: action.payload}
        } )
        .addCase( logout, (state, action) => {
            return initialState
        } )
        .addCase( update, (state, action) => {
            const aux = {...action.payload}
            delete aux.token
            const newStore = Object.assign( {}, state.user, aux )
            return {...state, user: newStore}
        } )
} )

export default userReducer