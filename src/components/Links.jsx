import React from "react";
import { useLocation } from "react-router-dom";

export default function Links({ step, name, path }) {
  const location = useLocation();
  const currentStep = location.pathname.slice(1) === path;
  return (
    <li className="flex group items-center gap-3 cursor-default">
      <span
        className={`flex items-center justify-center w-7 h-7 rounded-full ring-1 ring-white/80 font-semibold  
        ${
          currentStep
            ? "bg-primery-lightblue ring-primery-lightblue text-primery-marinblue"
            : "text-white"
        }
        `}
      >
        {step}
      </span>
      <div>
        <p className="text-white/60  text-[.5rem] leading-4">STEP {step}</p>
        <p className="text-slate-100 font-semibold text-sm tracking-widest">
          {name}
        </p>
      </div>
    </li>
  );
}
