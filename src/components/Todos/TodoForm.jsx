import React from 'react'
import { Button, Form, Input } from 'antd'
import { addTodo } from '../../redux/todos'
import { useDispatch } from 'react-redux'

function TodoForm(props) {

    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        const data = dispatch(addTodo(values))
    }

    return (
        <>
            <br /><br />
            <Form
                name="todoForm"
                onFinish={handleSubmit}
            >
                <Form.Item
                    label="Title"
                    name="title"
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">Add Todo</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default TodoForm
