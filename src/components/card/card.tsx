import React from "react";
type CardProps = {
  style?: any;
  children?: JSX.Element;
  bg?: string;
};
const card = ({ style, children, bg }: CardProps) => {
  return (
    <div
      className="card"
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default card;
