import React from "react";

type ButtonProps = {
  children: JSX.Element;
  className?: string
};

export const PrimaryButton = ({ children, className }: ButtonProps) => {
  return (
    <div className={`bg-white h-50 w-fit px-5 py-2 rounded-md text-black font-mono text-sm font-semibold mt-2 ring-1 ring-white ${className}`} >
      <button className="pdbutton">{children}</button>
    </div>
  );
};
