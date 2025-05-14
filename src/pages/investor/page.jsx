/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
// import heroimage from "../../../public/assets/images/heroimage.webp";
// import works1 from "../../../public/assets/images/works1.webp";
// import offer1 from "../../../public/assets/images/offer1.webp";
// import offer2 from "../../../public/assets/images/offer2.webp";
// import offer3 from "../../../public/assets/images/offer3.webp";
// import chart from "../../../public/assets/images/chart.webp";
// import chartLight from "../../../public/assets/images/chartLight.webp";
// import left from "../../../public/assets/images/left.svg";
// import right from "../../../public/assets/images/right.svg";
import IncomeCard from "./IncomeCard";
// import HowItWorks from "./HowItWorks";
import HowItWorks from "../components/Home/HowItWorks";
import styles from "./page.module.css";
import Button from "../components/button/button";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import Modal from "../components/Modal/Modal";

import { useSelector } from "react-redux";

//GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//GSAP Register
gsap.registerPlugin(ScrollTrigger);

const Investor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const { theme } = useSelector((state) => state.theme);

  const data = [
    {
      image: "/assets/images/offer1.png",
      price: "Coming Soon",
      place: "Maldives",
    },
    {
      image: "/assets/images/offer2.png",
      price: "Coming Soon",
      place: "Dubai",
    },
    {
      image: "/assets/images/offer3.png",
      price: "Coming Soon",
      place: "Bali",
    },
  ];
  const handleLeftClick = () => {
    const newIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(newIndex);
  };
  const wokrsData = [
    {
      num: "01",
      heading: "Browse",
      txt: `Explore the best investment opportunities categorized by type, ROI and yield, with various attributes that can help you understand whether each investment is the right fit for you. Understand what makes the asset valuable, the yield and/or asset value appreciation you can expect from it, from a glance`,
    },
    {
      num: "02",
      heading: "Invest",
      txt: `Choose your preferred assets and invest as much or as little as you want with only a few clicks. No need to go through complicated paperwork or processes, we handle all that for you through secure smart contracts so you can focus on what matters most to you`,
    },
    {
      num: "03",
      heading: "Earn",
      txt: `No paperwork or complicated processes required. We create the wallet for you automatically when you sign up, we manage the real estate properties, collect rent and deposit it directly to your wallet. After the recommended hold period, your assets&apos; value will also appreciate if you decide to sell them`,
    },
  ];

  const heroSectionRef = useRef();
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    //GSAP
    //1st Section FADE IN
    gsap.from(heroSectionRef.current, {
      duration: 3,
      autoAlpha: 1,
      ease: "none",
    });

    // GSAP animation for the heading
    revealRefs.current.forEach((el, index) => {
      gsap.from(el, {
        autoAlpha: 1,
        y: "-40%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=10%",
          toggleActions: "play none none reverse",
          // markers:true
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <section className="max-w-[1600px]  mx-auto">
        <div ref={heroSectionRef}>
          <div
            className="hidden lg:flex w-[100%] items-center  justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url("/assets/images/investor-hero-image.png")`,
              height: "810px",
            }}
          >
            <div className=" hidden lg:block container w-[80%] mx-auto justify-center ">
              <div className=" w-[60%] justify-start lg:justify-start">
                <h1 className="text-gradient-blue-cyan text-[32px] md:text-[34px] lg:text-[52px] font-extrabold leading-none">
                  Earn Passive Income On Autopilot
                </h1>
              </div>
              <div className=" w-[50%] mt-5 justify-start lg:justify-start ">
                <h2
                  className={`text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-none text-white`}
                >
                  Tokenized Assets Put Your Money To Work For You
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:hidden  w-[100%] flex items-center  mx-auto justify-center bg-cover bg-center">
            <div className=" w-[100%] mx-auto  justify-center ">
              <img
                src={"/assets/images/hero-image-mobile.png"}
                height={292}
                width={490}
                alt="mobile heri"
                className="w-[100%]"
              />
            </div>
          </div>
          <div className=" flex flex-col  lg:hidden my-14 container  w-[90%]  justify-center ">
            <div
              className={`${
                theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
              } w-[100%] text-center  justify-center lg:justify-center text-[32px] md:text-[36px] lg:text-[52px] font-extrabold leading-none`}
            >
              <p>Earn Passive Income On Autopilot</p>
            </div>
            <div className="felx flex-col w-[100%] text-center justify-center lg:justify-center halfContentGapTop">
              <p className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-none dark:text-white text-black">
                Tokenized Assets Put Your Money To Work For You
              </p>
            </div>
          </div>
        </div>

        {/* How it works  */}
        <div>
          <HowItWorks work={wokrsData} />
        </div>
        {/* our Latest Offers  */}
        <section
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('/assets/images/mask-group.png')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="w-[100%] h-[auto] flex items-center mx-auto justify-center ">
            <div className="flex flex-col  container  w-[80%] mx-auto justify-center my-16">
              <div className="flex flex-col items-center gap-8 ">
                <div
                  ref={addToRefs}
                  className="flex flex-row w-[100%] justify-center mx-auto "
                >
                  <h2 className="text-[28px] md:text-[32px] lg:text-[46px] text-white font-extrabold">
                    Our{" "}
                    <span className="text-gradient-purple">Latest Offer</span>
                  </h2>
                </div>
                {/* offer Card  */}
                {/* card parent  */}
                {modal && <Modal closeModal={() => setModal(false)} />}
                <div
                  className={`hidden ${styles.boxesContainer} lg:flex relative items-center w-full`}
                >
                  {/* Card child left */}
                  <div
                    className={`absolute dark:bg-latestBox transition duration-500 hover:scale-110 custom-hover dark:shadow-none shadow-lg bg-[#2B2B2B] w-[520px] justify-center self-center my-2 mx-auto ${styles.offerCard}`}
                  >
                    <div className="flex justify-center items-center w-full h-[223px] overflow-hidden">
                      <img
                        alt="offer"
                        src={"/assets/images/offer1.png"}
                        className="cursor-pointer object-cover w-full h-full rounded-lg"
                        onClick={() => setModal(true)}
                      />
                    </div>
                    <div className="my-2 text-white">
                      <p className={`${styles.price}`}>Coming Soon</p>
                      <p className={`${styles.address}`}>Dubai</p>
                    </div>
                  </div>

                  {/* Card child main */}
                  <div
                    className={`relative z-10 transition duration-500 hover:scale-110 custom-hover dark:shadow-none shadow-lg bg-[#2B2B2B] w-[520px] justify-center my-2 mx-auto ${styles.offerCard}`}
                  >
                    <div className="flex justify-center items-center w-full h-[223px] overflow-hidden">
                      <img
                        alt="offer"
                        src={"/assets/images/offer3.png"}
                        className="cursor-pointer object-cover w-full h-full rounded-lg"
                        onClick={() => setModal(true)}
                      />
                    </div>
                    <div className="my-6 text-white">
                      <p className={`${styles.price}`}>Coming Soon</p>
                      <p className={`${styles.address}`}>Maldives</p>
                    </div>
                  </div>

                  {/* Card child right */}
                  <div
                    className={`flex flex-col transition duration-500 hover:bg-white hover:scale-110 custom-hover dark:shadow-none shadow-lg bg-[#2B2B2B] w-[520px] my-2 mx-auto ${styles.offerCard} ${styles.lastChild}`}
                  >
                    <div className="flex justify-center items-center w-full h-[223px] overflow-hidden">
                      <img
                        alt="offer"
                        src={"/assets/images/offer2.png"}
                        className="cursor-pointer object-cover w-full h-full rounded-lg"
                        onClick={() => setModal(true)}
                      />
                    </div>
                    <div className="my-2 text-white">
                      <p className={`${styles.price}`}>Coming Soon</p>
                      <p className={`${styles.address}`}>Bali</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:hidden   relative items-center  w-[100%]">
                  {/* Card child main  */}
                  <div
                    className={` cursor-pointer  w-[100%] justify-center bg-[#fff] dark:bg-[#2A2A2A]  my-2 mx-auto ${styles.offerCardMobile}`}
                  >
                    <div
                      className="w-[100%] h-[150px] rounded-xl"
                      style={{
                        backgroundImage: `url(${data[currentIndex].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="my-6">
                      <p className={`${styles.price}`}>
                        {data[currentIndex].price}
                      </p>
                      <p className={`${styles.address}`}>
                        {data[currentIndex].place}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-8 mt-4">
                    <button onClick={handleLeftClick} aria-label="Scroll Left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white invert-0 hover:text-blue-600 transition-colors duration-200"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      onClick={handleRightClick}
                      aria-label="Scroll Right"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white hover:text-blue-600 transition-colors duration-200"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  className="flex  justify-center items-center w-[100%]  lg:w-[25%] "
                  onClick={() => setModal(true)}
                >
                  <Button
                    label={"View All Listings"}
                    // variant={"outline"}
                    variant={theme === "dark" ? "outline" : "lightSolid"}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Generate Passive Income  */}
          <div>
            <IncomeCard />
          </div>

          {/* Growth Chart  */}
          <div className=" flex flex-col w-[100%] h-[auto]  items-center    mx-auto justify-center bg-cover bg-center">
            <div className="flex flex-col container items-center  w-[90%] lg:w-[80%] mx-auto justify-center my-16 gap-4">
              <div
                ref={addToRefs}
                className="flex flex-col self-center gap-3 lg:self-start"
              >
                <h2 className={styles.growthHeading}>Passive Income Growth</h2>
                <p
                  className={`${styles.cardTxt} text-center lg:text-start ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Chart Visualization{" "}
                </p>
              </div>

              <div
                className={`${styles.cardTxt} mt-5 lg:mt-20  flex self-center lg:self-start gap-6 lg:gap-3
         `}
              >
                <p
                  className="cursor-pointer text-black dark:text-white hover:text-[#22DDD2] hover:underline"
                  onClick={() => setModal(true)}
                >
                  12 Months
                </p>
                <p
                  className="cursor-pointer hover:text-[#22DDD2] hover:underline text-black dark:text-white"
                  onClick={() => setModal(true)}
                >
                  5 years
                </p>
              </div>

              <img
                alt="chart"
                height={212}
                width={1140}
                src={
                  theme === "dark"
                    ? "/assets/images/chart.png"
                    : "/assets/light/images/investor-graph.png"
                }
              />
              <div
                className="lg:block flex justify-center items-center w-[90%] lg:w-[20%] my-16"
                onClick={() => setModal(true)}
              >
                <Button
                  label={"Buy"}
                  variant={"outline"}
                  // variant={theme === "light" ? "lightSolid" : "solid"}
                />
              </div>
            </div>
          </div>

          {/* Earning and Reward  */}

          <div
            className="  
           w-[100%] h-[auto] flex items-center    mx-auto justify-center bg-cover bg-center"
          >
            <div className="flex flex-col container items-center  w-[90%] lg:w-[90%] mx-auto justify-center">
              <div className="flex flex-col items-center justify-center mx-auto ">
                <h2
                  ref={addToRefs}
                  className="text-[24px] text-black dark:text-white md:text-[32px] lg:text-[46px] font-extrabold"
                >
                  Our{" "}
                  <span className="text-gradient-purple">
                    Earnings and rewards
                  </span>
                </h2>
                <h3
                  ref={addToRefs}
                  className={`${styles.price} text-black dark:text-white`}
                >
                  Refer a friend and earn rewards
                </h3>
              </div>
              {/* cards  */}
              <div className="flex flex-col lg:flex-row  mt-6 lg:gap-12  items-stretch justify-center w-[100%]">
                <div
                  className={`custom-hover bg-[#1C1C1C] flex flex-col lg:flex-row  w-[100%] lg:w-[45%] my-6 gap-4 bg-investorCardBg dark:bg-formColor ${styles.cardReward}`}
                >
                  <div className="flex flex-col w-[90%] gap-3 lg:gap-6">
                    <h3
                      className={`${styles.subCardHeading} ${
                        theme === "light"
                          ? "text-blue"
                          : "text-gradient-blue-cyan"
                      } text-left md:text-start`}
                    >
                      Infinity Champion program
                    </h3>
                    <p
                      className={`${styles.cardTxt} text-justify md:text-start text-white `}
                    >
                      April deal makes the launch of our champion program! Refer
                      15 or more friends who purchase a minimum of $100 dollars
                      each of INFIN Token journey by July 30th and receive a $
                      AMOUNT award.
                    </p>
                  </div>
                </div>
                <div
                  className={`custom-hover bg-[#1C1C1C] flex flex-col  w-[100%] lg:w-[45%] lg:my-6 gap-4 bg-investorCardBg dark:bg-formColor ${styles.cardReward}`}
                >
                  <div className="flex flex-col  w-[90%] gap-3 lg:gap-6">
                    <h3
                      className={`${styles.subCardHeading} ${
                        theme === "light"
                          ? "text-blue"
                          : "text-gradient-blue-cyan"
                      } text-justify md:text-start`}
                    >
                      Referral Program
                    </h3>
                    <p
                      className={`${styles.cardTxt} text-justify md:text-start text-white`}
                    >
                      This is an addition to the $20 an individual earns from
                      making a referral through an invite friend program. Those
                      will be rewarded to you once your friend signs up to make
                      a purchase
                    </p>
                    <div
                      className="flex flex-col justify-center items-center self-center lg:self-start w-[100%] lg:w-[50%] "
                      onClick={() => setModal(true)}
                    >
                      <Button
                        label={"Invite Friends"}
                        variant={theme === "dark" ? "outline" : "outlineLight"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* card 2nd  */}

              <div className=" flex flex-col lg:flex-row items-stretch lg:gap-12  justify-center w-[100%]">
                <div
                  className={`flex custom-hover bg-[#1C1C1C]  w-[100%] lg:w-[45%] my-6 gap-4 bg-investorCardBg dark:bg-formColor ${styles.cardReward}`}
                >
                  <div className="flex flex-col lg:flex-row w-[100%] gap-3 justify-between text-white items-start lg:items-center ">
                    <h3
                      className={`${styles.subCardHeading} ${
                        theme === "light"
                          ? "text-blue"
                          : "text-gradient-blue-cyan"
                      } w-[70%]`}
                    >
                      Total Rewards
                    </h3>
                    <p className={`${styles.price} text-nowrap`}>Coming Soon</p>
                  </div>
                </div>
                <div
                  className={`flex custom-hover bg-[#1C1C1C] w-[100%] lg:w-[45%] lg:my-6 gap-4 mb-3 bg-investorCardBg dark:bg-formColor ${styles.cardReward}`}
                >
                  <div className="text-white flex flex-col lg:flex-row w-[100%] gap-6  justify-between items-start lg:items-center  ">
                    <h3
                      className={`${styles.subCardHeading} ${
                        theme === "light"
                          ? "text-blue"
                          : "text-gradient-blue-cyan"
                      } w-[70%]`}
                    >
                      friends signed up/ Friends Invested
                    </h3>
                    <p className={`${styles.price} text-nowrap`}>Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* card 3rd  */}

              <div className="flex flex-col lg:flex-row items-stretch lg:gap-12 justify-center  w-[100%]">
                <div
                  className={`flex custom-hover bg-[#1C1C1C] flex-col w-[100%] lg:w-[45%] my-3 bg-investorCardBg dark:bg-formColor ${styles.cardReward}`}
                >
                  <div className="flex flex-col text-white items-start w-[100%] gap-2 justify-between ">
                    <h3
                      className={`${styles.subCardHeading} ${
                        theme === "light"
                          ? "text-blue"
                          : "text-gradient-blue-cyan"
                      } text-left md:text-start `}
                    >
                      What do friends need to do?
                    </h3>
                    <div className="flex flex-col gap-3 mt-3 leading-none">
                      <p className={`${styles.cardTxt}`}>
                        1- Sign up via link{" "}
                      </p>
                      <p className={`${styles.cardTxt}`}>2- Verify ID</p>
                      <p className={`${styles.cardTxt}`}>3- Pass onboarding </p>
                      <p className={`${styles.cardTxt}`}>4- Add minimum $100</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex custom-hover bg-[#1C1C1C] flex-col lg:flex-row w-[100%] lg:w-[45%] my-3 justify-between bg-investorCardBg dark:bg-formColor ${styles.cardReward}`}
                >
                  <div className="flex flex-col text-white items-start lg:w-[60%] gap-2">
                    <h3
                      className={`${styles.subCardHeading} ${
                        theme === "light"
                          ? "text-blue"
                          : "text-gradient-blue-cyan"
                      } text-left md:text-start `}
                    >
                      Download our app on google play
                    </h3>
                    <div className="self-center mt-3 lg:self-start ">
                      <Link
                        to={
                          "https://play.google.com/store/apps/details?id=com.app.infinity_digital_assets&pcampaignid=web_share"
                        }
                      >
                        <img
                          src={"/assets/images/playstore-logo.webp"}
                          height={49}
                          width={167}
                          alt="mobile heri"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-3">
                      <img
                        src={"/assets/images/QR.webp"}
                        height={156}
                        width={156}
                        alt="mobile heri"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Referal program  */}

          <div className=" w-[100%] h-[auto] flex items-center    mx-auto justify-center bg-cover bg-center">
            <div className="flex flex-col sectionGapTop container items-center  w-[100%] lg:w-[80%] mx-auto justify-center">
              <div
                ref={addToRefs}
                className="flex text-white flex-col items-center justify-center mx-auto "
              >
                <h2 className="text-[24px] md:text-[32px]  lg:text-[42px] font-extrabold">
                  {" "}
                  Our{" "}
                  <span className="text-gradient-purple">Referral Program</span>
                </h2>
                <h3 className="text-[18px] lg:text-[22px] mb-5 font-bold">
                  Partnerships
                </h3>
              </div>

              <div
                ref={addToRefs}
                className={`${styles.referalMain} custom-hover flex flex-col items-center w-[90%] lg:w-[70%]
           gap-3 my-16`}
              >
                <div className=" flex flex-col w-[100%] xl:w-[80%] items-center">
                  <p
                    className={`${styles.cardTxt} text-center text-black dark:text-white`}
                  >
                    When a Developer Partner refers another development company
                    as a signed for approved Fractional deal we will also offer
                    too.
                  </p>
                  <div className="flex flex-col items-center gap-0 mt-4 xl:flex-row xl:items-start xl:gap-6">
                    <p
                      className={`${styles.percentage} ${
                        theme === "light"
                          ? "text-blue"
                          : "text-gradient-blue-cyan"
                      }`}
                    >
                      Percentage %{" "}
                    </p>
                    <p
                      className={`${styles.confirm} text-black dark:text-white`}
                    >
                      to be confirmed (TBC)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ReClaim section  */}

          <div className="">
            <SocialCommunity />
          </div>
        </section>
      </section>
    </>
  );
};
export default Investor;
