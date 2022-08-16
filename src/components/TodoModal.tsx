import React from "react";

function TodoModal({
  setIsModalOpen,
  ModalTitle,
  setTime,
  setDate,
  setAddress,
  setZipCode,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  ModalTitle: string;
  time: string;
  setTime: (time: string) => void;
  date: string;
  setDate: (date: string) => void;
  address: string;
  setAddress: (address: string) => void;
  zipCode: string;
  setZipCode: (zipCode: string) => void;
}) {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsModalOpen(false);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close" onClick={() => setIsModalOpen(false)}>
            &times;
          </button>{" "}
          <h2>{ModalTitle}</h2>
        </div>
        {ModalTitle === "Local" ? (
          <div className="modal-body">
            <form action="submit">
              <label>
                <span>Local:</span>
              </label>
              <input placeholder="Digite o local da Task" title="Local" type="text" onChange={(e) => setAddress(e.target.value)} />
              <label>
                <span>CEP</span>
              </label>
              <input placeholder="Digite o CEP da Task" title="CEP" type="text" onChange={(e) => setZipCode(e.target.value)} />
              <button
                className="btn-check"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Salvar
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-body">
            <label>
              <span>Data</span>
            </label>
            <input title="data" type="date" onChange={(e) => setDate(e.target.value)} />
            <label>
              <span>Hora</span>
            </label>
            <input title="hora" placeholder="Escolha a hora" type="time" onChange={(e) => setTime(e.target.value)} />
          </div>
        )}
        <div className="modal-footer">
          <button
            className="btn-check"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoModal;
