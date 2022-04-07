import React from "react";
import { Arms } from "../components/arms";
import { Head } from "../components/head";

import { Container, Content, Controlers, LiveStates } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
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
