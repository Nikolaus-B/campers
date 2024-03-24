import styled from "styled-components";

export const WelcomeLayoutContainer = styled.div`
  display: flex;
  height: 600px;
  width: 100%;
  gap: 0px;
  border-radius: ${(p) => p.theme.radius.md};
  overflow: hidden;
`;

export const GreetingWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.loadMoreBorderColor};
`;

export const Greeting = styled.h2`
  margin-top: 70px;
  margin-left: 30px;
  font-weight: ${(p) => p.theme.fonts.normal};
  color: ${(p) => p.theme.colors.dark};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/camp.jpeg");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;
