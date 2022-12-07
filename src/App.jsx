import './App.css'
import { Col, Row } from 'antd'
import Counter from './components/Counter'
import TodosList from './components/Todos/TodosList'
import Users from './components/Users/Users'
import TestComponent from './components/Users/TestComponent'

function App() {
  return (
    <>  
      {/* <TodosList /> */}
	  <Users />
	  <TestComponent />
    </>
  )
}

export default App
