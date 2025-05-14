import { useState, useEffect, useRef } from "react";
import Button from "../components/button/button";
import HotelOwnerForm from "../components/hotelOwnerForm/HotelOwnerForm";
import styles from "../partners/page.module.css";
import { useSelector } from "react-redux";

// import video1 from "https://images.infinitydigitalassets.io/assets/videos/partnerherobgsection.mp4";
// import img1 from "https://images.infinitydigitalassets.io/assets/images/partnerPageGraph.webp";
// import img3 from "https://images.infinitydigitalassets.io/assets/images/partnerPageGraphLight.webp";
// import img5 from "https://images.infinitydigitalassets.io/assets/images/PartnersPagesection3.webp";

import SocialCommunity from "../components/socialCommunity/socialCommunity";
import ApexChart from "../components/pieChart/pieChart";
// import { Link } from "react-router-dom";

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StackedBarChart from "../components/stackedBarChart/StackedBarChart";
import { content } from "../../data";
import PdfViewer from "../components/pdfViewer/PdfViewer";
import { Link } from "react-router-dom";
import Modal from "../components/Modal/Modal";

//Registering GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const { investorsProcess } = content;

const caseStudy = [
  [
    {
      text: "1-Register your company",
    },
    {
      text: "2-Underwriting process",
    },
    {
      text: "3-Stay compliant and secure with our legal expertise",
    },
    {
      text: "4-Tokenize your assets and receive revenue",
    },
    {
      text: "5-Stay in control with our platform management services",
    },
  ],
  [
    {
      text: "6-Market analysis",
    },
    {
      text: "7-Tokenomics preparation",
    },
    {
      text: "8-Whitepaper creation",
    },
    {
      text: "9-Marketing strategy",
    },
    {
      text: "10-Expert advice",
    },
  ],
];

