import React, {FC} from "react";
import "./Button.scss";

type ButtonProps = {
  onClick: Function;
  label: string;
};

const Button: FC<ButtonProps> = ({onClick, label}) => {
  return (
    <div id="button" onClick={() => onClick()}>
      {label}
    </div>
  );
};

export default Button;
