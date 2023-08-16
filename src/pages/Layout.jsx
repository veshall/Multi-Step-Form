import React from "react";
import Asidebar from "../components/Asidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="relative">
      <div
        className=" flex gap-14 w-[60rem] h-[38rem] mx-auto mt-12 mb-4 p-4 bg-white 
        rounded-2xl "
      >
        <Asidebar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
