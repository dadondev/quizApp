import React from "react";

function Link({ props }) {
  console.log(props);
  return (
    <li className="md:py-2 h-10 max-w-[40px] md:max-w-[100%] md:h-auto md:px-3 bg-cyan-500 rounded-md text-white md:relative cursor-pointer">
      <span className="hidden md:block">{props.name}</span>
      <div className="md:absolute top-0 right-0 md:rounded-r-md h-full md:bg-cyan-600 px-2 flex items-center">
        {props.svg}
      </div>
    </li>
  );
}

export default Link;
