import React from "react";
import { Link } from "react-router-dom";

export default function ErrorBoundary() {
  return (
    <div className="realtive">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 bg-secondary-alabaster p-5 rounded-xl shadow-md ">
        <h1 className=" mb-2 text-3xl font-bold text-primery-marinblue  ">
          <span className=" text-primery-strawberryRed ">Sorry :(</span>{" "}
          Encountered An error.
        </h1>
        <p className="text-lg text-center font-medium text-primery-marinblue ">
          The page you are looking for is not Found.
          <br />
          Go back to
          <Link to={"/"} className=" text-primery-strawberryRed underline ">
            Home
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
