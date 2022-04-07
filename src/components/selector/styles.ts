import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  border: 1px solid var(--gray-line);
  width: 100%;
  margin-bottom: 6px;
`;
export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-right: 1px solid var(--gray-line);
  width: 100px;
`;
export const Select = styled.select`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 18px 6px 6px;
  border-right: 1px solid var(--gray-line);
`;
export const Controler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  button:first-of-type {
    border-bottom: 1px solid var(--gray-line);
  }
`;
export const Button = styled.button`
    height: 32px;
    width: 32px;
}
`;
