import React, { useEffect } from "react";
import MainAllLinks from "../links/MainAllLinks";

const Card = () => {
  return (
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
        <MainAllLinks />
      </div>
    </div>
  );
};

export default Card;
