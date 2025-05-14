import Button from "../components/button/button";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="bg-black min-h-full flex items-center justify-center pt-40 pb-20 px-4">
      <div className="text-center">
        <div className="relative mb-6">
          {/* Logo/Icon */}
          <div className="inline-block relative">
            <img
              src={"/assets/images/comingsoon.png"}
              width={388}
              height={355}
              alt="Coming Soon Image"
            />

            {/* Vertical light lines */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="h-6 w-0.5 bg-purple-600 absolute -top-8 left-1/2 -translate-x-1/2"></div>
              <div className="h-6 w-0.5 bg-purple-600 absolute -bottom-8 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* Circular background element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 rounded-full bg-gradient-to-b from-blue-900/30 to-purple-900/30 blur-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-[52px] font-bold mb-4 bg-gradient-to-r from-[#2E73EA] to-[#22DDD2] text-transparent bg-clip-text">
            Coming Soon
          </h1>
          <p className="text-white text-lg max-w-md mx-auto mb-6">
            This Feature Is Coming Soon. Stay Connected, Stay Updated.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <div className="w-[80%] lg:w-[45%]">
            <Link to="/">
              <Button label={"Go Back Home"} variant={"outline"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
