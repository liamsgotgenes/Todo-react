import React from "react";

const Filter = ({setStatus, setPriorityFilter}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const priorityHandler = (e) => {
        setPriorityFilter(e.target.value)
    }

    return (
        <div>
            <form>
                <div onClick={statusHandler} className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div onClick={priorityHandler} className="select">
                    <select name="priorityFilter" className="filter-todo">
                        <option value="all">All</option>
                        <option value="urgent">Urgent</option>
                        <option value="normal">Normal</option>
                        <option value="not-urgent">Not Urgent</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filter