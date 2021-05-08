import React, {FC} from "react";
import "./Container.scss";

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
};

const Container: FC<ContainerProps> = ({children}) => {
  return <div id="container">{children}</div>;
};

export default Container;
