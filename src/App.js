import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList'
import Filter from './components/Filter';

function App() {
  // State
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [priority, setPriority] = useState("normal")
  const [priorityFilter, setPriorityFilter] = useState("all")
  
  
  // Run once when app starts
  useEffect(() => {
    getLocalTodos()
  }, [])

  // Call filterHandler and saveLocalTodos
  // every time state for todos and status change
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status, priorityFilter])


  // Functions
  const filterHandler = () => {
    var filteredByStatus = []
    var filteredByPriority = []
    switch (status) {
      case "completed":
        filteredByStatus = todos.filter(item => item.completed === true)
        break
      case "uncompleted":
        filteredByStatus = todos.filter(item => item.completed !== true)
        break
      case "all":
        filteredByStatus = todos
        break
    }
    switch (priorityFilter) {
      case "all":
        filteredByPriority = filteredByStatus.slice()
        break
      default:
        filteredByPriority = filteredByStatus.filter(item => item.priority === priorityFilter)
        break
    }
    setFilteredTodos(filteredByPriority)
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
        priority={priority}
        setPriority={setPriority}
      />
      <Filter
        setStatus={setStatus}
        setPriorityFilter={setPriorityFilter}
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
