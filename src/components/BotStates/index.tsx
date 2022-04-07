import React from "react";
import ArmState from "../ArmState";
import HeadState from "../HeadState";

import { Container, Title, ArmsSession } from "./styles";

export const BotStates: React.FC = () => {
  return (
    <Container>
      <Title>Bot States</Title>
      <HeadState panValue="Repouso" tiltValue="90" />
      <ArmsSession>
        <ArmState
          title="Braço Esquerdo"
          anconValue="Contraido"
          fistValue="90"
        />
        <ArmState title="Braço Direito" anconValue="Contraido" fistValue="90" />
      </ArmsSession>
    </Container>
  );
};
