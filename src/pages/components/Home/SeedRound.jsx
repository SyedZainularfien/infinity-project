import { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "../../../data";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const {
  home: { seedRoundCards },
} = content;

const SeedRoundHome = () => {
  const headSectionRef = useRef();
  const cardsContainerRef = useRef();
  const revealRef = useRef([]);
  revealRef.current = [];

  const { theme } = useSelector((state) => state.theme);

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
            end: "bottom top",
            toggleActions: "restart none none reset",
          },
        }
      );

      revealRef.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.95,
          },
          {
            duration: 1,
            autoAlpha: 1,
            x: 0,
            scale: 1,
            ease: "power2.out",
            delay: 0.1 * index,
            scrollTrigger: {
              trigger: el,
              start: "top bottom-=100",
              toggleActions: "restart none none reset",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, cardsContainerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <section className="py-20 overflow-x-hidden sm:py-30 bg-[url('/assets/images/mask-group.png')] bg-contain bg-start bg-no-repeat">
      <div ref={cardsContainerRef} className="px-5 home-seed-round">
        <div
          ref={headSectionRef}
          className="hsr-heading max-w-[800px] mx-auto mb-10"
        >
          <h1
            className={`capitalize ${
              theme === "dark" ? "text-white" : "text-black"
            } text-center text-[28px] sm:text-[46px] font-semibold sm:font-extrabold leading-none mb-3`}
          >
            Our <span className="text-gradient-purple">seed round</span>
          </h1>
          <p
            className={`text-center ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Infinity is raising capital for building the best investment
            opportunities we find and tokenize them using blockchain technology,
            fractionalize them into multiple asset shares and then offer them up
            to our user pool to invest in.
          </p>
        </div>
        <div className="hsr-cards flex flex-col sm:flex-row justify-center max-w-[100%] sm:max-w-[95%] mx-auto gap-5 flex-wrap">
          {seedRoundCards.map((card, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              className={`group ${styles.seed_card} border border-[#22DDD2] rounded-xl w-[100%] sm:w-[48%] custom-hover p-4 sm:p-10`}
            >
              <h1
                className={`text-[20px] md:text-[24px] lg:text-[30px] font-extrabold capitalize mb-3 text-gradient-blue-cyan`}
              >
                {card.title}
              </h1>

              <p
                className={`text-base font-light ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeedRoundHome;
