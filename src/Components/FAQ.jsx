import React from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const FAQ = () => {
  // const [drop, setDrop] = useState(false);
  return (
    <div className="max-w-[1640px] px-auto py-12 flex justify-center text-center p-4 text-2xl">
      <div className="items-center">
        <h1 className="py-2 font-bold">FAQ</h1>
        <p className="font-medium pb-6">
          So you're asking yourself, "How did I get here?" Look no further we
          compiled a list of frequently asked questions to help.
        </p>

        <div className="flex items-center">
          <h1 className="bg-red-300 flex items-center py-2 px-4 w-screen max-h-[50px] font-medium">
            <BsFillArrowDownSquareFill
              size={20}
              className="mr-2 cursor-pointer"
            />
            What is an Escape Room?
          </h1>
        </div>

        <p className="bg-slate-200 flex items-start py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex items-center">
          <h1 className="bg-red-300 flex items-center py-2 px-4 w-screen max-h-[50px] font-medium">
            <BsFillArrowDownSquareFill
              size={20}
              className="mr-2 cursor-pointer"
            />
            Are we locked in?
          </h1>
        </div>
        <p className="bg-slate-200 flex items-start py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex items-center">
          <h1 className="bg-red-300 flex items-center py-2 px-4 w-screen max-h-[50px] font-medium">
            <BsFillArrowDownSquareFill
              size={20}
              className="mr-2 cursor-pointer"
            />
            Can I bring my own group?
          </h1>
        </div>
        <p className="bg-slate-200 flex items-start py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
