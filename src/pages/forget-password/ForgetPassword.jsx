import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { useSelector } from "react-redux";

const Forget = () => {
  const [modal, setModal] = useState(false);

  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="py-40 mx-auto max-w-[1600px] flex justify-center items-center">
      <div className="flex flex-col items-center bg-white dark:bg-c6 shadow-2xl rounded-md  relative w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] ">
        <div className="flex w-[80%] flex-col mt-[36px] gap-3 justify-start">
          <div className="flex flex-row gap-5 ">
            <div className="flex flex-col items-center justify-center rounded-md bg-white w-[42px] h-[42px]">
              <div className="p-0.5 rotate-90">
                <img
                  src={"/assets/images/vertical-logo.png"}
                  width={80}
                  height={80}
                  alt="Infinity"
                  className=""
                />
              </div>
            </div>
            <div className="w-[50%]">
              <p class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Infinity Global
              </p>
            </div>
          </div>

          <div className="flex mt-4 mb-[10px] subHeadingText ">
            <h2>Forget your password?</h2>
          </div>
          <div className=" justify-center mt-[1px] ">
            <span className="text-xs text-c1 dark:text-white ">
              Don’t worry, simply enter your email address below and we’ll send
              you a link to reset your password
            </span>
          </div>
        </div>
        <form
          className="flex flex-col justify-center items-center gap-3 w-[100%] mt-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-[80%] h-14 bg-transparent rounded-md border border-c1 dark:border-white px-5 text-c1 dark:text-white"
            autoComplete="off"
          ></input>
          {modal && <Modal closeModal={() => setModal(false)} />}
          <button
            onClick={() => setModal(true)}
            className="mt-3 w-[80%] h-14 rounded-md outline-none text-white dark:text-black text-base font-normal bg-c1 dark:bg-white"
          >
            <Link to="#">Send Recovery Email</Link>
          </button>
        </form>
        <div className="flex h-5 w-[80%] items-center mt-10">
          <span className="w-[100%] h-[1px] bg-c1 dark:bg-white"></span>
        </div>
        <div className=" flex flex-col lg:flex-row justify-center gap-4 lg:gap-0 items-center h-5 w-[80%] lg:justify-between mt-5">
          <span className="flex gap-2 text-xs md:text-sm text-c2">
            <img
              src={"/assets/images/back.png"}
              width={20}
              height={20}
              alt="back logo"
            />
            <Link
              className={`text-xs cursor-pointer md:text-sm ${
                theme === "light" ? "text-blue" : "text-c8"
              }`}
              // className={`text-xs cursor-pointer md:text-sm"text-blue`}
              to="#"
            >
              Back to login
            </Link>
          </span>
          <span className="flex gap-1 text-xs md:text-sm text-c1 dark:text-c2">
            Don’t have an account yet?
            <Link
              to="/register"
              className={`cursor-pointer text-normal ${
                theme === "light" ? "text-blue" : "text-c8"
              }`}
              // className={`cursor-pointer text-normal text-blue`}
            >
              Signup
            </Link>
          </span>
        </div>
        <div className="flex items-center w-[80%] mt-[60px]">
          <span className="w-[100%] h-[1px] bg-c1 dark:bg-c2"></span>
        </div>
        <div className=" w-[80%] text-c1 dark:text-c2 text-center text-xs my-3">
          <span>© 2023 INFIN Global LLC. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Forget;
