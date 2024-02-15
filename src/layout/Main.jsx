import React, { useEffect } from "react";
import TestInput from "../components/inputs/TestInput";
import tester from "../hooks/sendActiveSection";
import State from "../hooks/state";
import Card from "../components/cards/Card";

const arr = [
  {
    text: "Bo'limning id raqami",
    state: State,
    v: null,
    type: "number",
  },
  {
    text: "Tugash vaqti",
    state: State,
    v: null,
    type: "datetime-local",
  },
];

function Main() {
  useEffect(() => {
    document.getElementById("my-modal").showModal();
  }, []);
  const handleSubmit = () => {
    console.log(tester(arr));
  };
  return (
    <div className="h-full pt-3 pl-4 grid grid-rows-[40px_1fr] gap-3">
      <span className="inline-block max-w-32 relative flex-col text-cyan-500 border-b-[4px] border-cyan-500 text-3xl font-bold before:w-2/4 before:h-1 before:-bottom-3 before:absolute before:bg-cyan-500 before:content-[''] ">
        Testlar
      </span>
      <div className="flex flex-wrap justify-evenly py-2">
        <Card />
      </div>

      <dialog
        id="my-modal"
        className="max-w-[350px] w-full rounded-md relative max-h-[400px]"
      >
        <div className="w-full">
          <form method="dialog" className="relative">
            <button className="text-cyan-500 relative left-full -translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10"
                fill="currentColor"
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </button>
          </form>
          <span className="text-center block text-lg">
            Bo'limni aktiv qilish !
          </span>

          <form
            className="h-full p-3 flex flex-col justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {arr.map((obj, i) => (
              <TestInput props={obj} key={i} />
            ))}

            <button className=" max-w-[150px] inline-block w-full mx-auto py-2 bg-cyan-500 rounded-md text-white">
              O'tkazish
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Main;
