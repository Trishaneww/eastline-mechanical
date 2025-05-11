// components/WavyCircle.tsx
import { ReactNode } from "react";

interface WavyCircleProps {
  children?: ReactNode;
}

export default function WavyCircle({ children }: WavyCircleProps) {
  return (
    <div className="w-[190px] lg:w-[220px] aspect-square relative text-white">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute top-0 left-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="wavyClip" clipPathUnits="userSpaceOnUse">
            <path
              fill="#fff"
              d="M59.4,-58.6C71.5,-43.2,71.3,-21.6,67.8,-2.4C64.3,16.7,57.6,33.5,45.4,48.1C33.1,62.7,16.6,75.1,-0.8,75.9C-18.2,76.7,-36.5,65.9,-48.2,52.3C-60,38.6,-65.3,22.1,-66.2,5.2C-67.1,-11.7,-63.5,-28.9,-53.5,-44.5C-43.5,-60.1,-27.1,-74,-8.8,-72.6C9.6,-71.2,19.1,-54.1,59.4,-58.6Z"
              transform="translate(100 100)"
            />
          </clipPath>
        </defs>

        <foreignObject
          x="0"
          y="0"
          width="200"
          height="200"
          clipPath="url(#wavyClip)"
        >
          <div className="w-full h-full bg-indigo-50" />
        </foreignObject>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-white">
        {children}
      </div>
    </div>
  );
}
