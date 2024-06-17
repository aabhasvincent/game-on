import { PrimaryButton } from "../../../components/buttons/primaryButton";
import { SecondaryButton } from "../../../components/buttons/secondaryButton";
import CounterStrike from "../../../public/games/counterStriker.jpg";
import Game2 from "../../../public/games/game2.jpg";
import Game3 from "../../../public/games/game3.jpg";
import Game4 from "../../../public/games/game4.jpg";
import GameCard from "../../../components/gameCard/gameCard";
import Hnhbg1 from "../../../public/bg/hnhbg1.jpg";
import Hnhbg2 from "../../../public/bg/hnhbg2.jpg";
import HeroCarousal from "../../../components/Carousal/heroCarousal";
import Reviews from "./Reviews";

export const LandingPage = () => {
  const slides = [
    CounterStrike,
    Game2,
    Game3,
    Game4,
    Game2,
    Game3,
    Game4,
    Game2,
    Game3,
    Game4,
  ];
  return (
    <div className="flex justify-center align-middle text-center flex-col p-2 bg-inherit">
      {/* intro */}
      <div className="intro mb-5">
        <span className="text-8xl font-extrabold font-mono max-sm:hidden">
          It's{" "}
        </span>
        <span className="text-8xl font-extrabold font-mono max-sm:hidden text-violet-800">
          game{" "}
        </span>
        <span className="text-8xl font-extrabold font-mono max-sm:hidden">
          on!
        </span>
        <h1 className="text-6xl font-extrabold font-mono max-sm:block hidden">
          Game
        </h1>
        <p className="text-2xl font-semibold font-mono mt-2">
          A heaven for gaming enthusiasts.
        </p>

        <p className="text-sm font-extralight font-mono mt-5">
          Welcome to our gaming haven, where every click brings adventure to
          life! Join us at our peedee gaming arena for an immersive experience
          in the world of virtual excitement.
        </p>
        <div className="flex flec-row space-x-4">
          <PrimaryButton>
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
          </PrimaryButton>
          <SecondaryButton> Take Tour </SecondaryButton>
        </div>
      </div>

      <div
        className="mx-auto h-[380px] w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Game2})` }}
      >
        <div className="intro">
          <span className="text-8xl font-extrabold font-mono max-sm:hidden">
            It's{" "}
          </span>
          <span className="text-8xl font-extrabold font-mono max-sm:hidden text-violet-800">
            game{" "}
          </span>
          <span className="text-8xl font-extrabold font-mono max-sm:hidden">
            on!
          </span>
          <h1 className="text-6xl font-extrabold font-mono max-sm:block hidden">
            Game
          </h1>
          <p className="text-2xl font-semibold font-mono mt-2">
            A heaven for gaming enthusiasts.
          </p>

          <p className="text-sm font-extralight font-mono mt-5">
            Welcome to our gaming haven, where every click brings adventure to
            life! Join us at our peedee gaming arena for an immersive experience
            in the world of virtual excitement.
          </p>
        </div>
      </div>
      <div className="games mt-12">
        <HeroCarousal slides={slides} />
      </div>
      <div className="heroCarousal flex flex-row flex-wrap justify-center space-x-4 mt-10">
        <GameCard bg={CounterStrike} />
        <GameCard bg={Game2} />
        <GameCard bg={Game3} />
        <GameCard bg={Game4} />
      </div>

      <div className="halfnhalf flex flex-row mt-5 h-[450px]">
        <div className="w-1/2 flex justify-center align-middle flex-col items-center ">
          <h1 className="text-5xl font-mono font-semibold">
            First 2 hours are on us!
          </h1>
          <p className="font-semibold font-mono mt-2">
            New to the cafe? Your first two hours are on us.{" "}
          </p>
          <PrimaryButton>
            <div className="flex flex-row justify-center items-center space-x-1">
              <span>Register</span>
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
          </PrimaryButton>
        </div>
        <div className="w-1/2 ">
          <img src={Hnhbg1} alt="CounterSTrike" className="h-full w-full" />
        </div>
      </div>
      <div className="halfnhalf flex flex-row h-[450px]">
        <div className="w-1/2 ">
          <img src={Hnhbg2} alt="CounterSTrike" className="h-full w-full" />
        </div>
        <div className="flex justify-center align-middle flex-col items-center flex-grow">
          <h1 className="text-5xl font-mono font-semibold">Book Slots</h1>
          <p className="font-semibold font-mono mt-2">
            Get your weekend sorted, Book slots righr now.
          </p>
          <PrimaryButton>
            <div className="flex flex-row justify-center items-center space-x-1">
              <span>Book Slots</span>
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
          </PrimaryButton>
        </div>
      </div>

      <Reviews/>
    </div>
  );
};
