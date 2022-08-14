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
    setPrior("");
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
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 1rem;
    font-family: ${(props) => props.theme.fontFamily};
  `;


  const Tag = styled.button`
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary}
    color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fontFamily};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
    }
    &.selected {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
    }
  `;

  // const FormTodo = {
  //   // display: flex;
  //   // flex-direction: column;
  //   // align-items: center;
  //   // justify-content: space-between;
  //   // padding: 1rem;
  //   // background-color: ${(props) => props.theme.colors.secondary};
  // };

  return (
  <section className="todo-form-wrapper"> 
    {/* bug do styled-component */}
    <form className="todo-form" onSubmit={handleSubmit}>
    <h3>Descreva a tarefa</h3>
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
      <h3>Informe a prioridade</h3>
      <TagSelector>
        <Tag className={prior === "high" ? "selected" : ""} onClick={() => setPrior('high')}>🔺</Tag>
        <Tag className={prior === "normal" ? "selected" : ""} onClick={() => setPrior('normal')}>🔹</Tag>
        <Tag className={prior === "low" ? "selected" : ""} onClick={() => setPrior('low')}>🟢</Tag>
      </TagSelector>
    </form>
  </section>
);
}
export default TodoForm;
