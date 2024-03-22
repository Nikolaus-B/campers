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
  TagsContainer,
} from "./Car.styled";
import { CarModal } from "../CarModal/CarModal";
import { useState } from "react";
import { Details } from "../Details/Details";

export const Car = ({ car }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <CarItem>
      <CarImage
        $bgImage={
          car.gallery[0] ||
          "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
      ></CarImage>
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
          <Details details={car.details} />
        </TagsContainer>
        <ShowMoreBtn onClick={() => openModal()}>Show more</ShowMoreBtn>
      </div>

      <CarModal modalIsOpen={modalIsOpen} closeModal={closeModal} car={car} />
    </CarItem>
  );
};

//  {
//    Object.entries(car.details).map(([key, value]) => {
//      return value === 0 ? (
//        <div style={{ display: "none" }} key={uid()}></div>
//      ) : (
//        <TagContainer key={uid()}>
//          {/* <Icon /> */}
//          <TagText>
//            {defineTabs(key, value)}{" "}
//            {key === "airConditioner" ? convertString(key) : key}
//          </TagText>
//        </TagContainer>
//      );
//    });
//  }
