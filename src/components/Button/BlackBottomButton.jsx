import { Link } from "react-router-dom";

const BlackBottomButton = ({ link, text }) => {
  return (
    <Link to={link}>
      <div className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-2 cursor-pointer bg-backgroundFill-900 text-white text-center">
        <button className="py-1 font-bold ">{text}</button>
      </div>
    </Link>
  );
};

export default BlackBottomButton;
