import React, { useState } from "react";
import { Todo } from "../types";
import Modal from "./ActionModal";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import {
  Box,
  Button,
  TextInput,
  } from "@primer/react";

function TodoItem({ todo, index }: { todo: Todo; index: number }) {
  const { removeTodo, completeTodo, editTodo, saveTodo } = useContext(
    TodoContext
  );

  const [modalKind, setModalKind] = useState("");
  const [value, setValue] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isCompleted = handleComplete();
  const openModal = handleModal();
  const isTooLong = handleTextInput();
  const isEditable = handleEdit();

  return (
    <Box className={todoState()} borderWidth={2} boxShadow={[ "0px 8px 24px rgba(140, 149, 159, 0.2)"
    , "0px 8px 24px rgba(140, 149, 159, 0.2)" , ]} borderRadius={["30px", "30px" ]} p={3}   sx={{
      cursor: "pointer",
    }}>
      {todo.isEditing ? (
        <Box className="form-edit">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveTodo(index, value);
            }}
          />
          <TextInput
            title="edit-input"
            sx={
              {
                backgroundColor: "slateblue",
                border: "none",
                color: "white",
                width: "240px",
                padding: "4px 5px",
              }
            }
            placeholder=""
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Box>
      ) : (
        <span className="todo-input">{isTooLong(todo.text as any)}{setPriorEmoji()}</span>
      )}
      <Box className="buttons">
        {todo.isEditing ? (
          <>
            <button
              className="btn-check"
              onClick={() => saveTodo(index, value)}
            >
              👍🏻
            </button>
            <button
              className="btn-check"
              onClick={() => {
                openModal("cancel");
              }}
            >
              👎🏻
            </button>
          </>
        ) : (
          isEditable()
        )}
        {todo.isEditing ? null : (
          <>
            <button className="btn-check" onClick={() => completeTodo(index)}>
              {isCompleted()}
            </button>
            <button className="btn-check" onClick={() => openModal("remove")}>
              ✖️
            </button>
          </>
        )}
      </Box>

      {isModalOpen ? (
        <Modal
          todo={todo}
          text={todo.text}
          modalKind={modalKind}
          setIsModalOpen={setIsModalOpen}
          removeTodo={removeTodo}
          index={index}
        />
      ) : null}
    </Box>
  );

  function handleComplete() {
    return () => {
      if (todo.isCompleted) {
        return "🔙";
      }
      return "✅";
    };
  }

  function handleEdit() {
    return () => {
      if (!todo.isCompleted) {
        return (
          <button className="btn-check" onClick={() => editTodo(index)}>
            ✏️
          </button>
        );
      } else {
        return null;
      }
    };
  }

  function setPriorEmoji () {
    switch (todo.priority) {
      case "low":
        return "  🟢";
      case "normal":
        return "  🔹";
      case "high":
        return "  🔺";
      default:
        return "";
    }
  }

  function handleTextInput() {
    return (text: string) => {
      if (text.length > 20) {
        return (
          <>
            <span>{text.substring(0, 20)}</span>
            <button className="btn-check" onClick={() => openModal("readMore")}>
              ...
            </button>
          </>
        );
      }
      return text;
    };
  }

  function handleModal() {
    return (kind: string) => {
      if (kind === "remove") {
        setIsModalOpen(true);
        setModalKind("remove");
      } else if (kind === "cancel") {
        setIsModalOpen(true);
        setModalKind("cancel");
      } else {
        setIsModalOpen(true);
        setModalKind("edit");
      }
    };
  }

  function todoState(): string | undefined {
    if (todo.isEditing) {
      return "todo-edit";
    } else if (todo.isCompleted && !todo.isEditing) {
      return `todo todo-completed`;
    } else {
      return "todo";
    }
  }
}
export default TodoItem;
