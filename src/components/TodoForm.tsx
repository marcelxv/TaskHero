import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import AddressModal from "./TodoModal";
import {
Box,
Button,
Select,
FormControl,
TextInput,
} from "@primer/react";

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
<Box>
  <Box background={["#FFFFFF", "#FFFFFF" ]} boxShadow={[ "0px 8px 24px rgba(140, 149, 159, 0.2)"
    , "0px 8px 24px rgba(140, 149, 159, 0.2)" , ]} borderRadius={["30px", "30px" ]} display={"flex"}
    flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={["50px", "20px" ]}>
    <Box minWidth={"350px"}>
      <Box>
        <FormControl>
          <FormControl.Label>O que você deseja fazer?</FormControl.Label>
          <TextInput name="todo" placeholder={`Algo incrível que você deseja fazer`} type="text"
            className={setPriorOnInput()} value={value} onChange={(e)=> setValue(e.target.value)}
            />
        </FormControl>

      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} marginBottom={"0.6rem"}>
        <Button className={date && time ? "selected" : "" } onClick={(e: any)=> handleModal(e, "Data")}
          >
          📅
        </Button>
        <Button className={address && zipCode ? "selected" : "" } onClick={(e: any)=> handleModal(e, "Local")}
          >
          📍
        </Button>
        <Select onChange={(e)=> setPrior(e.target.value)}
          placeholder={"Qual a prioridade?"}
          >
          <Select.Option value="low">Baixa</Select.Option>
          <Select.Option value="normal">Normal</Select.Option>
          <Select.Option value="high">Alta</Select.Option>
        </Select>
      </Box>
    </Box>
    <Box>
      {isModalOpen && (
      <AddressModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} ModalTitle={ModalTitle} address={address}
        setAddress={setAddress} zipCode={zipCode} setZipCode={setZipCode} date={date} setDate={setDate} time={time}
        setTime={setTime} />
      )}
    </Box>
    <Button variant="primary" size="large" disabled={value ? false : true} type="submit" sx={{ width: "100%" }}
      onClick={handleSubmit}>
      Adicionar
    </Button>
  </Box>
</Box>
);
}
export default TodoForm;