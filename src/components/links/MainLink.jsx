import { Link } from "react-router-dom";

const MainLink = ({ props }) => {
  return (
    <Link>
      <li
        className={
          props.isRed
            ? "p-1 rounded-sm  bg-red-500 text-white  cursor-pointer list-none"
            : "p-1 rounded-sm text-cyan-500 bg-slate-100  cursor-pointer list-none"
        }
      >
        {props.svg}
      </li>
    </Link>
  );
};

export default MainLink;
