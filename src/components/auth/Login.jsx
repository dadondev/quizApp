import React, { useCallback, useEffect, useState } from "react";
import Input from "../inputs/Input";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

const svgArr = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-7"
    fill="currentColor"
  >
    <path d="M15.9994 2V4H14.9994V7.24291C14.9994 8.40051 15.2506 9.54432 15.7357 10.5954L20.017 19.8714C20.3641 20.6236 20.0358 21.5148 19.2836 21.8619C19.0865 21.9529 18.8721 22 18.655 22H5.34375C4.51532 22 3.84375 21.3284 3.84375 20.5C3.84375 20.2829 3.89085 20.0685 3.98181 19.8714L8.26306 10.5954C8.74816 9.54432 8.99939 8.40051 8.99939 7.24291V4H7.99939V2H15.9994ZM13.3873 10.0012H10.6115C10.5072 10.3644 10.3823 10.7221 10.2371 11.0724L10.079 11.4335L6.12439 20H17.8734L13.9198 11.4335C13.7054 10.9691 13.5276 10.4902 13.3873 10.0012ZM10.9994 7.24291C10.9994 7.49626 10.9898 7.7491 10.9706 8.00087H13.0282C13.0189 7.87982 13.0119 7.75852 13.0072 7.63704L12.9994 7.24291V4H10.9994V7.24291Z"></path>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-7"
    fill="currentColor"
  >
    <path d="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.6888 14.8776 14.8818 12.2168 14.9954L11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.31125 9.1222 2.11818 11.783 2.00462L11.9999 2ZM11.9999 4C10.4022 4 9.09623 5.24892 9.00499 6.82373L8.9999 7V10C8.9999 11.6569 10.343 13 11.9999 13C13.5976 13 14.9036 11.7511 14.9948 10.1763L14.9999 10V7C14.9999 5.34315 13.6567 4 11.9999 4Z"></path>
  </svg>,
];
const obj = {
  login: "123",
  pass: "123",
};

function Login() {
  const [login, setLogin] = useState(null);
  const [pass, setPass] = useState(null);
  const navigate = useNavigate();
  const arr = [
    {
      placeholder: "Test kodi",
      svg: svgArr[0],
      state: [login, setLogin],
    },
    {
      placeholder: "O'quvchi kodi",
      svg: svgArr[1],
      state: [pass, setPass],
    },
  ];

  const handleSubmit = () => {
    console.log(login, pass);
    if (login === obj.login && pass === obj.pass) {
      navigate("dashboard");
    }
  };

  return (
    <>
      <div className="h-full w-full max-w-full bg-gradient-to-r from-cyan-500 to-blue-500 grid place-items-center ">
        <form
          className="grid gap-3 w-full px-3 max-w-[280px] sm:max-w-[300px]"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <span className="block text-center text-3xl text-white font-bold">
            Kirish
          </span>
          <Section props={arr[0]} />
          <Section props={arr[1]} />
          <button className="py-2 bg-inherit border-[3px] hover:bg-sky-300 transition-all border-sky-300 rounded-md text-white">
            Yuborish
          </button>
        </form>
      </div>
      <h1 className="absolute bottom-2 left-2/4 -translate-x-1/2 text-white ">
        Made by <span className="underline">NajotDevsClub</span>
      </h1>
    </>
  );
}

export default Login;
