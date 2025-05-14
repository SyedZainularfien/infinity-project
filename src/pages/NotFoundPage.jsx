import React from "react";
import Button from "./components/button/button";
import { Link } from "react-router-dom";

const Custom404 = () => {
  return (
    <div
      className="bg-[#0b0b0b] flex items-center justify-center h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/assets/images/gradient-bg.png')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center mt-20 text-white">
        <div className="">
          <p className="text-3xl font-extrabold">Page Not Found</p>
        </div>
        <div className="pt-10 w-[90%]">
          <img
            src={"/assets/images/404.webp"}
            width={466}
            height={171}
            alt="404 Page Not Found"
          />
        </div>
        <div className="py-8">
          <p className="text-lg font-medium">
            The page you are looking was not found
          </p>
        </div>
        <div className="w-[80%] lg:w-[45%]">
          <Link to="/">
            <Button label={"Go Back Home"} variant={"outline"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
