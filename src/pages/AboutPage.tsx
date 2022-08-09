import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 200px;
  padding: 1rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 0px 15px -1px whitesmoke;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  box-shadow: 0px 0px 5px -1px darkslateblue;
`;

function AboutPage() {
  return (
    <>
      <Header emoji="🦹" />
      <Wrapper>
        <Card>
          <h5>Faça mais</h5>
          <h3>
            Adicione suas tarefas. Organize sua vida. Conquiste mais a cada dia.
          </h3>
          <p>
            Adicione tarefas como "Ler e-mails de trabalho todos os dias às 10h"
            ou preencha sua lista de tarefas em segundos usando o poderoso
            reconhecimento de linguagem natural do Todoist e as datas
            recorrentes.
          </p>
        </Card>
        <Card>
          <h5>Conquiste</h5>
          <h3>
            Conquiste suas tarefas. Organize sua vida. Conquiste mais a cada
            dia.
          </h3>
          <p>
            Conquiste suas tarefas como "Ler e-mails de trabalho todos os dias
            às 10h" ou preencha sua lista de tarefas em segundos usando o
            poderoso reconhecimento de linguagem natural do Todoist e as datas
            recorrentes.
          </p>
        </Card>
        <Card>
          <h5>Organize</h5>
          <h3>
            Adicione suas tarefas. Organize sua vida. Conquiste mais a cada dia.
          </h3>
          <p>
            Adicione tarefas como "Ler e-mails de trabalho todos os dias às 10h"
            ou preencha sua lista de tarefas em segundos usando o poderoso
            reconhecimento de linguagem natural do Todoist e as datas
            recorrentes.
          </p>
        </Card>
        <Card>
          <h5>Conquiste</h5>
          <h3>
            Conquiste suas tarefas. Organize sua vida. Conquiste mais a cada
            dia.
          </h3>
          <p>
            Conquiste suas tarefas como "Ler e-mails de trabalho todos os dias
            às 10h" ou preencha sua lista de tarefas em segundos usando o
            poderoso reconhecimento de linguagem natural do Todoist e as datas
            recorrentes.
          </p>
        </Card>
      </Wrapper>
      <NavBar />
    </>
  );
}

export default AboutPage;
