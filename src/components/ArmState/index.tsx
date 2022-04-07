import React from "react";
import StateBase from "../StateBase";

interface ArmStateProps {
  title: "Braço Direito" | "Braço Esquerdo";
  fistValue: string;
  anconValue: string;
}

const ArmState: React.FC<ArmStateProps> = ({
  title,
  fistValue,
  anconValue,
}) => {
  return (
    <StateBase
      title={title}
      states={[
        {
          label: "Pulso",
          stateValue: fistValue,
        },
        {
          label: "Cotovelo",
          stateValue: anconValue,
        },
      ]}
    />
  );
};

export default ArmState;
