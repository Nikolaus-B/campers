import styled from "styled-components";

export const FilterButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  max-width: 128px;
  height: 95px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  background-color: transparent;
`;

export const ButtonContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
