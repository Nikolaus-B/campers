import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 173px;
  height: 56px;

  background-color: ${(p) => p.theme.colors.red};
  border-radius: 200px;
  border: none;
  color: ${(p) => p.theme.colors.buttonText};
`;
