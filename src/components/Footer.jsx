import React from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="absolute left-1/2 -translate-x-1/2 h-8 w-96  font-semibold rounded-md text-center cursor-default ">
      <p className="mb-1">
        Made with 💜 by <span className=" text-primery-purplishblue ">Vishal Paliwal</span>.
      </p>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/veshall" target="_blank">
          <FiGithub className=" h-6 w-6 text-slate-800  hover:text-primery-purplishblue" />
        </a>
        <a
          href="https://www.linkedin.com/in/vishal-paliwal-b0407b67/"
          target="_blank"
        >
          <FiLinkedin className="h-6 w-6 text-slate-800 hover:text-primery-purplishblue" />
        </a>
        <a href="https://twitter.com/veshall_" target="_blank">
          <FiTwitter className="h-6 w-6 text-slate-800 hover:text-primery-purplishblue" />
        </a>
      </div>
    </footer>
  );
}
