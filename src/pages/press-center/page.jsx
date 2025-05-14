import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Button from "../components/button/button";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import SocialCommunity from "../components/socialCommunity/socialCommunity";

//GSAP
import { gsap } from "gsap";

const Infinassets = () => {
  const [modal, setModal] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const pageContainerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const containerRef = useRef(null);
  const childContainerRef = useRef(null);

  useEffect(() => {
    // Page initial fade-in animation from top
    const pageContainer = pageContainerRef.current;

    // Set initial state
    gsap.set(pageContainer, {
      opacity: 0,
      y: -50,
    });

    // Animate to visible state
    gsap.to(pageContainer, {
      duration: 1.2,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    });

    // Additional animations for the hero section
    gsap.from(heroSectionRef.current, {
      duration: 1.5,
      autoAlpha: 1,
      ease: "power1.inOut",
      delay: 0.3,
    });

    // Handle the image reveal animations
    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none reverse",
          start: "top bottom",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        x: "-1%",
        ease: "power2.out",
      });
      tl.from(image, 1.5, {
        autoAlpha: 0,
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "power2.out",
      });
    });

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      ref={pageContainerRef}
      className="w-full mx-auto max-w-[1600px] items-center headingGapTop justify-center self-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/assets/images/gradient-bg.png')`,
        backgroundAttachment: "fixed",
        // Removed inline opacity style - will be handled by GSAP
      }}
    >
      <div
        ref={heroSectionRef}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col my-5 text-center">
          <h1 className="headingGapTop text-gradient-blue-cyan capitalize text-[24px] md:text-[32px] lg:text-[42px] font-extrabold">
            INFIN Global
          </h1>
          <h2 className="flex justify-center text-center mainSubHeadingText text-c1 dark:text-c7">
            Press Center
          </h2>
        </div>
        <div
          ref={containerRef}
          className="relative w-full flex justify-center mt-5"
        >
          <div
            ref={childContainerRef}
            className="relative overflow-hidden reveal w-full max-w-[620px]"
          >
            <img
              width={620}
              height={358}
              src={"/assets/images/press-center.png"}
              alt="logo"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[60%] xl:w-[49%] my-14 text-center text-black dark:text-white text-sm">
          <p>
            Welcome to the Press Centre page for Infinity Global. We are a
            leading provider of decentralized finance solutions, using
            blockchain technology to enable our users to securely and easily
            invest in a variety of assets. If you are a member of the press or
            media and would like to learn more about our company and our
            products, please contact our press/media relations team at
            info@infinityassets.io<br></br> We look forward to working with you!
          </p>
        </div>
        <div className="md:w-80">
          {modal && <Modal closeModal={() => setModal(false)} />}
          <div onClick={() => setModal(true)}>
            <Button label="Download Media Kit" variant={"outline"} />
          </div>
        </div>
        <div className="w-[80%]">
          <SocialCommunity />
        </div>
      </div>
    </div>
  );
};

export default Infinassets;
