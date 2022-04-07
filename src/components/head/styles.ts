import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
  color: var(--title);
  width: 100%;
  padding: 4px;
  background-color: var(--gray-line);
  margin-bottom: 6px;
  border-radius: 4px;
`;
