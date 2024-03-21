import styled from "styled-components";

export const FilterButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px;
  max-width: 128px;
  height: 95px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: ${(p) => p.theme.radius.sm};
  background-color: transparent;
`;

export const ButtonContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`;
