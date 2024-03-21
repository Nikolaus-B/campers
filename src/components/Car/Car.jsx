import { uid } from "uid";
import { Icon } from "../Icon/Icon";
import {
  CarImage,
  CarItem,
  Desctiption,
  HeadInfo,
  HeadInfocontainer,
  LocationAndRating,
  PriceContainer,
  ShowMoreBtn,
  TagContainer,
  TagText,
  TagsContainer,
} from "./Car.styled";

export const Car = ({ car }) => {
  const defineTabs = (tab, value) => {
    if (tab === "beds") {
      return value;
    } else if (tab === "hob") {
      return value;
    } else if (tab === "adult") {
      return value;
    }
    return value === 1 ? "" : value;
  };

  return (
    <CarItem>
      <CarImage
        $bgImage={
          car.gallery[0] ||
          "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
      ></CarImage>
      {/* <CarImage
        src={
          car.gallery[0] ||
          "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
        alt="car image"
      /> */}
      <div>
        <HeadInfocontainer>
          <HeadInfo>{car.name}</HeadInfo>
          <PriceContainer>
            <HeadInfo>€{car.price}.00</HeadInfo>
            <Icon width={24} height={24} iconId={"heart"} />
          </PriceContainer>
        </HeadInfocontainer>
        <LocationAndRating>
          <p>
            {car.rating} <span>{car.reviews.length || 0} Reviews</span>
          </p>
          <p>{car.location}</p>
        </LocationAndRating>
        <Desctiption>{car.description}</Desctiption>
        <TagsContainer>
          {Object.entries(car.details).map(([key, value]) => {
            return value === 0 ? (
              <div style={{ display: "none" }} key={uid()}></div>
            ) : (
              <TagContainer key={uid()}>
                {/* <Icon /> */}
                <TagText>
                  {defineTabs(key, value)} {key}
                </TagText>
              </TagContainer>
            );
          })}
        </TagsContainer>
        <ShowMoreBtn>Show more</ShowMoreBtn>
      </div>
    </CarItem>
  );
};
