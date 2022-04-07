import React from "react";

import {
  Container,
  Title,
  States,
  State,
  StateTitle,
  StateValue,
} from "./styles";

interface IState {
  label: string;
  stateValue: string;
}

interface StateBaseProps {
  title: string;
  states: IState[];
}

const StateBase: React.FC<StateBaseProps> = ({ title, states }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <States>
        {states.map((s) => (
          <State>
            <StateTitle>{s.label}:</StateTitle>
            <StateValue>{s.stateValue}</StateValue>
          </State>
        ))}
      </States>
    </Container>
  );
};

export default StateBase;
