import React from "react";

function Input({ props }) {
  const [login, setLogin] = props.state;
  return (
    <input
      onChange={(e) => {
        setLogin(e.target.value);
      }}
      type="number"
      className="py-2 px-3 pr-8 focus:outline-[2px] w-full focus:outline-none rounded-md focus:outline-xl focus:outline-sky-300"
      placeholder={props.placeholder}
    />
  );
}

export default Input;
