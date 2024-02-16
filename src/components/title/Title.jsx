import React from "react";

const Title = ({ props }) => {
  console.log(props);
  return (
    <span className="inline-block max-w-32 relative flex-col text-cyan-500 border-b-[4px] border-cyan-500 text-3xl font-bold before:w-2/4 before:h-1 before:-bottom-3 before:absolute before:bg-cyan-500 before:content-[''] ">
      {props}
    </span>
  );
};

export default Title;
