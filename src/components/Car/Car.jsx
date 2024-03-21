import { uid } from "uid";
import { Icon } from "../Icon/Icon";

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
    <li>
      <img
        src={
          car.gallery[0] ||
          "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
        alt="car image"
      />
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
          {Object.entries(car.details).map(([key, value]) => {
            return value === 0 ? (
              <div style={{ display: "none" }} key={uid()}></div>
            ) : (
              <div key={uid()}>
                {/* <Icon /> */}
                <p style={{ color: "red" }}>
                  {defineTabs(key, value)} {key}
                </p>
              </div>
            );
          })}
        </div>
        <button>Show more</button>
      </div>
    </li>
  );
};
