import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "../components/button/button";
import Vimeob from "../components/vimeob/vimeob";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import { Link } from "react-router-dom";
import styles from "./page.module.css";
import Modal from "../components/Modal/Modal";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

const Learn = () => {
  const [modalb, setModalb] = useState(false);
  const [modalv, setModalv] = useState(false);
  const { theme } = useSelector((state) => state.theme);

  const heroSectionRef = useRef(null);
  const revealRefs = useRef([]);

  // Memoized function to add elements to refs
  const addToRefs = useCallback((el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    // GSAP animations with cleanup
    const ctx = gsap.context(() => {
      gsap.from(heroSectionRef.current, {
        duration: 3,
        autoAlpha: 1,
        ease: "none",
      });

      revealRefs.current.forEach((el) => {
        gsap.from(el, {
          autoAlpha: 1,
          y: "-40%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=10%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  // FAQ data for cleaner rendering
  const faqItems = [
    {
      question: "What is Lorem Ipsum? Lorem Ipsum is simply dummy",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.",
    },
    {
      question: "Which payment methods can I use to purchase a Teams plan?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?",
    },
    {
      question: "Why do I need a plan if Businessname is free?",
      answer: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.",
        "Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.",
      ],
    },
    {
      question: "What do I get with a Pro license?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.",
    },
    {
      question: "Should I purchase a subscription or pay as I go?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.",
    },
  ];

  return (
    <div className="w-[100%] max-w-[1600px] mx-auto">
      {/* First Section - Hero */}
      <div
        ref={heroSectionRef}
        className="min-h-screen md:flex w-[100%] flex flex-col mx-auto bg-cover bg-[#0b0b0b] py-40"
        style={{
          backgroundImage: `url("/assets/images/learn-bg.png")`,
          backgroundSize: "contain", // or "contain" depending on your needs
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[100%] mt-10 sectionGaptop lg:flex lg:flex-col lg:justify-start lg:items-start md:flex md:flex-col md:justify-center md:items-center lg:w-[55%] xl:w-[48%] lg:border lg:rounded-xl border-cyan px-8 py-14 lg:ml-16 xl:ml-40">
          <div className={`mb-5 ${styles.sec1HeadingText}`}>
            <h1 className="text-center lg:text-left">
              Everything You Need To Learn About
            </h1>
          </div>
          <div className={`mb-10 ${styles.sec1smallSubHeadingText}`}>
            <h2 className="text-center lg:text-left">
              Learn How INFIN Global LLC Works
            </h2>
          </div>
          <div className="w-[100%] md:w-[60%] xl:w-[50%]">
            {modalb && <Modal closeModal={() => setModalb(false)} />}
            <div onClick={() => setModalb(true)}>
              <Button label="A to Z Process" variant={"outline"} />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Video */}
      <div className="mt-10 flex relative flex-col items-center justify-center">
        <div ref={addToRefs} onClick={() => setModalv(true)}>
          <img
            src={"/assets/images/learn-thumbnail.png"}
            width={768}
            height={421}
            alt="Video"
            loading="lazy"
            // className="cursor-pointer"
          />
        </div>
        <div
          ref={addToRefs}
          className="w-[70%] md:w-[40%] lg:w-[30%] xl:w-[20%] border-r-[40%]"
        >
          <div onClick={() => setModalv(true)} className="flex justify-center">
            <Vimeob
              label={"Our Vimeo Channel"}
              variant={theme === "light" ? "darkOutline" : "outline"}
            />
          </div>
        </div>
      </div>

      {/* Third Section - FAQ */}
      <div className="flex flex-col items-center justify-center gap-2 pt-5 pb-14 headingGapTop">
        <div className="grid items-center w-[100%] lg:w-[90%] justify-center grid-flow-row md:grid-cols-2">
          <div className="w-[90%] mx-6 lg:mx-10 md:border-r md:border-2x">
            <div ref={addToRefs} className="flex justify-start mb-5">
              <h2 className="mainSubHeadingText">
                <span
                  className={
                    theme === "light" ? "text-blue" : "text-gradient-blue-cyan"
                  }
                >
                  Frequently{" "}
                </span>
                Asked Questions
              </h2>
            </div>
            <div ref={addToRefs}>
              <p className="text-sm text-black lg:text-lg dark:text-white">
                We know you got questions in your mind, and we have their
                answers too
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center">
            <div className="flex flex-col w-[80%] mt-7 md:mt-0 gap-6 ml-7 md:ml-0 divide-y divide-gray-700">
              {faqItems.map((item, index) => (
                <details key={index}>
                  <summary className="hover:scale-105 duration-500 text-base py-2 text-black dark:text-white outline-none cursor-pointer focus:underline focus:text-c9 dark:focus:text-c9 hover:text-cyan-500 dark:hover:text-cyan-500">
                    {item.question}
                  </summary>
                  <div className="px-4 pb-4 pt-2 text-black dark:text-white">
                    {Array.isArray(item.answer) ? (
                      item.answer.map((paragraph, i) => (
                        <p key={i} className="text-sm">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm">{item.answer}</p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[80%] text-lg text-center headingGapTop">
          <p className="text-black dark:text-white">
            Didn't find your correspondent answer?{" "}
            <Link to="/contact-us" className="text-blue hover:underline">
              Contact us
            </Link>{" "}
            and discuss your issue
          </p>
        </div>
        {modalv && <Modal closeModal={() => setModalv(false)} />}
      </div>

      {/* Fourth Section - Social Community */}
      <div className="mb-5">
        <SocialCommunity />
      </div>
    </div>
  );
};

export default Learn;
