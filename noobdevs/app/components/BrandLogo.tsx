import React from "react";

export default function BrandLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className={className}
      fill="currentColor"
    >
      {/* Left Ear Background & Outline */}
      <circle cx="130" cy="250" r="50" stroke="#000" strokeWidth="22" fill="#fff" />

      {/* Right Ear Background & Outline */}
      <circle cx="375" cy="240" r="45" stroke="#000" strokeWidth="20" fill="#fff" />

      {/* Left Inner Ear Detail */}
      <path
        d="M 110 225 C 80 225, 80 275, 110 275 C 130 275, 130 250, 115 250"
        fill="none"
        stroke="#000"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Inner Ear Detail */}
      <path
        d="M 370 215 C 395 220, 400 250, 380 265"
        fill="none"
        stroke="#000"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Main Black Head Shape */}
      <path
        d="M 250 110 C 360 110, 420 170, 405 270 C 390 380, 310 420, 230 410 C 130 400, 100 310, 130 200 C 150 130, 190 110, 250 110 Z"
        fill="#000"
      />

      {/* White Face Mask */}
      <g fill="#fff">
        <circle cx="210" cy="210" r="60" />
        <circle cx="310" cy="210" r="55" />
        <ellipse cx="280" cy="305" rx="80" ry="70" transform="rotate(-10 280 305)" />
        <circle cx="230" cy="290" r="55" />
        <polygon points="210,210 310,210 280,305 230,290" />
      </g>

      {/* Left Eye */}
      <circle cx="215" cy="230" r="24" fill="#000" />

      {/* Right Eye */}
      <circle cx="305" cy="225" r="21" fill="#000" />

      {/* Nose */}
      <path
        d="M 275 260 C 300 260, 310 270, 305 285 C 300 295, 280 295, 265 285 C 255 275, 255 260, 275 260 Z"
        fill="#000"
      />

      {/* Vertical Mouth Line */}
      <path
        d="M 285 290 Q 290 320 295 330"
        fill="none"
        stroke="#000"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Curved Smile */}
      <path
        d="M 225 320 C 250 355, 300 365, 345 325"
        fill="none"
        stroke="#000"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}
