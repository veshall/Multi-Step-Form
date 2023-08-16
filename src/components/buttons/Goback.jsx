import React from "react";
import { useNavigate } from "react-router-dom";

export default function Goback({ path }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        navigate(path);
      }}
      className="absolute  left-5 bottom-8  rounded-md text-secondary-coolgray font-medium "
    >
      Go Back
    </button>
  );
}
