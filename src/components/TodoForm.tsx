import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import AddressModal from "./TodoModal";
import { Box, Text, Button, CircleBadge } from "@primer/react";

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

  const handleModal = (e: { preventDefault: () => void }, kind: string) => {
    e.preventDefault();
    setModalTitle(kind);
    setIsModalOpen(true);
  };

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
  };

  return (
    <Box
      backgroundColor={"#eee"}
      borderRadius={"30px"}
      padding={"2rem 0"}
      margin={"20px"}
    >
      <form className="todo-form" onSubmit={handleSubmit}>
        <Box width={'100%'}display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
          <input
            name="todo"
            placeholder={`Adicionar tarefa`}
            type="text"
            className={setPriorOnInput()}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            size={30}
            className={date && time ? "selected" : ""}
            onClick={(e: any) => handleModal(e, "Data")}
          >
            📅
          </Button>
          <Button
            size={30}
            className={address && zipCode ? "selected" : ""}
            onClick={(e: any) => handleModal(e, "Local")}
          >
            📍
          </Button>
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
          <CircleBadge
            sx={{ cursor: ["pointer"], margin: ["0 1rem"] }}
            size={40}
            variant={"small"}
            className={prior === "high" ? "selected" : ""}
            onClick={() => setPrior("high")}
          >
            🔺
          </CircleBadge>
          <CircleBadge
            sx={{ cursor: ["pointer"], margin: ["0 1rem"] }}
            size={40}
            variant={"small"}
            className={prior === "normal" ? "selected" : ""}
            onClick={() => setPrior("normal")}
          >
            🔹
          </CircleBadge>
          <CircleBadge
            sx={{ cursor: ["pointer"], margin: ["0 1rem"] }}
            size={40}
            variant={"small"}
            className={prior === "low" ? "selected" : ""}
            onClick={() => setPrior("low")}
          >
            🟢
          </CircleBadge>
        </Box>
        <div>
          {isModalOpen && (
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
          )}
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
    </Box>
  );
}
export default TodoForm;
