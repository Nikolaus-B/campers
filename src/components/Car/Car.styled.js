import styled from "styled-components";

// const getImage = (props) => props.$bgImage;

export const CarItem = styled.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${(p) => p.theme.colors.borderColor};
  border-radius: 20px;
`;

export const CarImage = styled.div`
  width: 100%;
  height: 310px;

  border-radius: 10px;
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
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
`;

export const LocationAndRating = styled.div`
  display: flex;
  gap: 16px;
`;

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

export const TagContainer = styled.div`
  padding: 12px 18px;
  background-color: ${(p) => p.theme.colors.mainWhite};
  border-radius: 100px;
`;

export const TagText = styled.p`
  line-height: 20px;
  background-color: ${(p) => p.theme.colors.mainWhite};
`;

export const ShowMoreBtn = styled.button`
  width: 166px;
  height: 56px;

  background-color: ${(p) => p.theme.colors.red};
  border-radius: 200px;
  border: none;
  color: ${(p) => p.theme.colors.buttonText};
  transition: background-color ${(p) => p.theme.transition.transitionDurAndFunc};
  &:hover {
    background-color: ${(p) => p.theme.colors.hoverColor};
  }
`;
