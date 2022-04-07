import React from "react";

import { Selector } from "../../selector";

import { Container, Content, Title } from "./styles";

export const Right: React.FC = () => {
  const anconOptions = [
    { id: 1, label: "Repousar" },
    { id: 1, label: "Contrair Levemente" },
    { id: 1, label: "Contrair" },
    { id: 1, label: "Contrair Fortemente" },
  ];

  const fistOptions = [
    { id: 1, label: "Ronationar -90°" },
    { id: 1, label: "Ronationar -45°" },
    { id: 1, label: "Repousar" },
    { id: 1, label: "Ronationar 45°" },
    { id: 1, label: "Ronationar 90°" },
    { id: 1, label: "Ronationar 135°" },
    { id: 1, label: "Ronationar 180°" },
  ];
  return (
    <Container>
      <Title>Braço Direito</Title>
      <Content>
        <Selector label="Cotovelo" options={anconOptions} />
        <Selector label="Pulso" options={fistOptions} />
      </Content>
    </Container>
  );
};
