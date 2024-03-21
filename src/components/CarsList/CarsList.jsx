import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/carsSelectors";
import { Car } from "../Car/Car";
import { CarList, ListContainer, LoadMore } from "./CarsList.styled";

export const CarsList = () => {
  const cars = useSelector(selectCars);

  return (
    <ListContainer>
      <CarList>
        {cars.map((car) => {
          console.log(car);
          return <Car key={car.id} car={car.car} />;
        })}
      </CarList>
      <LoadMore>Load more</LoadMore>
    </ListContainer>
  );
};
