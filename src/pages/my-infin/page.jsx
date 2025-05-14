import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import CountdownTimer from "../components/countdown/countdownTimer";
import Button from "../components/button/button";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import Roadmap from "../components/roadmap/roadmap";
import InvestorForm from "../components/investorForm/InvestorForm";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//GSAP plugin Register
gsap.registerPlugin(ScrollTrigger);

const NEXT_10_DAYS = new Date("07/21/2025").getTime() + 1000 * 3600 * 24 * 10;

const MyInfin = () => {
  const [investorForm, setInvestorForm] = useState(false);

  const tokenJourneyArray = [
    {
      title: "Design of WebApp, DAPP & Token",
      subtitle: "1st May -  5th June 2023",
    },
    {
      title: "Build of WebApp, DAPP & Token",
      subtitle: "21 June - 25 June 2023",
    },
    {
      title: "INFIN in apple Store & token launch pre-sale",
      subtitle: "25th June  30th June 2023",
    },
    {
      title: "Seed Round $1.3 Million Funding",
      subtitle: "28th October 2023",
    },
    {
      title: "Public token offering",
      subtitle: "11th November 2023",
    },
  ];

  // Ref Declaration
  const heroSectionRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    // GSAP
    gsap.from(heroSectionRef.current, {
      duration: 3,
      autoAlpha: 1,
      ease: "none",
    });

    const textLines = textContainerRef.current.querySelectorAll(".line span");
    gsap.from(textLines, {
      duration: 1,
      autoAlpha: 1,
      y: -200,
      ease: "power2.out",
      skewY: 10,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: textContainerRef.current,
        toggleActions: "play none none reverse",
        start: "top bottom-=30%", // Adjust the start position as needed
      },
    });
  }, []);

  return (
    <section
      className="w-full bg-no-repeat bg-cover text-black dark:text-white overflow-x-hidden"
      style={{
        backgroundImage: `url('/assets/images/mask-group.png')`,
        backgroundAttachment: "fixed",
      }}
    >
      {investorForm === true && (
        <InvestorForm closeModal={() => setInvestorForm(false)} />
      )}
      <div ref={heroSectionRef} className="py-28 bg-[#0b0b0b]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="lg:flex contentGapTopandLeft">
              <div className="lg:flex lg:flex-col lg:w-full lg:justify-start lg:items-start lg:mt-2">
                <div className="contentGapTop">
                  <div className="flex justify-center lg:justify-start">
                    <h1 className="text-gradient-blue-cyan text-[30px] md:text-[34px] lg:text-[50px] font-extrabold">
                      My INFIN
                    </h1>
                  </div>
                  <div className="flex items-center justify-center text-textColor lg:justify-start">
                    <h4 className="text-[24px] md:text-[28px] lg:text-[46px] font-semibold text-white">
                      Investments For Everyone
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start text-textColor halfContentGapTop">
                  <div className="mb-5 lg:mb-0 lg:justify-start lg:mt-2">
                    <CountdownTimer targetDate={NEXT_10_DAYS} />
                  </div>
                  <div className="w-full max-w-sm my-4 lg:mt-8">
                    <div onClick={() => setInvestorForm(true)}>
                      <Button label="Launch Waiting List" variant={"outline"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center lg:w-3/4">
                <img
                  src={"/assets/images/my-infin-hero.png"}
                  className="max-w-full h-auto"
                  alt="Vector Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <div className="lg:w-1/3 mt-0 lg:mt-48">
            <div className="flex items-center justify-center lg:justify-start lg:items-start">
              <h2 className="text-[24px] lg:text-[36px] font-extrabold">
                Infinity Global
              </h2>
            </div>
            <div className="flex items-center justify-center mt-1 lg:justify-start">
              <h2 className="text-[24px] lg:text-[36px] font-extrabold text-gradient-purple">
                Token Journey
              </h2>
            </div>
          </div>

          <div className="hidden lg:block lg:w-[5%] xl:w-[10%] lg:flex lg:items-center lg:justify-center">
            <span className="border-2 h-[480px] border-[#D1D1D1] dark:border-seperatorLine"></span>
          </div>

          <div ref={textContainerRef} className="w-full lg:w-3/5 xl:w-[45%]">
            {tokenJourneyArray.map((item, index) => (
              <div
                className={`flex flex-row items-center justify-start gap-5 mt-10 lg:mt-0 lg:gap-14 lg:mb-10 ${
                  index !== 0 ? "subHeadingGapTop" : ""
                }`}
                key={index}
              >
                <div className="flex items-start">
                  <img
                    src={"/assets/images/blue-bullet.png"}
                    width={index === 0 ? 18 : 20}
                    height={5}
                    alt="Ellipse"
                  />
                </div>
                <div className="flex flex-col line">
                  <p className={styles.mainText}>
                    <span>{item.title}</span>
                  </p>
                  <p className={`${styles.subText} mt-1`}>
                    <span>{item.subtitle}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10">
        <Roadmap />
      </div>

      <div className="w-full">
        <SocialCommunity />
      </div>
    </section>
  );
};

export default MyInfin;
