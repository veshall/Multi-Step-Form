import React from "react";
import Goback from "../components/buttons/Goback";
import NextStep from "../components/buttons/NextStep";
import { NavLink } from "react-router-dom";
import usePlanStore from "../store/PlanStore";
import canvasConfetti from "https://cdn.skypack.dev/canvas-confetti";

export default function Summary() {
  const CurrentPlan = usePlanStore((state) => state.CurrentPlan);
  const addons = usePlanStore((state) => state.addons);
  const planPackage = localStorage.getItem("package");

  const planPrice =
    planPackage === "yearly"
      ? CurrentPlan.priceYearly
      : CurrentPlan.priceMonthly;

  const addonPrice = addons
    .map((addon) =>
      planPackage === "yearly" ? addon.priceYearly : addon.priceMonthly
    )
    .reduce((a, b) => a + b, 0);

  const totalAmount = planPrice + addonPrice;

  return (
    <div className="relative w-[32rem] h-[36rem] px-5 py-8">
      <h1 className="mb-2 text-3xl font-bold text-primery-marinblue ">
        Finishing up
      </h1>
      <p className="mb-10 text-lg font-medium text-secondary-coolgray ">
        Double-check everything looks OK before confirming.
      </p>

      <div className=" flex flex-col gap-4 p-4 mb-5 h-max rounded-md bg-secondary-alabaster ">
        <span className="flex justify-between items-center pb-4 border-b-2 ">
          <span className="flex flex-col font-semibold text-primery-marinblue">
            <span>
              {CurrentPlan.name} (
              {planPackage === "yearly" ? "Yearly" : "Monthly"})
            </span>
            <NavLink
              to={"/selectplan"}
              className="w-16 font-normal underline
               text-secondary-coolgray"
            >
              Change
            </NavLink>
          </span>
          <span className="font-semibold text-primery-marinblue">
            $
            {planPackage === "yearly"
              ? CurrentPlan.priceYearly
              : CurrentPlan.priceMonthly}
            /{planPackage === "yearly" ? "Yr" : "Mo"}
          </span>
        </span>

        <div className="flex flex-col gap-2">
          {addons.length > 0 &&
            addons.map((addon) => (
              <div key={addon.id} className="flex justify-between items-center">
                <span className="text-secondary-coolgray">{addon.name}</span>
                <span className=" font-medium text-primery-marinblue">
                  $
                  {planPackage === "yearly"
                    ? addon.priceYearly
                    : addon.priceMonthly}
                  /{planPackage === "yearly" ? "Yr" : "Mo"}
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between items-center px-5 ">
        <span className=" text-secondary-coolgray">
          Total(per {planPackage === "yearly" ? "year" : "month"})
        </span>
        <span className="font-medium text-lg text-primery-purplishblue">
          ${totalAmount}/{planPackage === "yearly" ? "Yr" : "Mo"}
        </span>
      </div>
      <Goback path={"/addons"} />
      <NextStep path={"/thankyou"} confirm={true} confetti={canvasConfetti}>
        Confirm
      </NextStep>
    </div>
  );
}
