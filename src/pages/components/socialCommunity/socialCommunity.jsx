import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    href: "https://discord.gg/C9yZQReN",
    icon: "/assets/icons/discord.svg",
    iconAlt: "discord",
  },
  {
    href: "https://twitter.com/infinityassets1",
    icon: "/assets/icons/twitter.svg",
    iconAlt: "twitter",
  },
  {
    href: "https://www.linkedin.com/company/infinitydigitalassets/",
    icon: "/assets/icons/linkedin.svg",
    iconAlt: "linkedin",
  },
  {
    href: "https://medium.com/@infinitydigitalassets",
    icon: "/assets/icons/medium-logo.png",
    iconAlt: "medium",
  },
];

const SocialCommunity = () => {
  const headerTextRef = useRef();
  const joinCommRef = useRef();
  const joinCommIconsRef = useRef();
  const sectionRef = useRef();

  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    // Ensure elements are visible before animating
    gsap.set(
      [headerTextRef.current, joinCommRef.current, joinCommIconsRef.current],
      {
        autoAlpha: 1,
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headerTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        joinCommRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        joinCommIconsRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="social-section px-3 py-10 md:py-16 lg:py-20 min-h-[50vh] flex flex-col justify-center overflow-hidden"
    >
      <div className="container mx-auto">
        <div ref={headerTextRef} className="text-center opacity-0">
          <h3 className="text-[24px] md:text-[36px] text-c1 dark:text-white lg:text-[46px] font-extrabold">
            <span className="text-gradient-purple">Reclaim </span> Your
            Financial Future
            <br />
            With <span className="text-gradient-purple"> Infinity Global</span>
          </h3>
        </div>

        <div
          ref={joinCommRef}
          className="text-sm text-center md:text-xl text-c1 dark:text-textColor opacity-0 mt-6"
        >
          <h4 className="inline-block text-xl text-black dark:text-white">
            Join Our Community
          </h4>
        </div>

        <div
          ref={joinCommIconsRef}
          className="flex flex-col items-center justify-center opacity-0 mt-8"
        >
          <div className="flex items-center justify-center md:border-solid gap-12 md:border-2 md:rounded-xl bg-transparent md:border-[#22DDD2] py-5 md:p-none md:w-[60%] lg:w-[40%] w-[80%] md:my-6">
            {socialLinks.map((socialLink, idx) => (
              <a
                className="flex w-[30px] h-[30px] transition-transform duration-300 transform hover:scale-125"
                key={idx}
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.iconAlt}
              >
                <img
                  src={socialLink.icon}
                  height={40}
                  width={40}
                  alt="social links"
                  className={`${theme === "dark" ? "invert-0" : "invert"}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialCommunity;
