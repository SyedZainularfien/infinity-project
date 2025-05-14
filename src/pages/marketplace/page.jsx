import Button from "../components/button/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import React, {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  memo,
} from "react";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import Modal from "../components/Modal/Modal";
import styles from "./page.module.css";
import GlobalNetWealth from "../components/Home/GlobalNet";

gsap.registerPlugin(ScrollTrigger);

const marketCategories = ["Real Estate", "Gold", "Metals", "Pre-IPO", "AI"];

const marketData = [
  {
    imgUrl: "/assets/images/marketplaceSection2img1.png",
    price: "Coming Soon",
    place: "Maldives",
    cat: "Real Estate",
  },
  {
    imgUrl: "/assets/images/marketplaceSection2img2.png",
    price: "Coming Soon",
    place: "Fiji",
    cat: "Real Estate",
  },
  {
    imgUrl: "/assets/images/marketplaceSection2img3.png",
    price: "Coming Soon",
    place: "Bali",
    cat: "Real Estate",
  },
  {
    imgUrl: "/assets/images/marketplaceSection2img4.png",
    price: "Coming Soon",
    place: "Malaysia",
    cat: "Real Estate",
  },
  {
    imgUrl: "/assets/images/marketplaceSection2img5.png",
    price: "Coming Soon",
    place: "Dubai",
    cat: "Real Estate",
  },
];

// Memoized MarketCard component to prevent unnecessary re-renders
const MarketCard = memo(({ data, refCallback }) => {
  return (
    <div
      ref={refCallback}
      className="p-3 bg-[#2B2B2B] shadow-xl custom-hover dark:bg-cardsBg rounded-2xl"
    >
      <div className="flex items-center justify-center">
        <img
          src={data.imgUrl}
          width={520}
          height={223}
          alt={`Image of ${data.place}`}
        />
      </div>
      <div className="flex flex-col gap-1 py-4">
        <h3 className="text-2xl font-extrabold text-c1 dark:text-white">
          {data.price}
        </h3>
        <p className="text-xl text-[#9F9F9F]">{data.place}</p>
      </div>
    </div>
  );
});

// Memoized CategoryTabs component
const CategoryTabs = memo(
  ({ selectedCategory, categories, onCategoryClick }) => {
    return (
      <div className="flex items-center justify-between px-3 border-2 text-c1 dark:text-white lg:px-10 border-cyan-500 rounded-xl">
        {categories.map((category, index) => (
          <p
            key={index}
            className={`flex-1 text-xs lg:text-lg text-center ${
              styles.cat_link
            } py-5 hover:text-cyan-500 cursor-pointer font-semibold ${
              selectedCategory === category
                ? `${styles.active} lg:font-extrabold text-cyan-500 text-sm lg:text-lg`
                : ""
            }`}
            style={{
              minWidth: `${100 / categories.length}%`,
            }}
            onClick={() => onCategoryClick(category)}
          >
            {category}
            {selectedCategory === category &&
              !marketData.some((data) => data.cat === category) && (
                <p className="text-[8px] lg:text-xs text-c1 dark:text-white">
                  (coming soon)
                </p>
              )}
          </p>
        ))}
      </div>
    );
  }
);

// Separate memoized component for the Buy Now button and modal
const BuyNowButton = memo(({ theme }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex items-center justify-center headingGapTop">
      {modal && <Modal closeModal={() => setModal(false)} />}
      <div className="w-[97%] lg:w-[23%]" onClick={() => setModal(true)}>
        <Button label="Buy Now" variant={"outline"} />
      </div>
    </div>
  );
});

