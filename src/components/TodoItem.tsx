import React, { useState } from "react";
import { Todo } from "../types";
import Modal from "./ActionModal";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

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
    <div className={todoState()}>
      {todo.isEditing ? (
        <div className="form-edit">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveTodo(index, value);
            }}
          />
          <input
            title="edit-input"
            placeholder=""
            type="text"
            className="input-edit"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      ) : (
        <span className="todo-input">{isTooLong(todo.text as any)}{setPriorEmoji()}</span>
      )}
      <div className="buttons">
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
      </div>

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
    </div>
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
