import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [toggle, setToggle] = useState(
    localStorage.getItem("package") === "yearly"
  );

  useEffect(() => {
    toggle
      ? localStorage.setItem("package", "yearly")
      : localStorage.setItem("package", "monthly");
  }, [toggle]);

  return (
    <Switch
      checked={toggle}
      onChange={() => {
        setToggle(!toggle);
      }}
      className="relative w-12 h-6  bg-primery-marinblue rounded-full"
    >
      <div
        className={`${
          toggle ? "translate-x-7" : "translate-x-1"
        }  absolute transition top-1 w-4 h-4 bg-secondary-lightgray rounded-full`}
      ></div>
    </Switch>
  );
}
