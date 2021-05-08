import {FC, useState} from "react";
import classnames from "classnames";
import "./Categorize.scss";

const categories: string[] = ["mug", "shirt"];

const Categorize = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleItemClick = (index: number) => setActiveIndex(index);

  return (
    <div id="categorize">
      {categories.map((item, index) => (
        <CategorizeItem
          key={index}
          label={item}
          isActive={index === activeIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

type CategorizeItemProps = {
  label: string;
  onClick: Function;
  isActive?: boolean;
};

const CategorizeItem: FC<CategorizeItemProps> = ({
  label,
  onClick,
  isActive,
}) => {
  return (
    <span
      className={classnames({
        categorizeItem: true,
        "categorizeItem--isActive": isActive,
      })}
      onClick={() => onClick()}
    >
      {label}
    </span>
  );
};

export default Categorize;
