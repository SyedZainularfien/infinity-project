// At the top of Header.jsx
/**
 * @typedef {Object.<string, string>} CSSModule
 */

/**
 * @type {CSSModule}
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
// import ThemeSwitch from "../ThemeSwitch";
import MobileNav from "./MobileNav";
import ConnectModal from "../ConnectModal/ConnectModal.jsx";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import { content } from "../../../data.jsx";
import styles from "./Header.module.css";

const Header = () => {
  const { pathname } = useLocation();

  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  // const handleLogout = () => {
  //   // localStorage.removeItem("user");
  //   dispatch(logout());
  //   navigate("/login");
  // };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [navbarClass, setNavbarClass] = useState("");
  const [connectModal, setConnectModal] = useState(false);
  const account = useAccount();
  // console.log(account)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const show = prevScrollPos > currentScrollPos || currentScrollPos < 200;
      setPrevScrollPos(currentScrollPos);
      setShowNavbar(show);
    };

    const updateNavbarClass = () => {
      const updatedClass =
        theme === "light" ? styles.app_navbar : styles.app_Darknavbar;
      setNavbarClass(updatedClass);
    };

    updateNavbarClass();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, theme]);

  return (
    <div className="flex justify-center items-center">
      <header
        className={`app-header z-50 fixed top-[20px] transform ${
          showNavbar ? "translate-y-0" : "-translate-y-[100px]"
        } transition duration-500 w-[100%] px-5 sm:px-16`}
      >
        <nav
          className={`${navbarClass} max-w-[1600px] mx-auto flex justify-between items-center shadow-xl`}
        >
          <div className="flex items-center nav-left nav-main-links">
            <div className="mr-3 bg-white wrap-logo">
              <Logo />
            </div>
            <div className="self-stretch hidden lg:flex main-links">
              {content.mainLinksLaptop.map((link, idx) =>
                link.children && link.children.length > 0 ? (
                  <div
                    className={`font-lato ${styles.nav_link} ${
                      pathname === link.to ? styles.active : ""
                    } mx-5 ${styles.nav_dropdown}`}
                    key={link.to + idx}
                  >
                    <button className=" focus:text-[#22DDD2]">
                      {link.text}
                    </button>
                    <div className={`${styles.dropdown_menu}`}>
                      {link.children.map((child) => (
                        <Link
                          key={child.to + idx}
                          className={` ${styles.nav_link} ${
                            pathname.startsWith(child.to) ? "active " : ""
                          } text-black font-lato`}
                          to={child.to}
                        >
                          {child.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.to + idx}
                    className={`mx-5 ${styles.nav_link} ${
                      pathname === link.to ? styles.active : ""
                    } font-lato`}
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="flex items-center self-stretch nav-right">
            {/* <ThemeSwitch styles={styles} /> */}
            <div
              className={`${styles.nav_right_btns} hidden lg:flex self-stretch`}
            >
              <Link
                className={`p-5 font-lato border border-white transition duration-500 hover:text-black hover:bg-white ${
                  pathname.includes("/my-infin") ? "active" : ""
                } text-white`}
                to="/my-infin"
              >
                My INFIN
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Stop event bubbling
                  setConnectModal(true);
                }}
                className={`font-lato connect border border-white transition duration-500 hover:text-black hover:bg-white p-5 text-white`}
              >
                {account?.isConnected
                  ? `${account.address.slice(0, 4)}...${account?.address.slice(
                      -2
                    )}`
                  : "CONNECT"}
              </button>
              {/* {user ? (
              <button onClick={handleLogout}>
                <span
                  className={`font-lato p-5 border border-white text-white transition duration-500 hover:text-black hover:bg-white ${styles.nav_link}`}
                >
                  LOGOUT
                </span>
              </button>
            ) : (
              <button>
                <Link
                  className={`font-lato p-5 border border-white text-white transition duration-500 hover:text-black hover:bg-white ${
                    styles.nav_link
                  } ${pathname.includes("/") ? "active" : ""}`}
                  to="/login"
                >
                  LOGIN
                </Link>
              </button>
            )} */}
            </div>
            <MobileNav />
          </div>
        </nav>
        {connectModal && (
          <ConnectModal closeModal={() => setConnectModal(false)} />
        )}
      </header>
    </div>
  );
};

export default Header;
