import { useSelector } from "react-redux";
import { selectFilteredCars } from "../../redux/cars/carsSelectors";
import { Car } from "../Car/Car";
import { CarList, ListContainer, LoadMore } from "./CarsList.styled";

export const CarsList = () => {
  // const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);

  // const equip = useSelector(selectfilteredCarsByEquipment);
  // const type = useSelector(selectFilteredByType);

  return (
    <ListContainer>
      <CarList>
        {filteredCars.map((car) => {
          return <Car key={car.id} car={car.car} />;
        })}
      </CarList>
      <LoadMore>Load more</LoadMore>
    </ListContainer>
  );
};
