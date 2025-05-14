// import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
// import loginimg from "../../../public/assets/images/loginimg.webp";
// import logo1 from "../../../public/assets/images/logo1.webp";
// import Image from "next/image";
// import Button from "../components/button/button";
import styles from "../login/page.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

// import Layout from "@/app/layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, theme } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userLoginCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userLoginCredentials)).then((result) => {
      if (result.payload) {
        // setEmail('');
        // setPassword('');
        toast.success("Successfully Logged In");
        navigate("/");
      } else {
        toast.error(error);
      }
    }); //loginUser is a payload here.
  };

  return (
    // <Layout layout={false}>
    <div className="py-40 mx-auto max-w-[1600px] flex justify-center items-center">
      <div className="flex flex-col items-center dark:bg-c6 shadow-2xl rounded-3xl relative w-[90%] md:w-[50%] lg:w-[40%] xl:w-[40%] border border-[#D1D1D1] dark:border-none">
        <div
          className=" w-[95%] mt-3 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: `url("assets/images/login-bg.png")`,
          }}
          alt="background image"
        >
          <div className="flex mt-[36px] ml-[20px] md:ml-[40px] gap-5 ">
            <div className="flex flex-col items-center justify-center rounded-xl bg-white w-[42px] h-[42px]">
              <div className="p-1">
                <img
                  width={50}
                  height={50}
                  src={"/assets/images/vertical-logo.png"}
                  alt="Infinity"
                />
              </div>
            </div>
            <div className="">
              <p class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Infinity Global
              </p>
            </div>
          </div>
          <div
            className={`flex font-extrabold mt-[30px] ml-[20px] lg:ml-[36px] mb-[24px] ${styles.login}`}
          >
            <h2 className="text-[24px] lg:text-[32px]">Login</h2>
          </div>
        </div>

        <form
          className="flex flex-col items-center gap-3 md:w-[70%] w-[90%] mt-5"
          onSubmit={handleLoginEvent}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="md:w-[85%] w-[100%] h-14 bg-transparent rounded-md border border-[#D1D1D1] dark:border-white px-5 text-black dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="md:w-[85%] w-[100%] h-14 bg-transparent rounded-md border border-[#D1D1D1] dark:border-white px-5 text-black dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="md:w-[85%] w-[100%]  md:text-sm text-xs flex justify-between">
            <div className="dark:text-c2 text-c1">
              <input type="checkbox" id="remember" />
              <label for="remember"> Remember me</label>
            </div>
            {/* <div>
              <span
                className={`cursor-pointer md:w-[80%] w-[100%] md:text-sm text-xs ${
                  theme === "light" ? "text-blue" : "text-c8"
                }`}
              >
                <Link to="/forget-password">Forget Password</Link>
              </span>
            </div> */}
          </div>
          <button
            className="mt-1 md:w-[85%] w-[100%] h-14 rounded-md outline-none text-base text-white dark:text-black font-normal cursor-pointer bg-black dark:bg-white"
            type="submit"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <div className="text-c3 text-xs md:w-[85%] w-[90%] spacing-[0px]">
            <span>
              This site is protected by reCAPTCHA and the Google{" "}
              {/* <Link
                to="/privacy-policy"
                className="underline underline-offset-2"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                to="/terms-and-conditions"
                className="underline underline-offset-2"
              >
                {" "}
                Terms of Service
              </Link>{" "} */}
              apply.{" "}
            </span>
          </div>
          <div className="flex md:w-[85%] py-2 w-[100%] items-center mt-2">
            <span className="w-[100%] h-[1px] bg-c2"></span>
          </div>
        </form>

        <div className="flex justify-center gap-1 pb-5 my-3 text-xs md:text-sm text-c1 dark:text-c2">
          <span>Don’t have an account yet? Signup</span>
          {/* This url & link is changed due to the missing functionality of login */}
          {/* <Link to="/register" className="cursor-pointer text-c8">
            Signup
          </Link> */}
        </div>
      </div>
    </div>
    // </Layout>
  );
};

// Login.getLayout = function getLayout(page) {
//   return { page };
// };

export default Login;
