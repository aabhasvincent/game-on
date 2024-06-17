import React, { useRef } from "react";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";

const HeroCarousal = ({ slides }: any) => {
  const [current, setCurrent] = React.useState(0);
  const heroCarousalRef = useRef();
  const prevSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  // React.useEffect(() => {
  //   const heroCarousaldiv = document.getElementById("heroCarousal");
  //   const onScroll = (e: any) => {
  //     if (e.deltaY === 0) return;
  //     e.preventDefault();
  //     heroCarousaldiv?.scrollTo({
  //       left: e.deltaY < 0 ? -400 :  400,
  //       behavior: "smooth",
  //     });
  //   };
  //   heroCarousaldiv?.addEventListener("wheel", onScroll);
  //   return () => heroCarousaldiv?.removeEventListener("wheel", onScroll);
  // }, []);

  return (
    <div className="overflow-hidden relative h-[400px] w-full" id="heroCarousal">
      <div
        className={`flex transition ease-out duration-1000 `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s: any) => {
          return <img src={s} alt="images" />;
        })}
      </div>
      <div className="absolute top-0 h-full flex w-full items-center justify-between px-2">
        <button onClick={prevSlide}>
          <ArrowLeftCircleIcon className="h-6 w-6 text-white" />
        </button>
        <button onClick={nextSlide}>
          <ArrowRightCircleIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousal;
