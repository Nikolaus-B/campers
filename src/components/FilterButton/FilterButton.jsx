import { Icon } from "../Icon/Icon";

export const FilterButton = ({ id, iconType, text }) => {
  return (
    <button>
      <Icon
        iconId={id}
        width={iconType === "equipment" ? 32 : 40}
        height={iconType === "equipment" ? 32 : 28}
      />
      {text}
    </button>
  );
};
