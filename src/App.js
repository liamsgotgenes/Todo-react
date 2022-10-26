import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList'

function App() {
  // State
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  
  // Run once when app starts
  useEffect(() => {
    getLocalTodos()
  }, [])

  // Call filterHandler and saveLocalTodos
  // every time state for todos and status change
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  // Functions
  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(item => item.completed === true))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter(item => item.completed !== true))
        break
      case "all":
        setFilteredTodos(todos)
        break
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") !== null) {
      let localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Liam's Todo List</h1>
      </header>
      <Form 
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
