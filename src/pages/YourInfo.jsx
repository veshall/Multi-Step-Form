import React, { useState } from "react";
import usePlanStore from "../store/PlanStore";
import NextStep from "../components/buttons/NextStep";

export default function YourInfo() {
  const setUserInfo = usePlanStore((state) => state.setUserInfo);
  const UserInfo = usePlanStore((state) => state.UserInfo);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const inValidData = !UserInfo.name?.length;
  const inValidInfo = !name.length || !email.length || !phone.length;

  const submitHandler = () => {
    setUserInfo({ name: name, email: email, phone: phone });
    console.log(name, email, phone, inValidInfo);
  };

  return (
    <div className="relative w-[32rem] h-[36rem] px-5 py-8">
      <h1 className="mb-2 text-3xl font-bold text-primery-marinblue ">
        Personal info
      </h1>
      <p className="mb-10 text-lg font-medium text-secondary-coolgray ">
        Please provide your name, email address, and phone number.
      </p>

      <form className="flex flex-col " id="userData">
        {/* Name. */}
        <label
          htmlFor="name"
          className="mb-2 text-primery-marinblue text-lg font-medium"
        >
          Name
        </label>
        <input
          type="name"
          id="name"
          onChange={(e) =>
            setName(
              e.target.value
                .toLowerCase()
                .split(" ")
                .map((W) => W.charAt(0).toUpperCase() + W.slice(1))
                .join(" ")
            )
          }
          value={name}
          required
          placeholder=" e.g. Stephen King"
          className="mb-3 h-12 p-2 font-medium ring-1 ring-secondary-lightgray rounded-md outline-none"
        ></input>

        {/* Email Address. */}
        <label
          htmlFor="email"
          className="mb-2 text-primery-marinblue text-lg font-medium"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          placeholder="e.g. stephenking@lorem.com"
          className="mb-3 h-12 p-2 font-medium ring-1 ring-secondary-lightgray rounded-md outline-none"
        ></input>

        {/* Phone Number. */}
        <label
          htmlFor="phone"
          className="mb-2 text-primery-marinblue text-lg font-medium"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
          placeholder="e.g. +1 234 567 890"
          className="h-12 p-2 font-medium ring-1 ring-secondary-lightgray rounded-md outline-none"
        ></input>

        <NextStep
          path={"selectplan"}
          onSubmit={submitHandler}
          form={"userData"}
          disabled={inValidInfo && inValidData}
        >
          Next Step
        </NextStep>
      </form>
    </div>
  );
}