const Partners = () => {
  const { theme } = useSelector((state) => state.theme);
  const [modal, setModal] = useState(false);
  const [hotelOwnerForm, setHotelOwnerForm] = useState(false);
  const [selectedInvestorIndex, setSelectedInvestorIndex] = useState(0);
  const [iframeModalOpen, setIframeModalOpen] = useState(false); // State for the iframe modal

  const handleInvestorClick = (index) => {
    if (window.innerWidth >= 768) {
      setSelectedInvestorIndex(index);
    }
  };

  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const heroSectionRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const textContainerRef = useRef(null);
  const containerRef = useRef(null);
  const childContainerRef = useRef(null);

  useEffect(() => {
    //GSAP
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
          start: "top bottom-=20%",
          toggleActions: "play none none reverse",
          // markers:true
        },
      });
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
        start: "top center", // Adjust the start position as needed
        // markers:true,
      },
    });

    let revealContainers = document.querySelectorAll(".reveal");
    const container = childContainerRef.current;

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");

      // Skip animation if it's the case study image
      if (image?.classList.contains("case-study-image")) return;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none reverse",
          start: "top bottom",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        x: "-100%",
        ease: "Power2.out",
      });
      tl.from(image, 1.5, {
        autoAlpha: 1,
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "Power2.out",
      });
    });

    let image = container.querySelector(".case-study-image");

    const video = videoRef.current;

    const handleVideoLoaded = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("loaded", handleVideoLoaded);

    return () => {
      video.removeEventListener("loaded", handleVideoLoaded);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleViewOnline = () => {
    setIframeModalOpen(true); // Open the iframe modal
  };

  const closeIframeModal = () => {
    setIframeModalOpen(false); // Close the iframe modal
  };

  return (
    //This section is the parent of all of the child div sections.
    <section className="w-screen max-w-[1600px] mx-auto text-black dark:text-white">
      {/*Hero Section*/}
      {/*Parent DIV*/}
      {hotelOwnerForm === true && (
        <HotelOwnerForm closeModal={() => setHotelOwnerForm(false)} />
      )}
      {iframeModalOpen && ( // Render the iframe modal when it's open
        <PdfViewer
          closeModal={closeIframeModal}
          iframeUrl="/document/Infinity-Digital-Assets-One-Pager.pdf"
        />
      )}
      <div ref={heroSectionRef}>
        <div
          ref={videoRef}
          className="relative min-h-screen py-40 md:py-40 lg:py-30 xl:py-40"
        >
          {/* Video DIV */}
          <video
            className="absolute inset-0 object-cover w-full h-full"
            src={"/assets/videos/partnerherobgsection.mp4"}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ display: videoLoaded ? "none" : "block" }}
          />
          {/* Box DIV */}
          <div className="xl:pl-[67px] pt-20 lg:pt-20 xl:pt-20 sm:text-center md:items-center md:justify-center md:flex xl:flex-none xl:items-start xl:justify-start">
            {/* Inner Box Content Spacing & Placement Div */}
            <div
              className={`w-full md:w-[80%] xl:w-[53%] ${styles.partnerBorderDecoration} flex flex-col justify-center items-center lg:justify-start lg:items-start px-5 lg:px-8 lg:py-12 xl:ml-16`}
            >
              <div
                className={`mb-5 ${styles.sec1HeadingText} text-gradient-blue-cyan`}
              >
                <h1 className="text-center xl:text-left">
                  Making Traditional Assets Like Real-Estate Liquid
                </h1>
              </div>
              <div className={`mb-10 ${styles.sec1smallSubHeadingText}`}>
                <h2 className="text-center xl:text-left">
                  Unleash Your Assets | Let Us Help You Tokenize
                </h2>
              </div>
              <div className="w-[90%] lg:w-full xl:[90%] flex flex-col xl:flex-row gap-5 justify-center items-center xl:justify-start xl:items-start">
                <div
                  className="w-[100%] md:w-[60%] xl:w-[43%]"
                  onClick={handleViewOnline}
                >
                  <Button label="One Pager" variant={"outline"} />
                </div>
                <div className="w-[100%] md:w-[60%] xl:w-[43%]">
                  {/* <Link to="/contact-us"> */}
                  <Link to="/contact-us">
                    <Button label="Contact Us" variant={"outline"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*All Remaining Sections Excluding Hero Section*/}
      <div
        className="bg-fixed bg-no-repeat bg-cover bgColourPages"
        style={{
          backgroundImage: ` url('/assets/images/disclaimer-bg.png')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/*Partnership With Infinity Section*/}
        <div className="">
          {/* Div for Heading */}
          <div className="flex flex-col items-center justify-center py-10 md:py-20 lg:py-26 xl:py-30">
            <div
              ref={addToRefs}
              className="mb-7 w-[95%] flex items-center justify-center"
            >
              <h1 className="capitalize text-[24px] md:text-[42px] font-extrabold leading-none">
                <span className="text-gradient-purple">Infinity partnered</span>{" "}
                with Zanzibar 5-star Resort
              </h1>
            </div>
            <div
              ref={addToRefs}
              className="flex items-center justify-center mb-14"
            >
              <p className="w-[95%] md:w-[80%] xl:w-[45%] text-center font-normal">
                To go through the full tokenization process for their luxurious
                hotel on Zanzibar. The original owner still holds [80...99]% of
                the ownership and is responsible for day-to-day operations, but
                here is what we did:
              </p>
            </div>
            <div className="w-[95%] xl:w-[60%]">
              <StackedBarChart />
            </div>
          </div>
        </div>

        {/*Tokenomics Section*/}
        <div className="flex flex-col items-center py-8 lg:flex-row md:py-16 lg:py-20">
          {/*Div for Heading */}
          <div className="w-[95%] px-5 lg:px-20 xl:px-0 lg:w-[50%] flex flex-col justify-center items-center">
            <div
              ref={addToRefs}
              className={` ${styles.sec1HeadingText}  mb-12`}
            >
              <h1
                className={`${
                  theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
                }`}
              >
                Tokenomics
              </h1>
            </div>
            <div className="w-[90%] md:w-[60%] lg:w-[100%] xl:w-[60%] mb-12">
              <ApexChart />
            </div>
            <div className="text-lg lg:text-xl">
              <p className="mb-6">
                Stage I, Stage II, Stage III, - Fund rising Token 20%
              </p>
              <ul className={`${styles.customRectangle}`}>
                <li className="mb-4">Stage I 1%</li>
                <li className="mb-4">
                  Post fund raising token available for sale* 68%
                </li>
                <li className="mb-4">Property Management 12%</li>
                <li className="mb-4">Stage III 10%</li>
                <li className="mb-4">Stage II 9%</li>
              </ul>
              <div
                className="mt-10 w-[100%] xl:w-[70%]"
                onClick={() => setModal(true)}
              >
                <Button
                  label="Get Full Case Study"
                  // variant={theme === "light" ? "outlineLight" : "solid"}
                  variant={"outline"}
                />
              </div>
            </div>
          </div>

          <div className="w-[100%] py-20 lg:py-0 lg:w-[50%] relative">
            <div className="flex items-center justify-center px-10 md:px-0">
              <div className="ml-0">
                <img
                  src={"/assets/images/tokenomics-img-min.png"}
                  height={426}
                  width={450}
                  alt="Graph"
                  className="w-[100%] origin-left transform"
                />
              </div>
            </div>
          </div>
        </div>

        {/*Maldives Case Study Section */}
        <div className="px-6 py-8 lg:py-32 xl:px-24 lg:px-6 md:px-20">
          <div
            ref={addToRefs}
            className="flex items-center justify-start lg:justify-center"
          >
            <h1 className="capitalize text-[26px] md:text-[42px] font-extrabold leading-none">
              <span className="text-gradient-purple">Zanzibar</span> Case Study
            </h1>
          </div>
          <div
            ref={textContainerRef}
            className="flex flex-col py-8 line lg:flex-row lg:justify-evenly lg:px-10 lg:py-16"
          >
            <div className="lg:w-[25%] pt-0 lg:pt-10 text-lg">
              {caseStudy[0].map((item, index) => (
                <p className="py-2 line" key={index}>
                  <span>{item.text}</span>
                </p>
              ))}
            </div>
            <div
              ref={childContainerRef}
              className="overflow-hidden relative reveal lg:w-[50%] mt-8 lg:mt-0 md:py-12 lg:py-0 flex justify-center"
            >
              <img
                src={"/assets/images/case-study.png"}
                height={511}
                width={767}
                alt="Graph"
                className="case-study-image w-[90%] origin-left"
              />
            </div>
            <div className="lg:w-[25%] lg:pl-4 xl:pl-10 pt-10 text-lg lg:px-0">
              {caseStudy[1].map((item, index) => (
                <p className="py-2 line" key={index}>
                  <span>{item.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/*Investors Process Section */}
        <div
          className={`px-6 lg:py-32 xl:px-24 lg:px-6 md:px-20 ${
            hotelOwnerForm === true ? "opacity-30" : "opacity-100"
          }`}
        >
          <div
            ref={addToRefs}
            className="flex items-center justify-start lg:justify-center"
          >
            <h1 className="capitalize text-[26px] md:text-[42px] font-semibold md:font-bold leading-none">
              <span
                className={`font-extrabold ${
                  theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
                }`}
              >
                Investors
              </span>{" "}
              Process
            </h1>
          </div>
          <div className="flex flex-col items-center justify-between lg:items-start lg:flex-row">
            <div className="lg:w-[45%] py-16 lg:py-20 lg:pl-14  lg:text-[#828282]">
              {investorsProcess.map((investor, index) => (
                <div
                  className="flex flex-col"
                  key={index}
                  onClick={() => handleInvestorClick(index)}
                >
                  <div
                    className={`flex items-center gap-4 mb-5 lg:mb-10 lg:justify-start lg:gap-9 cursor-pointer hover:scale-105 duration-500 dark:lg:hover:text-white lg:hover:text-black ${
                      selectedInvestorIndex === index
                        ? "font-bold text-black dark:text-white lg:[&>svg]:hover:text-black"
                        : ""
                    }`}
                  >
                    <div>{investor.icon}</div>
                    <div>
                      <p className="text-lg font-semibold lg:font-extrabold lg:text-xl">
                        {investor.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mb-10 lg:hidden">
                    <p>
                      {investor.text}
                      {index === 0 && (
                        <button
                          onClick={() => setHotelOwnerForm(true)}
                          className={`font-extrabold cursor-pointer ${
                            theme === "light"
                              ? "text-blue"
                              : "text-gradient-blue-cyan"
                          }`}
                        >
                          Register Now
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[50%] hidden lg:block py-20">
              <div className="hover:scale-105 duration-500 w-[90%] rounded-2xl border px-8 py-14 border-white bg-opacity-8 backdrop-filter backdrop-blur-3xl bg-investorCardBg dark:bg-formColor shadow-lg">
                <p className="text-base">
                  {investorsProcess[selectedInvestorIndex].text}
                  {selectedInvestorIndex === 0 && (
                    <button
                      onClick={() => setHotelOwnerForm(true)}
                      className={`font-extrabold cursor-pointer ${
                        theme === "light"
                          ? "text-blue"
                          : "text-gradient-blue-cyan"
                      }`}
                    >
                      Register Now
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
          {modal && <Modal closeModal={() => setModal(false)} />}
        </div>

        {/*Social Community Section */}
        <div>
          <SocialCommunity />
        </div>
      </div>
    </section>
  );
};

export default Partners;
