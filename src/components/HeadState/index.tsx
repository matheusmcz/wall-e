import React from "react";
import StateBase from "../StateBase";

interface HeadStateProps {
  panValue: string;
  tiltValue: string;
}

const HeadState: React.FC<HeadStateProps> = ({ panValue, tiltValue }) => {
  return (
    <StateBase
      title="Cabeça"
      states={[
        {
          label: "Rotação",
          stateValue: panValue,
        },
        {
          label: "Inclinação",
          stateValue: tiltValue,
        },
      ]}
    />
  );
};

export default HeadState;
