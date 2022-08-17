import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import AddressModal from "./TodoModal";

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const [prior, setPrior] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalTitle, setModalTitle] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleModal = (kind: string) => {
    setModalTitle(kind);
    setIsModalOpen(true);
  }    

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addTodo(value, prior, address, zipCode, date, time);
    setValue("");
    setPrior("");
    setTime("");
    setDate("");
    setAddress("");
    setZipCode("");
    setModalTitle("");
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

  return (
  <section className="todo-form-wrapper"> 
    <form className="todo-form" onSubmit={handleSubmit}>
    <h3>Descreva a tarefa</h3>
      <input
        name="todo"
        placeholder={`Adicionar tarefa`}
        type="text"
        className={setPriorOnInput()}
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <>
        <button className={date && time ? "selected" : ""} onClick={() => handleModal("Data")}>📅</button>
        <button className={address && zipCode ? "selected" : ""} onClick={() => handleModal("Local")}>📍</button>
      </>
      <h3>Informe a prioridade</h3>
      <>
        <button className={prior === "high" ? "selected" : ""} onClick={() => setPrior('high')}>🔺</button>
        <button className={prior === "normal" ? "selected" : ""} onClick={() => setPrior('normal')}>🔹</button>
        <button className={prior === "low" ? "selected" : ""} onClick={() => setPrior('low')}>🟢</button>
      </>
        <div>
          {isModalOpen && 
          <AddressModal
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen} 
          ModalTitle={ModalTitle}
          address={address}
          setAddress={setAddress}
          zipCode={zipCode}
          setZipCode={setZipCode}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          />
          }
        </div>
        <button
        disabled={value ? false : true}
        data-testid="add-task-button"
        className="btn"
        type="submit"
      >
        Adicionar
      </button>
    </form>
  </section>
);
}
export default TodoForm;
