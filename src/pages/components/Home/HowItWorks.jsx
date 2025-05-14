"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "../../../data";

const {
  home: { howItWorks },
} = content;

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const headSectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headSectionRef.current,
        {
          autoAlpha: 0,
          y: -60,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headSectionRef.current,
            start: "top bottom-=150",
            toggleActions: "restart none none reset",
          },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    setVideoLoaded(true);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative md:h-[120vh] max-w-[1600px] mx-auto bg-cover bg-center bg-no-repeat overflow-hidden text-black dark:text-white"
      style={{
        backgroundImage: `url('https://images.infinitydigitalassets.io/assets/images/how-it-works-mobile-bg-min.webp')`,
      }}
    >
      {videoLoaded && (
        <video
          className="absolute z-10 object-cover w-full h-full"
          src={"/assets/videos/how-it-works.mp4"}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      )}
      <div className="relative z-20 pt-20 pb-12">
        <div
          ref={headSectionRef}
          className="hiw-heading max-w-[800px] mx-auto mb-10"
        >
          <h1 className="capitalize text-center text-[28px] sm:text-[46px] text-white font-semibold md:font-extrabold leading-none mb-3">
            How It works
          </h1>
        </div>
        <div
          className={`no-scrollbar ml-0 sm:ml-20 lg:ml-28 md:max-h-[90vh] md:overflow-y-scroll overflow-x-hidden`}
        >
          {howItWorks.map((hiw, idx) => (
            <div
              key={idx + hiw.title}
              className="flex flex-col items-center justify-between px-3 my-16 sm:flex-row sm:px-0"
            >
              <div className="w-[100%] sm:w-[55%] mb-5 sm:mb-0">
                <div className="max-w-[100%] sm:max-w-[70%] md:max-w-[60%]">
                  <div
                    className={`${styles.hiw_card} border-[#22DDD2] rounded-md p-4 sm:py-10 sm:px-6`}
                  >
                    <div className="relative mb-3">
                      <span className="text-7xl text-[#000025] font-extrabold font-bebas">
                        0{idx + 1}
                      </span>
                      <h3 className="absolute bottom-0 left-0 mb-0 text-[24px] sm:text-[32px] font-bold md:font-extrabold capitalize text-gradient-blue-cyan">
                        {hiw.title}
                      </h3>
                    </div>
                    <p
                      className="text-white"
                      dangerouslySetInnerHTML={{
                        __html: hiw.description,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="sticky pb-10 top-0 w-[100%] sm:w-[45%] flex justify-center p-0 sm:pr-10">
                <img
                  src="/assets/images/how-it-works-1.webp"
                  width={400}
                  height={517}
                  alt="Next Generation Investments For Everyone"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
