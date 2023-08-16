import React from "react";
import { useNavigate } from "react-router-dom";

export default function NextStep({
  path,
  type,
  disabled,
  children,
  onSubmit,
  confetti,
}) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (path) {
      event.preventDefault();
      navigate(path);
    }
    if (onSubmit) {
      onSubmit();
    }
    if (confetti) {
      confetti({
        origin: { y: 0.7 },
        spread: 120,
        particleCount: 120,
        colors: ["#473dff", "#ed3548", "#f0f6ff"],
      });
    }
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={`absolute right-5 bottom-5 w-32 h-12 rounded-md text-white font-semibold  ${
        disabled
          ? "bg-secondary-coolgray cursor-not-allowed"
          : children === "Skip"
          ? "bg-primery-strawberryRed"
          : children === "Confirm"
          ? "bg-primery-purplishblue"
          : "bg-primery-marinblue"
      }`}
    >
      {children}
    </button>
  );
}
