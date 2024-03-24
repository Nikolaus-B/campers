import { useSelector } from "react-redux";
import { selectFilteredCars } from "../../redux/cars/carsSelectors";
import { Car } from "../Car/Car";
import { CarList, ListContainer, LoadMore } from "./CarsList.styled";
import { useState } from "react";

export const CarsList = () => {
  const [visibleCars, setVisibleCars] = useState(4); // Локальний стан для кількості відображених елементів
  const filteredCars = useSelector(selectFilteredCars);

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 4); // Збільшуємо кількість відображених елементів на 4
  };

  const allCarsDisplayed = visibleCars >= filteredCars.length; // Перевіряємо, чи всі елементи вже відображені

  return (
    <ListContainer>
      <CarList>
        {filteredCars.slice(0, visibleCars).map((car) => (
          <Car key={car.id} car={car.car} />
        ))}
      </CarList>
      {!allCarsDisplayed && (
        <LoadMore onClick={loadMore} disabled={allCarsDisplayed}>
          Load more
        </LoadMore>
      )}
    </ListContainer>
  );
};

// export const CarsList = () => {
//   const filteredCars = useSelector(selectFilteredCars);

//   return (
//     <ListContainer>
//       <CarList>
//         {filteredCars.map((car) => {
//           return <Car key={car.id} car={car.car} />;
//         })}
//       </CarList>
//       <LoadMore>Load more</LoadMore>
//     </ListContainer>
//   );
// };
