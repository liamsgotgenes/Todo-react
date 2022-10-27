import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = (e) => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    const completeHandler = (e) => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))        
    }

    function getIcon(priority) {
        var iconName = ""
        switch(priority) {
            case "urgent":
                iconName = "fa-exclamation"
                break
            case "normal":
                break
            case "not-urgent":
                iconName = "fa-thumbs-up"
                break
        }
        return iconName
    }

    return (
        <div className="todo">
            {/* Below line add multiple classes, dependant on if todo.completed is true */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button className={`${todo.priority}-btn`}>
                <i className={`fas ${getIcon(todo.priority)}`}></i>
            </button>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