const Marketplace = () => {
  const { theme } = useSelector((state) => state.theme);
  const [selectedCategory, setSelectedCategory] = useState(marketCategories[0]);
  const [isCategoryDataAvailable, setIsCategoryDataAvailable] = useState(true);
  const heroSectionRef = useRef(null);
  const headingRef = useRef(null);
  const revealRef = useRef([]);
  revealRef.current = [];
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category);
    checkDataAvailability(category);
  }, []);

  const checkDataAvailability = useCallback((category) => {
    const categoryData = marketData.filter((data) => data.cat === category);
    setIsCategoryDataAvailable(categoryData.length > 0);
  }, []);

  const addToRefs = useCallback((el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  }, []);

  useLayoutEffect(() => {
    //GSAP
    gsap.from(heroSectionRef.current, {
      duration: 3,
      autoAlpha: 1,
      ease: "none",
    });

    // GSAP animation for the heading
    gsap.from(headingRef.current, {
      autoAlpha: 1,
      y: "-40%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    // GSAP animation for individual cards
    revealRef.current.forEach((el, index) => {
      gsap.set(el, {
        x: index % 2 === 0 ? "-30%" : "30%",
        scale: 0.6,
        opacity: 0.2,
        rotateZ: index % 2 === 0 ? "30%" : "-30%",
        y: "-30%",
      });

      gsap.from(el, {
        x: index % 2 === 0 ? "-30%" : "30%",
        opacity: 0.2,
        scale: 0.6,
        rotateZ: index % 2 === 0 ? "30%" : "-30%",
        y: "-30%",
      });

      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1,
        scale: 1,
        rotateZ: 0,
        y: 0,
        scrollTrigger: {
          trigger: headingRef.current,
          toggleActions: "play none none reverse",
          start: "top center",
        },
      });
    });

    const video = videoRef.current;
    checkDataAvailability(selectedCategory);

    if (video) {
      const handleVideoLoaded = () => {
        setVideoLoaded(true);
      };

      video.addEventListener("loaded", handleVideoLoaded);

      return () => {
        video.removeEventListener("loaded", handleVideoLoaded);
      };
    }
  }, [selectedCategory, checkDataAvailability]);

  return (
    <div className="w-[100%] max-w-[1600px] mx-auto">
      {/*First Section*/}
      <div
        ref={heroSectionRef}
        className="flex w-full items-center justify-center mx-auto bg-none lg:bg-[url('/assets/images/marketp1.png')] lg:bg-cover lg:bg-center h-0 lg:h-[810px]"
      >
        <div className="hidden lg:block w-[35%] h-[60%] mt-40 sectionGaptop px-8 py-16 ml-[60%] bg-black">
          <div className="w-[90%] text-left text-[22px] md:text-[24px] lg:text-[26px] xl:text-[30px] font-extrabold">
            <h1 className="pb-10 text-white ">MALDIVES Hotels</h1>
          </div>
          <div className="flex w-[100%] py-10 items-center">
            <span className="w-[100%] h-[1px] bg-c2 "></span>
          </div>
          <div className="w-[90%] text-left mainSubHeadingText">
            <h2 className="font-[32px] text-white">Coming Soon</h2>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-[100%] flex items-center mx-auto justify-center bg-cover bg-center">
        <div className="w-[95%] mx-auto">
          <img
            src={"/assets/images/marketp1.png"}
            height={292}
            width={490}
            alt="mobile heri"
            className="w-[100%] mt-28 border rounded-xl"
          />
        </div>
      </div>

      <div className="flex mx-6 flex-col lg:hidden my-14 container w-[90%] justify-start items-start">
        <div className="w-[90%] text-left subHeadingText">
          <h1 className="pb-10 text-c1 dark:text-white">MALDIVES Hotels</h1>
        </div>
        <div className="flex w-[100%] py-6 items-center">
          <span className="w-[100%] h-[1px] bg-c1 dark:bg-c2"></span>
        </div>
        <div className="w-[90%] text-left mainSubHeadingText">
          <h2 className="font-[32px] text-c1 dark:text-white">Coming Soon</h2>
        </div>
      </div>

      {/* {2nd Section} */}
      <div
        className="object-contain py-10 bg-repeat bg-cover bgColourPages"
        style={{
          backgroundImage: `url('/assets/images/gradient-bg.png')`,
        }}
      >
        {/*Div for Heading*/}
        <div className="flex flex-col items-center justify-center py-10 overflow-x-hidden md:py-32 lg:py-30 xl:py-40">
          <div
            ref={headingRef}
            className="mb-7 w-[95%] flex items-center justify-center"
          >
            <h1 className="capitalize text-[24px] lg:text-[36px] font-extrabold text-c1 dark:text-white leading-none">
              Our <span className="text-gradient-purple">Market Place</span>
            </h1>
          </div>
          <div className="w-[90%] md:w-[70%] lg:w-[80%]">
            {isCategoryDataAvailable ? (
              <>
                <div className="py-10">
                  <CategoryTabs
                    selectedCategory={selectedCategory}
                    categories={marketCategories}
                    onCategoryClick={handleCategoryClick}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-5 lg:flex-row">
                    {marketData
                      .filter((data) => data.cat === selectedCategory)
                      .slice(0, 2)
                      .map((data, index) => (
                        <div key={index} className="lg:w-1/2">
                          <MarketCard data={data} refCallback={addToRefs} />
                        </div>
                      ))}
                  </div>
                  <div className="flex flex-col gap-5 lg:flex-row">
                    {marketData
                      .filter((data) => data.cat === selectedCategory)
                      .slice(2)
                      .map((data, index) => (
                        <div key={index} className="lg:w-1/3">
                          <MarketCard data={data} refCallback={addToRefs} />
                        </div>
                      ))}
                  </div>
                </div>
                <BuyNowButton theme={theme} />
              </>
            ) : (
              <>
                <div>
                  <div className="flex items-center justify-between px-5 my-10 border text-c1 dark:text-white lg:px-10 border-cyan-500 rounded-xl">
                    {marketCategories.map((category, index) => (
                      <p
                        key={index}
                        className={`flex-1 text-xs md:text-lg text-center ${
                          styles.cat_link
                        } py-5 hover:text-cyan-500 cursor-pointer font-semibold ${
                          selectedCategory === category
                            ? "font-extrabold text-cyan-500 text-sm lg:text-lg"
                            : ""
                        }`}
                        style={{
                          minWidth: `${100 / marketCategories.length}%`,
                        }}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                        {selectedCategory === category &&
                          !marketData.some((data) => data.cat === category) && (
                            <p className="text-[8px] lg:text-xs text-c1 dark:text-white ">
                              (coming soon)
                            </p>
                          )}
                      </p>
                    ))}
                  </div>
                  {selectedCategory !== "Real Estate" ? (
                    <div
                      className={`w-[80%] flex flex-col items-center mx-auto justify-center`}
                    >
                      <div className="w-[60%] mx-auto justify-center mt-16 md:mt-0">
                        <img
                          src={"/assets/images/comingsoon.png"}
                          height={292}
                          width={390}
                          alt="mobile hero"
                          className="w-[100%]"
                        />
                      </div>
                      <div className="flex flex-col w-[100%] investorSubHeading items-center self-center my-12">
                        <p className="text-center mainSubHeadingText">
                          Coming Soon...
                        </p>
                        <p className="text-center smallSubHeadingText">
                          Stay Connected, Stay Updated!
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5 mt-10">
                      <div className="flex flex-col gap-5 lg:flex-row">
                        {marketData
                          .filter((data) => data.cat === selectedCategory)
                          .slice(0, 2)
                          .map((data, index) => (
                            <div key={index} className="lg:w-1/2">
                              <MarketCard data={data} refCallback={addToRefs} />
                            </div>
                          ))}
                      </div>
                      <div className="flex flex-col gap-5 lg:flex-row">
                        {marketData
                          .filter((data) => data.cat === selectedCategory)
                          .slice(2)
                          .map((data, index) => (
                            <div key={index} className="lg:w-1/3">
                              <MarketCard data={data} refCallback={addToRefs} />
                            </div>
                          ))}
                      </div>
                      <BuyNowButton theme={theme} />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* {3rd Section} */}
      <div>
        <GlobalNetWealth />
      </div>

      {/* {4th Section} */}
      <div className="mt-10">
        <SocialCommunity />
      </div>
    </div>
  );
};

export default Marketplace;
