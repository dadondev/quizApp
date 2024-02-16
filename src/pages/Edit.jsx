import React from "react";
import Title from "../components/title/Title";
import { Link } from "react-router-dom";
import Crumbs from "../components/breadcrumbs/Crumbs";

const Edit = () => {
  return (
    <main className="px-4 py-2">
      <Title props={"Tahrirlash"} />
      <div className="w-full mt-4 mb-2">
        <Crumbs props={"Uzb tarix"} />
      </div>
      <div className="text-cyan-500">
        <h1 className="text-xl font-bold">
          <span className="font-normal">Nomi:</span> Uzb Tarix
        </h1>
        <h1 className="text-xl font-bold">
          <span className="font-normal">Testlar soni:</span> Uzb Tarix
        </h1>
      </div>
    </main>
  );
};

export default Edit;
