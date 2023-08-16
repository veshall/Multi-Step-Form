import React from "react";
import Goback from "../components/buttons/Goback";
import NextStep from "../components/buttons/NextStep";
import usePlanStore from "../store/PlanStore";

const addonsOptions = [
  {
    id: 1,
    name: "Online service",
    desc: "  Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
  },
  {
    id: 2,
    name: "Larger storage",
    desc: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
  },
  {
    id: 3,
    name: "Customizable Profile",
    desc: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 20,
  },
];

export default function Addons() {
  const setAddons = usePlanStore((state) => state.setAddons);
  const removeAddons = usePlanStore((state) => state.removeAddons);
  const addons = usePlanStore((state) => state.addons);

  const planPackage = localStorage.getItem("package");

  const btnName = addons.length ? "Next Step" : "Skip";

  const handleOptionChange = (option, checked) => {
    if (checked) {
      setAddons(option);
    } else {
      removeAddons(option);
    }
  };

  return (
    <div className="relative w-[32rem] h-[36rem] px-5 py-8">
      <h1 className="mb-2 text-3xl font-bold text-primery-marinblue ">
        Pick add-ons
      </h1>
      <p className="mb-10 text-lg font-medium text-secondary-coolgray ">
        Add-ons help enhance your gaming experience.
      </p>

      <form className="space-y-5">
        {addonsOptions.map((opt) => (
          <label
            key={opt.id}
            className=" flex justify-between items-center h-[5rem]  p-5 cursor-pointer  ring-1 rounded-md ring-secondary-lightgray  hover:bg-secondary-magnolia hover:ring-primery-purplishblue"
          >
            <span className="flex gap-5 ">
              <input
                type="checkbox"
                value={opt}
                checked={addons.includes(opt)}
                onChange={(e) => handleOptionChange(opt, e.target.checked)}
                className="accent-primary-pastelblue scale-125"
              />
              <div>
                <p className="font-semibold text-primery-marinblue ">
                  {opt.name}
                </p>
                <p className="text-secondary-coolgray">{opt.desc}</p>
              </div>
            </span>
            {planPackage === "monthly" && (
              <p className="font-semibold text-primery-purplishblue">
                +${opt.priceMonthly}/mo
              </p>
            )}
            {planPackage === "yearly" && (
              <p className="text-primery-purplishblue">
                +${opt.priceYearly}/yr
              </p>
            )}
          </label>
        ))}
        <Goback path={"/selectplan"} />
        <NextStep path={"/summary"} type="button">
          {btnName}
        </NextStep>
      </form>
    </div>
  );
}
