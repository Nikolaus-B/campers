import {
  Greeting,
  GreetingWrapper,
  ImageWrapper,
  WelcomeLayoutContainer,
} from "./WelcomeLayout.styled";

export const WelcomeLayout = () => {
  return (
    <WelcomeLayoutContainer>
      <GreetingWrapper>
        <Greeting>
          Welcome to RentCamp - your ultimate companion for unforgettable
          journeys and outdoor adventures!
        </Greeting>
      </GreetingWrapper>
      <ImageWrapper></ImageWrapper>
    </WelcomeLayoutContainer>
  );
};
