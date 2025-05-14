import { useSelector } from "react-redux";

const roadmapData = [
  {
    heading: "Phase one",
    timeframe: "Q1",
    content: [
      {
        text: "Design & Build Token,",
        isBold: false,
      },
      {
        text: "Webapp",
        isBold: false,
      },
      {
        text: "Dapp",
        isBold: false,
      },
    ],
  },
  {
    heading: "Phase two",
    timeframe: "Q2-Q3",
    content: [
      {
        text: "Q2",
        isBold: true,
      },
      {
        text: "Pre-seed",
        isBold: false,
      },

      {
        text: "Q3",
        isBold: true,
      },
      {
        text: "Listing asset, securing VC",
        isBold: false,
      },
      {
        text: " Token Public launch",
        isBold: false,
      },
    ],
  },
  {
    heading: "Phase three",
    timeframe: "Q3",
    content: [
      {
        text: "Users",
        isBold: false,
      },
      {
        text: "Community Growth: Token launch",
        isBold: false,
      },
    ],
  },
  {
    heading: "Phase  four",
    timeframe: "Q4",
    content: [
      {
        text: "2nd Asset (Gold)",
        isBold: false,
      },
    ],
  },
  {
    heading: "Roadmap",
    timeframe: "(3 and 4 years)",
    content: [
      {
        text: "Revenue:",
        isBold: true,
      },
      {
        text: "0-1 Million per month 1-3 Million per month",
        isBold: false,
      },
      {
        text: "User: ",
        isBold: true,
      },
      {
        text: "1 Million",
        isBold: false,
      },
      {
        text: "Alternative digital Assets: ",
        isBold: true,
      },
      {
        text: "Gold & Precious metals",
        isBold: false,
      },
      {
        text: "P2P to Exchanges/Capital markets",
        isBold: false,
      },
    ],
  },
];

const Roadmap = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <section
      className={`my-10 md:my-16 lg:my-20 h-auto lg:h-screen w-[100%] overflow-visible lg:overflow-hidden ${
        theme === "dark"
          ? 'bg-[url("/assets/images/mask-group.png")] bg-contain bg-start bg-no-repeat'
          : ""
      }`}
    >
      <div className="flex flex-col h-full px-5 md:px-28">
        <div className="relative h-full border-0 lg:border-l lg:border-r border-[#d1d1d1] dark:border-[#2A2A29] flex flex-col px-0 md:px-2 lg:flex-row justify-center items-center lg:w-[100%]">
          <span className="absolute w-[1px] h-full bg-[#d1d1d1] dark:bg-[#2A2A29] left-[45%] transform -translate-x-[45%] hidden lg:block"></span>
          <div className="lg:w-[40%] lg:left-0 text-[24px] md:text-[28px] text-center lg:text-left lg:text-[36px] font-bold md:font-extrabold">
            <h3
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              }  lg:ml-3`}
            >
              <span className="text-gradient-purple">Roadmap</span> Towards A
              Better Future
            </h3>
          </div>

          <div className="h-full w-[100%] lg:w-[60%]">
            <div className={`h-full overflow-y-auto no-scrollbar`}>
              {roadmapData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex pl-0 my-10 justify-evenly lg:my-56 lg:pl-24"
                >
                  <div className="absolute top-0 hidden lg:block left-4.5 xl:left-[39px] 2xl:left-[47px] transform -translate-x-[5%]">
                    <img
                      src={"assets/images/bullet.png"}
                      width={50}
                      height={50}
                      alt="/"
                    />
                  </div>
                  <div
                    className={`w-[95%] md:text-center rounded-sm ${
                      theme === "light"
                        ? "lightGradient-border"
                        : "gradient-border"
                    } lg:w-[90%] p-4 selectedCard dark:selectedCard
                    }`}
                  >
                    <div className="flex flex-col ml-8 text-start">
                      <div className="text-[20px] md:text-[24px] font-extrabold">
                        <h2
                          className={`${
                            theme === "light" ? "text-blue" : "text-white"
                          }`}
                        >
                          {item.heading}
                        </h2>
                      </div>
                      <div className="text-[20px] md:text-[24px] font-extrabold">
                        <h2
                          className={`${
                            theme === "light" ? "text-blue" : "text-white"
                          }`}
                        >
                          {" "}
                          {item.timeframe}
                        </h2>
                      </div>
                    </div>
                    <div>
                      <hr className="my-4 border-black dark:border-seperatorLine w-[100%]" />
                    </div>
                    <div className="flex flex-col ml-8 text-black text-start dark:text-white">
                      {item.content.map((contentItem, contentIndex) =>
                        contentItem.isBold ? (
                          <p key={contentIndex} className="mb-2">
                            <strong>{contentItem.text}</strong>
                          </p>
                        ) : (
                          <p key={contentIndex} className="mb-2">
                            {contentItem.text}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
