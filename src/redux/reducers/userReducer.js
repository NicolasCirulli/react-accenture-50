import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/userAction";

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
} )

export default userReducer