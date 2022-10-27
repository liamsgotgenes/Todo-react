import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, priority, setPriority}) => {
    // 
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000,
                priority: priority
            }

        ])
        setInputText("")
    }

    const priorityHandler = (e) => {
        setPriority(e.target.value)
    }

    return (
        <form>
            <input 
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input" 
            />

            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square" />
            </button>
            <div onClick={priorityHandler} className="select-priority">
                <select className="todo-priority" defaultValue="normal">
                    <option value="urgent">Urgent</option>
                    <option value="normal">Normal</option>
                    <option value="not-urgent">Not Urgent</option>
                </select>
            </div>

        </form>
    )
}

export default Form