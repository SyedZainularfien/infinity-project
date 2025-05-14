// import React from "react";
import { useState } from "react";

// import signUpImg from "/public/assets/images/signup.webp";
// import infinLogo from "../../../public/assets/images/logo1.webp";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import { registerUser } from "../../../redux/userSlice";

const Register = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [deviceId] = useState("web");

  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegisterEvent = (e) => {
    e.preventDefault();
    let userRegisterCredentials = {
      first_name,
      last_name,
      email,
      password,
      deviceId,
    };
    dispatch(registerUser(userRegisterCredentials)).then((result) => {
      if (result.payload) {
        // setEmail('');
        // setPassword('');
        sessionStorage.setItem("email", email);
        toast.success(result.payload);
        navigate("/confirmation");
      } else {
        toast.error(error);
      }
    }); //registerUser is a payload here.
  };
  return (
    <section className="flex items-center justify-center max-w-[1600px] mx-auto">
      <div className="flex items-center justify-center w-screen pt-40 pb-20">
        <div className="bg-white dark:bg-formColor p-3 rounded-3xl w-[90%] md:w-[70%] lg:w-[60%] xl:w-[40%] flex flex-col justify-center items-center border border-[#D1D1D1] dark:border-none">
          <div
            className="w-full bg-center bg-cover bg-no-repeat rounded-xl h-[175px]"
            style={{
              backgroundImage: `url("assets/images/login-bg.png")`,
            }}
            alt="Background Image Of the Sign Up Form"
          >
            <div className="flex mt-[30px] ml-[20px] md:ml-[40px]">
              <div className="mt-1 bg-white rounded-md w-[46px] h-[46px] flex justify-center items-center">
                <img
                  src={"/assets/images/vertical-logo.png"}
                  width={35.65}
                  height={35.65}
                  alt="Infinity Logo"
                />
              </div>
              <div className="flex flex-col">
                <div className="ml-3 md:ml-6">
                  <p class="text-2xl text-nowrap font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Infinity Global
                  </p>
                </div>
                <div
                  className={`${styles.signUpTextForm} relative mt-10 w-[150px] h-[38px] right-12`}
                >
                  <h2 className="font-extrabold text-[24px] lg:text-[32px]">
                    Signup
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[85%] flex flex-col justify-center items-start ">
            <form
              className={`flex flex-col items-center w-full gap-4 mt-5 ${styles.placeHTextColor}`}
              onSubmit={handleRegisterEvent}
            >
              <div className="flex flex-col w-full gap-2 md:flex md:flex-row">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                  className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md md:w-1/2 text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                  autoComplete="off"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md md:w-1/2 text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                  autoComplete="off"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm Password"
                className="w-full px-5 font-medium placeholder-opacity-75 bg-transparent border border-[#D1D1D1] dark:border-white rounded-md text-black dark:text-textColor dark:placeholder-textColor placeholder-[#545454] h-14"
                autoComplete="off"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <div className="w-full m-1 text-left text-c3">
                <input type="checkbox" className="rounded-full" />
                <span
                  className={`cursor-pointer ${styles.rememberMe} font-medium`}
                >
                  {" "}
                  Remember Me
                </span>
              </div>
              <button
                type="submit"
                className={`w-full h-14 text-white dark:text-black rounded-md outline-none font-bold bg-black dark:bg-white ${styles.signUpButton}`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
              {/*{error && (
                <div className="w-[100%] bg-red-500 text-white text-xs p-2 flex justify-center rounded-md">
                  {error}
                </div>
              )}*/}
            </form>

            <div className="mt-2">
              <span
                className={` ${styles.belowSubHeading} font-normal text-xs dark:text-dullText text-[#545454]`}
              >
                By continuing, you agree to This Company’s{" "}
                <a
                  className={`${styles.textUnderline}`}
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a className={`${styles.textUnderline}`} href="/privacy-policy">
                  Privacy Policy.
                </a>
              </span>
            </div>
            <hr class="my-4 border-gray-300 w-[100%]" />

            <div className="w-[100%] flex items-center pb-5 justify-center gap-1 text-sm  dark:text-textColor text-[#545454]">
              <span>Already have an account?</span>
              <Link
                to="/login"
                className="font-semibold cursor-pointer text-text-white underline-offset-2 text-LoginTextColor"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
