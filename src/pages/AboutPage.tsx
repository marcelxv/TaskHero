import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { Text } from '@primer/react'
import { Box } from '@primer/react'

function AboutPage() {
  return (
    <Box min-height={'100vh'} height={'100vh'} margin={'1rem 0.6rem'}>
      <Header emoji="🦹" />
      <>
        <>
          <h5>Faça mais</h5>
          <h3>
            Adicione suas tarefas. Organize sua vida. Conquiste mais a cada dia.
          </h3>
          <Text as="p">
            Adicione tarefas como "Ler e-mails de trabalho todos os dias às 10h"
            ou preencha sua lista de tarefas em segundos usando o poderoso
            reconhecimento de linguagem natural do Todoist e as datas
            recorrentes.
          </Text>
        </>
        <>
          <h5>Conquiste</h5>
          <h3>
            Conquiste suas tarefas. Organize sua vida. Conquiste mais a cada
            dia.
          </h3>
          <Text as="p">
            Conquiste suas tarefas como "Ler e-mails de trabalho todos os dias
            às 10h" ou preencha sua lista de tarefas em segundos usando o
            poderoso reconhecimento de linguagem natural do Todoist e as datas
            recorrentes.
          </Text>
        </>
        <>
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
        </>
        <>
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
        </>
      </>
      <NavBar />
    </Box>
  );
}

export default AboutPage;
