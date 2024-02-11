import React from "react";
import Input from "../inputs/Input";

function Section({ props }) {
  return (
    <div className="relative">
      <Input props={props} />
      <div className="w-auto absolute flex items-center px-2 top-2/4 -translate-y-2/4 text-cyan-500  bg-slate-50 border-l border-slate-100 h-full right-0 rounded-r-md">
        {props.svg}
      </div>
    </div>
  );
}

export default Section;
