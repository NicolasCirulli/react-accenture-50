import { configureStore } from '@reduxjs/toolkit'
import championsReducer from './reducers/championsReducer'
import userReducer from './reducers/userReducer'
const store = {
    champions : championsReducer,
    user: userReducer
}

export default configureStore( {
    reducer: store
} )