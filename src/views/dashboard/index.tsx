import React from "react";
import { Arms } from "../../components/arms";
import { Head } from "../../components/head";

import { Container, Content, Controlers, LiveStates, Title } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Wall-E Controller</Title>
      <Content>
        <Controlers>
          <Head />
          <Arms />
        </Controlers>
        <LiveStates>
          <h1>Live States</h1>
        </LiveStates>
      </Content>
    </Container>
  );
};
