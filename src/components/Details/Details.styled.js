import styled from "styled-components";

export const TagContainer = styled.div`
  padding: 12px 18px;
  background-color: ${(p) => p.theme.colors.mainWhite};
  border-radius: ${(p) => p.theme.radius.lg};
`;

export const TagText = styled.p`
  line-height: 20px;
  background-color: ${(p) => p.theme.colors.mainWhite};
`;
