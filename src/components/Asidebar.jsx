import React from "react";
import Links from "./Links";

const linkList = [
  { step: 1, name: "YOUR INFO", path: "" },
  { step: 2, name: "SELECT PLAN", path: "selectplan" },
  { step: 3, name: "ADD-ONS", path: "addons" },
  { step: 4, name: "SUMMARY", path: "summary" },
];

export default function Asidebar() {
  return (
    <aside className="relative">
      <img
        src="src\assets\images\bg-sidebar-desktop.svg"
        className="h-[576px]"
        alt="SidebarBg"
      />

      <nav className="absolute top-0 left-0  p-8 text-white ">
        <ul className="space-y-8">
          {linkList.map((L) => (
            <Links key={L.step} step={L.step} name={L.name} path={L.path} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
