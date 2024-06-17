import React from "react";
import Card from "../card/card";

type GameCardType = {
  bg: string;
};
const GameCard = ({ bg }: GameCardType) => {
  return (
    <Card>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "inherit",
          width: "inherit",
          borderRadius: "inherit",
        }}
      >
        {/*<PrimaryButton className="mt-0">
          <div className="flex flex-row justify-center items-center space-x-1">
             <span>Find US</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </PrimaryButton> */}
      </div>
    </Card>
  );
};

export default GameCard;
