import {FC} from "react";
import classnames from "classnames";
import "./Categorize.scss";
import {categories} from "Config";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, storeCategory} from "../../Stores/Product/slices";

const Categorize = () => {
  const dispatch = useDispatch();
  const category = useSelector(storeCategory);
  const activeIndex = categories.findIndex((item) => item === category);

  const handleItemClick = (index: number) => {
    dispatch(setCategory(categories[index]));
  };

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
