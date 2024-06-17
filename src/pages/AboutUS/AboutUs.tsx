import React from "react";
import Aabhas from "../../public/bg/Aabhas1.png";
import "./aboutus.scss";
import { PrimaryButton } from "../../components/buttons/primaryButton";
const AboutUs = () => {
  return (
    <div className="flex flex-row justify-between m-4">
      <div className="flex justify-center align-middle flex-col items-start w-2/3 ">
        <h1 className="text-3xl font-mono font-semibold text-gray-400">
          It's me
        </h1>
        <h1 className="text-7xl font-mono font-semibold text-purple-600">
          Aabhas Vincent
        </h1>
        <p className="font-semibold font-mono mt-2 flex-wrap">
          Web Developer from Pune, India. I loves to bring designs to life. This
          website is a pet project to showcase my capabilities as a developer.
          Design is blend of my imagination and inspiration from various online
          sources.
        </p>
        <p className="font-light italic">
          I am an gaming enthusiast on the side and nothing better could has
          driven me as this first project to design a gaming website. This could
          be scaled or translated to any other use case.
        </p>
        <div className="techStach mt-4">
          <h2 className="text-2xl">Tech Stack</h2>
          <ul className="italic font-thin">
            <li>React</li>
            <li>React Router v6</li>
            <li>Node</li>
            <li>Tailwind css</li>
            <li></li>
          </ul>
        </div>
        <div className="contactDetails mt-10">
          <p>aabhasvincent@gmail.com</p>
          <p>+91-9828863869</p>
        </div>
        {/* <PrimaryButton>
          <div className="flex flex-row justify-center items-center space-x-1">
            <span>More About me</span>
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
      <div className="circle">
        <img
          src={Aabhas}
          alt="CounterSTrike"
          className="h-full w-full"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
