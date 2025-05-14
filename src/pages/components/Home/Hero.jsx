import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import InvestorForm from "../investorForm/InvestorForm";
import CountdownTimer from "../countdown/countdownTimer";
import Button from "../button/button";

const NEXT_10_DAYS = new Date("07/21/2025").getTime() + 1000 * 3600 * 24 * 10;

const Hero = () => {
  const heroSectionRef = useRef(null);
  const [investorForm, setInvestorForm] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.set(heroSectionRef.current, { autoAlpha: 0 });

    gsap.to(heroSectionRef.current, {
      duration: 1.5,
      autoAlpha: 1,
      ease: "power2.out",
      delay: 0.2,
    });
  }, []);

  const handleWaitingListClick = (e) => {
    e.stopPropagation();
    setInvestorForm(true);
  };

  return (
    <>
      {/* Main hero section */}
      <section
        ref={heroSectionRef}
        className={`relative min-h-full bg-center bg-no-repeat bg-cover bgColourPages transition-opacity duration-300 ${
          investorForm ? "opacity-20" : "opacity-100"
        }`}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/images/home-hero-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10 pb-12">
          <div className="flex flex-col lg:flex-row">
            {/* Left content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-40 lg:pt-52 w-full lg:w-1/2 px-4 sm:px-10 lg:px-28">
              <div className="mb-10 hero-headings">
                <h1 className="text-gradient-blue-cyan text-3xl md:text-4xl lg:text-5xl font-extrabold">
                  Next Generation
                </h1>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                  Investments For Everyone
                </h1>
              </div>

              <div className="text-textColor">
                <CountdownTimer targetDate={NEXT_10_DAYS} />
              </div>

              <div className="w-3/4 my-10 md:w-1/2 lg:w-3/4 xl:w-1/2 lg:my-8">
                <div onClick={handleWaitingListClick}>
                  <Button label="Launch Waiting List" variant="outline" />
                </div>
              </div>
            </div>

            {/* Right video area */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <video
                ref={videoRef}
                src="/assets/videos/home-hero-animate.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full md:w-11/12 lg:w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investor form modal */}
      {investorForm && (
        <InvestorForm closeModal={() => setInvestorForm(false)} />
      )}
    </>
  );
};

export default Hero;
