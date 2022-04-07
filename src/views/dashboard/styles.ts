import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--title);
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: var(--blue-twitter);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 20px;
  background-color: var(--blue-twitter);
`;

export const Controlers = styled.div``;

export const LiveStates = styled.div``;
