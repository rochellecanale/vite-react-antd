import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import todoReducer from './todos'

export default configureStore({
    reducer: {
        counter: counterReducer,
        todosList: todoReducer
    }
})