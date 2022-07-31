import React from "react";
import "../App.css";


function TodoCounter({ todos }) {
    const completedListCounter = todos.filter(todo => todo.isCompleted).length;
    return (
    <div className="counter">
        <h6>Tarefas: {todos.length} </h6>
        <h6>Tarefas completas: {completedListCounter}</h6>
    </div>
    );
}

export default TodoCounter;