import React from "react";

function Modal({
  todo,
  text,
  modalKind,
  setIsModalOpen,
  removeTodo,
  index,
}: {
  todo: any;
  text: string | number | readonly string[] | undefined;
  modalKind: any;
  setIsModalOpen: (isModalOpen: boolean) => void;
  removeTodo: (index: number) => void;
  index: number;
}) {
  const cancelEdit = () => {
    setIsModalOpen(false);
    todo.isEditing = false;
    console.log(todo.isEditing);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setIsModalOpen(false)}>
          &times;
        </span>
        {modalKind === "remove" ? (
          <>
            <p className="modal-text">
              VocÃª tem certeza que deseja remover essa task?
            </p>
            <button
              className="btn-check"
              onClick={() => {
                removeTodo(index);
                setIsModalOpen(false);
              }}
            >
              ðð»
            </button>
            <button className="btn-check" onClick={() => setIsModalOpen(false)}>
              ðð»
            </button>
          </>
        ) : modalKind === "cancel" ? (
          <>
            <p className="modal-text">VocÃª tem certeza que deseja cancelar?</p>
            <button className="btn-check" onClick={() => cancelEdit()}>
              ðð»
            </button>
            <button className="btn-check" onClick={() => setIsModalOpen(false)}>
              ðð»
            </button>
          </>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
}

export default Modal;
