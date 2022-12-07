import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        isLoaded: false
    },
    reducers: {
        setTodos: (state, actions) => {
            state.todos = actions.payload
        },
        addTodo: (state, action) => {
            console.log('action', action)
        },
        deleteTodo: (state, action) => {

        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload
        }
    }
})

export const { setTodos, addTodo, deleteTodo, setIsLoaded } = todosSlice.actions
export default todosSlice.reducer