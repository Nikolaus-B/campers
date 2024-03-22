import styled from "styled-components";

// const getImage = (props) => props.$bgImage;

export const CarItem = styled.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${(p) => p.theme.colors.borderColor};
  border-radius: ${(p) => p.theme.radius.md};
`;

export const CarImage = styled.div`
  width: 100%;
  height: 310px;

  border-radius: ${(p) => p.theme.radius.sm};
  background-image: url(${(props) => props.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

export const HeadInfocontainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const HeadInfo = styled.p`
  font-size: ${(p) => p.theme.fonts.bigSize};
  line-height: 30px;
  font-weight: ${(p) => p.theme.fonts.bold};
`;

export const LocationAndRating = styled.div`
  display: flex;
  gap: 16px;
`;

export const Location = styled.p``;

export const Desctiption = styled.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${(p) => p.theme.colors.grey};
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const ShowMoreBtn = styled.button`
  width: 166px;
  height: 56px;

  background-color: ${(p) => p.theme.colors.red};
  border-radius: ${(p) => p.theme.radius.xlg};
  border: none;
  color: ${(p) => p.theme.colors.buttonText};
  transition: background-color ${(p) => p.theme.transition.transitionDurAndFunc};
  &:hover {
    background-color: ${(p) => p.theme.colors.hoverColor};
  }
`;
