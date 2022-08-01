import React from "react";
import "../App.css";


function TodoCounter({ todos }) {
    const completedListCounter = todos.filter(todo => todo.isCompleted).length;
    const isAllCompleted = todos.length === completedListCounter && todos.length > 0 ? '👏' : "";
    return (
    <div className="counter">
        <h6>Tarefas: {todos.length} </h6>
        <div className="counter-congrats"><span className="clap">{isAllCompleted}</span></div>
        <h6>Tarefas completas: {completedListCounter}</h6>
    </div>
    );
}

export default TodoCounter;