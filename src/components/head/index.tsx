import React from "react";
import { Selector } from "../selector";

import { Container, Content, Title } from "./styles";

export const Head: React.FC = () => {
  const panOptions = [
    { id: 1, label: "Rotacionar -90°" },
    { id: 2, label: "Rotacionar -45°" },
    { id: 3, label: "Repousar" },
    { id: 4, label: "Rotacionar 45°" },
    { id: 5, label: "Rotacionar 90°" },
  ];

  const tiltOptions = [
    { id: 1, label: "Para Cima" },
    { id: 2, label: "Repousar" },
    { id: 3, label: "Para Baixo" },
  ];

  return (
    <Container>
      <Title>Cabeça</Title>
      <Content>
        <Selector label="Rotação" options={panOptions} />
        <Selector label="Inclinação" options={tiltOptions} />
      </Content>
    </Container>
  );
};
