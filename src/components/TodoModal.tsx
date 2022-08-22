import React from "react";
import { Dialog, Box, TextInput, Button, FormControl } from "@primer/react";
import { SearchIcon, HomeFillIcon } from "@primer/octicons-react";
function TodoModal({
  isModalOpen,
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
  const returnFocusRef = React.useRef(null);

  return (
    <Dialog
      className="modal"
      returnFocusRef={returnFocusRef}
      isOpen={isModalOpen}
      onDismiss={() => setIsModalOpen(false)}
      aria-labelledby="header-id"
    >
      <Box>
        <Dialog.Header>{ModalTitle}</Dialog.Header>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"3rem"}
        >
          {ModalTitle === "Local" ? (
            <Box>
              <FormControl>
                <FormControl.Label>Onde a tarefa será feita?</FormControl.Label>
                <TextInput
                  placeholder="Digite o local da Task"
                  title="Local"
                  leadingVisual={HomeFillIcon}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Qual o CEP?</FormControl.Label>
                <TextInput
                  placeholder="Digite o CEP da Task"
                  title="Cep"
                  leadingVisual={SearchIcon}
                  type="text"
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </FormControl>
            </Box>
          ) : (
            <Box>
              <FormControl>
                <FormControl.Label>
                  Qual dia pretende entregar?
                </FormControl.Label>
                <TextInput
                  title="data"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>A que horas?</FormControl.Label>
                <TextInput
                  title="hora"
                  placeholder="Escolha a hora"
                  type="time"
                  onChange={(e) => setTime(e.target.value)}
                />
              </FormControl>
            </Box>
          )}
          <Box className="modal-footer">
            <Button
              className="btn-check"
              onClick={(e: any) => {
                handleSubmit(e);
              }}
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default TodoModal;
