import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col, Button, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { setTodos, setIsLoaded } from '../../redux/todos'
import TodoForm from './TodoForm'

function TodosList() {

    const { todos, isLoaded } = useSelector(state => state.todosList)
    const dispatch = useDispatch()
    const [ showForm, setShowForm ] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
        .then(response => {
            if(response.status == 200 && response.data) {
                dispatch(setTodos(response.data))
                dispatch(setIsLoaded(true))
            }
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <>
            <h1>Todo List</h1>
            { setIsLoaded ? (
                <List
                size="large"
                header={<div>Items</div>}
                bordered
                dataSource={todos}
                renderItem={ (item) => (
                    <List.Item>
                        {item.title}
                    </List.Item>
                )}
                />
            ) : null }

            <br />
            <Button size="large" onClick={() => setShowForm(!showForm) }>Show Form</Button>

            { showForm ? (<TodoForm />) : null }
            
        </>
    )
}

export default TodosList
