import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="h-full pt-3 pl-4 grid grid-rows-[40px_1fr] gap-3">
      <span className="inline-block max-w-32 relative flex-col text-cyan-500 border-b-[4px] border-cyan-500 text-3xl font-bold before:w-2/4 before:h-1 before:-bottom-3 before:absolute before:bg-cyan-500 before:content-[''] ">
        Testlar
      </span>
      <div className="flex flex-wrap justify-evenly py-2">
        <div className="max-w-[250px] w-full max-h-[200px] border-[2px] border-gray-200">
          <div className="p-2 grid grid-cols-[1fr_1fr] relative gap-x-3.5 h-full grid-rows-[1fr_30px]">
            <div className="flex flex-col h-full">
              <span className="block basis-1/4">Fan</span>
              <span className="block basis-1/4">Sinf</span>
              <span className="block basis-1/4">Testlar</span>
              <span className="block basis-1/4">Vaqt</span>
            </div>
            <div className="flex flex-col h-full">
              <span className="block basis-1/4">Uzb Tarix</span>
              <span className="block basis-1/4">9-sinf</span>
              <span className="block basis-1/4">30 ta</span>
              <span className="block basis-1/4">25 daqiqa</span>
            </div>
            <div className="text-cyan-500 ">
              <Link>
                <li className="p-1 bg-slate-100 inline-block rounded-md absolute right-2">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path>
                  </svg>
                </li>
              </Link>
              <Link>
              <li className="p-1 bg-slate-100 inline-block rounded-md absolute right-12">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
                </svg>
              </li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
