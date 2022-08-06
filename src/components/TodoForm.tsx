import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import styled from "styled-components";

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const [prior, setPrior] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addTodo(value, prior);
    setValue("");
  };

  const setPriorOnInput = () => {
    switch (prior) {
      case "low":
        return "input-form low";
      case "normal":
        return "input-form normal";
      case "high":
        return "input-form high";
      default:
        return "input-form";
    }
  }
  
  const TagSelector = styled.div`
    height: 2rem;
    border: none;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fontFamily};
  `;


  const Tag = styled.button`
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fontFamily};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
    }
  `;

  const FormTodo = {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: space-between;
    // padding: 1rem;
    // background-color: ${(props) => props.theme.colors.secondary};
  };

  return (
  <div className="todo"> 
    {/* bug do styled-component */}
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        name="todo"
        placeholder={`Adicionar tarefa`}
        type="text"
        className={setPriorOnInput()}
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <button
        disabled={value ? false : true}
        data-testid="add-task-button"
        className="btn"
        type="submit"
      >
        Adicionar
      </button>
      <TagSelector>
        <Tag onClick={() => setPrior('high')}>Importante</Tag>
        <Tag onClick={() => setPrior('normal')}>Normal</Tag>
        <Tag onClick={() => setPrior('low')}>Tranquilo</Tag>
      </TagSelector>
    </form>
  </div>
);
}
export default TodoForm;
