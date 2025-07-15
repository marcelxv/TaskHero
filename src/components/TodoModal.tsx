import React, { useState, useRef } from "react";

interface ViaCEPResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  erro?: boolean;
}

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
  const [localZipCode, setLocalZipCode] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cepError, setCepError] = useState("");
  const numeroRef = useRef<HTMLInputElement>(null);
  const fetchCEP = async (cep: string) => {
    if (cep.length !== 8) return;
    
    setCepError("");
    
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: ViaCEPResponse = await response.json();
      
      if (data.erro) {
        setCepError("CEP não foi encontrado.");
        return;
      }
      
      setLogradouro(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      
      if (numeroRef.current) {
        numeroRef.current.focus();
      }
    } catch (error) {
      setCepError("Erro ao buscar CEP. Tente novamente.");
    }
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setLocalZipCode(value);
    setZipCode(value);
    
    if (value.length === 8) {
      fetchCEP(value);
    } else {
      setLogradouro("");
      setBairro("");
      setCidade("");
      setCepError("");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const fullAddress = `${logradouro}, ${numero}${complemento ? `, ${complemento}` : ""}, ${bairro}, ${cidade}`;
    setAddress(fullAddress);
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
                <span>CEP</span>
              </label>
              <input 
                placeholder="Digite o CEP (somente números)" 
                title="CEP" 
                type="text" 
                value={localZipCode}
                onChange={handleCEPChange}
                maxLength={8}
              />
              {cepError && <span style={{color: 'red', fontSize: '12px'}}>{cepError}</span>}
              
              <label>
                <span>Logradouro:</span>
              </label>
              <input 
                placeholder="Logradouro será preenchido automaticamente" 
                title="Logradouro" 
                type="text" 
                value={logradouro}
                readOnly
                style={{backgroundColor: '#f5f5f5'}}
              />
              
              <label>
                <span>Número:</span>
              </label>
              <input 
                ref={numeroRef}
                placeholder="Digite o número" 
                title="Número" 
                type="text" 
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
              
              <label>
                <span>Complemento:</span>
              </label>
              <input 
                placeholder="Apartamento, bloco, etc. (opcional)" 
                title="Complemento" 
                type="text" 
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
              
              <label>
                <span>Bairro:</span>
              </label>
              <input 
                placeholder="Bairro será preenchido automaticamente" 
                title="Bairro" 
                type="text" 
                value={bairro}
                readOnly
                style={{backgroundColor: '#f5f5f5'}}
              />
              
              <label>
                <span>Cidade:</span>
              </label>
              <input 
                placeholder="Cidade será preenchida automaticamente" 
                title="Cidade" 
                type="text" 
                value={cidade}
                readOnly
                style={{backgroundColor: '#f5f5f5'}}
              />
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
