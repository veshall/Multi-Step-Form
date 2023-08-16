import React from "react";
import usePlanStore from "../store/PlanStore";
import thankyou from "../assets/images/icon-thank-you.svg";

export default function Thankyou() {
  const UserInfo = usePlanStore((state) => state.UserInfo);
  const { name, email } = UserInfo;

  return (
    <div className="relative flex flex-col justify-center items-center gap-4 w-[32rem] h-[36rem] px-5 py-8">
      <img width={75} src={thankyou} alt="Thankyou" />
      <h1 className="mb-2 text-3xl font-bold text-primery-marinblue ">
        Thank you!
      </h1>
      <p className="text-lg text-center font-medium text-secondary-coolgray ">
        Thanks <span className=" text-primery-purplishblue ">{name}</span> for
        confirming your subscription! An Email is sent to{" "}
        <span className=" text-primery-purplishblue ">{email}</span>, about your
        purchasing with us. We hope you have fun using our platform. If you ever
        need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}
