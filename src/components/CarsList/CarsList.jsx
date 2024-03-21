import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/carsSelectors";
import { Car } from "../Car/Car";

export const CarsList = () => {
  const cars = useSelector(selectCars);

  return (
    <div>
      <ul>
        {cars.map((car) => {
          return <Car key={car.id} car={car.car} />;
        })}
      </ul>
    </div>
  );
};
