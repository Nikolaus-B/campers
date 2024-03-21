import { uid } from "uid";
import { Icon } from "../Icon/Icon";

export const Car = ({ car }) => {
  return (
    <li>
      <img src="" alt="car image" />
      <div>
        <div>
          <p>{car.name}</p>
          <p>€{car.price}.00</p>
          <Icon width={24} height={24} iconId={"heart"} />
        </div>
        <div>
          <p>
            {car.rating} <span>{car.reviews.length || 0} Reviews</span>
          </p>
          <p>{car.location}</p>
        </div>
        <p>{car.description}</p>
        <div>
          {/* {Object.entries(car.details).map(([key, value]) => {
            
          })} */}
        </div>
        <button>Show more</button>
      </div>
    </li>
  );
};
