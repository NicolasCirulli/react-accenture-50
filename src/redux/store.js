import { configureStore } from '@reduxjs/toolkit'
import championsReducer from './reducers/championsReducer'
const store = {
    champions : championsReducer
}

export default configureStore( {
    reducer: store
} )