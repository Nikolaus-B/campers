import { uid } from "uid";
import { TagContainer, TagText } from "./Details.styled";

export const Details = ({ details }) => {
  const defineTabs = (tab, value) => {
    if (tab === "beds") {
      return value;
    } else if (tab === "hob") {
      return value;
    } else if (tab === "airConditioner") {
      return value;
    }
    return value === 1 ? "" : value;
  };

  const convertString = (string) => {
    const firstPart = string.charAt(0).toUpperCase() + string.slice(1, 3);
    const secondPart = string.slice(3).toLowerCase();
    return firstPart + " " + secondPart;
  };
  return (
    <>
      {Object.entries(details).map(([key, value]) => {
        return value === 0 ? (
          <div style={{ display: "none" }} key={uid()}></div>
        ) : (
          <TagContainer key={uid()}>
            {/* <Icon /> */}
            <TagText>
              {defineTabs(key, value)}{" "}
              {key === "airConditioner" ? convertString(key) : key}
            </TagText>
          </TagContainer>
        );
      })}
    </>
  );
};
