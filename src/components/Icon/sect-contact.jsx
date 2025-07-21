import React from "react";

function SectContactIcon() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 1440 988"
      >
        <g filter="url(#filter0_i_14_40)">
          <path
            fill="#BC2C43"
            d="M0 200C0 89.543 89.543 0 200 0h1040c110.46 0 200 89.543 200 200v788H0V200z"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_i_14_40"
            width="1440"
            height="998"
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
            <feBlend in2="shape" result="effect1_innerShadow_14_40"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default SectContactIcon;
