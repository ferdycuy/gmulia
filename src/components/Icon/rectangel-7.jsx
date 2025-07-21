import React from "react";

function Rectangle7() {
  return (
    <div className="absolute justify-end top-[8%] w-full h-full hidden md:flex z-[-1] ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        bottom="20"
        height="200"
        fill="none"
        viewBox="0 0 615 281"
        className="h-full"
      >
        <g filter="url(#filter0_i_15_114)">
          <path
            fill="#E6B430" // warna gold
            d="M0 140.5C0 62.904 62.904 0 140.5 0H615v281H140.5C62.904 281 0 218.096 0 140.5z"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_i_15_114"
            width="615"
            height="291"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="10"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2="-1"
              k3="1"
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend in2="shape" result="effect1_innerShadow_15_114"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Rectangle7;
