import React, { useState, useEffect } from "react";
import usePlanStore from "../store/PlanStore";
import arcadeSvg from "../assets/images/icon-arcade.svg";
import adavancedSVG from "../assets/images/icon-advanced.svg";
import proSVG from "../assets/images/icon-pro.svg";
import Goback from "../components/buttons/Goback";
import NextStep from "../components/buttons/NextStep";
import { RadioGroup } from "@headlessui/react";
import { Switch } from "@headlessui/react";

const cardDetails = [
  {
    id: 1,
    name: "Arcade",
    svg: arcadeSvg,
    priceMonthly: 9,
    priceYearly: 90,
  },
  {
    id: 2,
    name: "Advanced",
    svg: adavancedSVG,
    priceMonthly: 12,
    priceYearly: 120,
  },
  {
    id: 3,
    name: "Pro",
    svg: proSVG,
    priceMonthly: 15,
    priceYearly: 150,
  },
];

export default function SelectPlan() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const setPlan = usePlanStore((state) => state.setPlan);
  const CurrentPlan = usePlanStore((state) => state.CurrentPlan);
  const [toggle, setToggle] = useState(
    localStorage.getItem("package") === "monthly"
  );

  const clickHandler = (plan) => {
    setPlan(plan);
  };

  useEffect(() => {
    if (toggle) {
      localStorage.setItem("package", "yearly");
    } else if (toggle === false) {
      localStorage.setItem("package", "monthly");
    } else {
      setToggle(localStorage.getItem("package") === "yearly");
    }
  }, [toggle]);

  return (
    <div className="relative w-[32rem] h-[36rem] px-5 py-8">
      <h1 className="mb-2 text-3xl font-bold text-primery-marinblue ">
        Select your plan
      </h1>
      <p className="mb-10 text-lg font-medium text-secondary-coolgray ">
        You have the option of monthly or yearly billing.
      </p>

      <div className=" flex flex-col">
        <RadioGroup
          className="flex gap-5 mb-10"
          value={selectedPlan}
          onChange={setSelectedPlan}
        >
          {cardDetails.map((card) => (
            <RadioGroup.Option
              key={card.id}
              value={card}
              onClick={() => {
                clickHandler(card);
              }}
              className={`
                  ${
                    CurrentPlan?.id === card.id
                      ? "ring-primery-marinblue bg-secondary-magnolia"
                      : "ring-secondary-lightgray"
                  }
                 w-36 h-48 p-5 ring-1 rounded-md  cursor-pointer `}
            >
              <img src={card.svg} alt="Arcade svg" />
              <p className=" mt-10 text-lg font-semibold text-primery-marinblue">
                {card.name}
              </p>
              {!toggle && (
                <p className="text-secondary-coolgray">
                  ${card.priceMonthly}/mo
                </p>
              )}
              {toggle && (
                <p className="text-secondary-coolgray">
                  ${card.priceYearly}/yr
                </p>
              )}
              {toggle && (
                <p className="tracking-tighter font-medium text-primery-marinblue">
                  2 months free
                </p>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>

        {/* ///////////////////      TOGGLE SWITCH    /////////////////// */}

        <div className="flex gap-4 justify-center items-center mb-24 h-12 bg-secondary-magnolia rounded-md">
          <p
            className={`font-semibold ${
              toggle ? "text-secondary-coolgray" : "text-primery-marinblue"
            }`}
          >
            Monthly
          </p>

          <Switch
            checked={toggle}
            onChange={() => {
              setToggle(!toggle);
            }}
            className="relative w-12 h-6 bg-primery-marinblue rounded-full"
          >
            <div
              className={`${
                toggle ? "translate-x-7" : "translate-x-1"
              }  absolute transition top-1 w-4 h-4 bg-secondary-lightgray rounded-full`}
            ></div>
          </Switch>

          <p
            className={`font-semibold ${
              toggle ? "text-primery-marinblue" : "text-secondary-coolgray"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
      <Goback path={"/"} />
      <NextStep path={"/addons"} disabled={!CurrentPlan?.id}>
        Next Step
      </NextStep>
    </div>
  );
}
