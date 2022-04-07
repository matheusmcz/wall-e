import { Container, Label, Select } from "./styles";

interface Options {
  id: number;
  label: string;
}

interface selectorProps {
  label: string;
  options: Options[];
}

export const Selector = ({ label, options }: selectorProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Select>
        {options.map((option) => (
          <option key={option.id} selected={option.label === "Repousar"}>
            {option.label}
          </option>
        ))}
      </Select>
    </Container>
  );
};
