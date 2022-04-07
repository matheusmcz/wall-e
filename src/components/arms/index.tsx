import React from "react";

import { Left } from "./left";
import { Right } from "./right";
import { Container } from "./styles";

export const Arms: React.FC = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
};
