import React from "react";

const TestInput = ({ props }) => {
  let { text, state, value1, type } = props;
  const { value, update } = state();

  return (
    <div className="grid mb-3">
      <span>{text}</span>
      <input
        onChange={(e) => {
          3;
          update(e.target.value);
          props.v = e.target.value;
        }}
        type={type}
        className="mt-2 py-2 px-3 border-[2px]  border-sky-400 focus:outline-[2px] w-full focus:outline-none rounded-md focus:outline-xl focus:outline-sky-300"
        placeholder=""
      />
    </div>
  );
};

export default TestInput;
