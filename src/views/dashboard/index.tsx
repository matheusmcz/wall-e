import React from "react";
import { Arms } from "../../components/arms";
import { BotStates } from "../../components/BotStates";
import { Head } from "../../components/head";

import { Container, Content, Controlers, Title } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Wall-E Controller</Title>
      <Content>
        <Controlers>
          <Head />
          <Arms />
        </Controlers>
        <BotStates />
      </Content>
    </Container>
  );
};
