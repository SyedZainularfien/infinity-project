import Button from "../button/button";
import styles from "./Home.module.css";
// data
import { Link } from "react-router-dom";
import { content } from "../../../data";

const { teamMembers } = content;

const TeamMembers = teamMembers;

const MeetTheTeam = () => {
  return (
    <div className="bg-transparent">
      <div className="w-[100%] md:flex md:flex-col md:items-center md:justify-center">
        <p className="text-center sectionHeadingText">
          <span className="text-gradient-blue-cyan">Meet </span> The Team
        </p>
      </div>
      <div className="w-[100%] headingGapTop xl:flex">
        <div
          className={`w-full max-w-[1024px] mx-auto py-6 px-3 md:px-10 border-0 sm:border border-[var(--cyan)] rounded-[35px] bg-transparent md:bg-[#efefef1a] ${styles.team_wrap}`}
        >
          <div className="flex items-center justify-center">
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {TeamMembers.slice(0, 6).map((item, index) => (
                <div
                  className="p-3 mx-3 transition duration-500 bg-white shadow-lg hover:-translate-y-1 hover:scale-110 mb-7 rounded-xl custom-hover group"
                  // className={`${styles.card} ${
                  //   selectedMember === item ? styles.selectedCard : item
                  // }`}
                  key={index}
                  // onClick={() => handleMemberClick(item)}
                >
                  <div className="flex items-center justify-center">
                    <div
                      className="w-[97%] h-[174px] rounded-xl"
                      style={{
                        backgroundImage: `url(${item.Image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <div className="flex items-start justify-between mt-4 ">
                    <div className="flex flex-col justify-start ml-4">
                      <div>
                        <p
                          className={`text-black font-bold text-lg group-hover:text-black dark:group-hover:text-white`}
                        >
                          {item.Name}
                        </p>
                      </div>
                      <div className="w-[99%]">
                        <p className="text-sm text-[#2E73EA] group-hover:text-white ">
                          {item.Designation}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 mr-7 border border-[#2E73EA] group-hover:border-white p-2 rounded-lg">
                      <a href={item.linkedinUrl} target="__blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          className="fill-[#2E73EA] group-hover:fill-white "
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.8v2.2h.07c.67-1.26 2.3-2.6 4.73-2.6C21.44 7.6 24 10.09 24 14.42V24h-5v-8.8c0-2.1-.04-4.8-2.92-4.8-2.92 0-3.37 2.28-3.37 4.64V24h-5V8z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="all_members_btn max-w-[200px] mx-auto">
            <Link to="/company#meet-the-team">
              <Button
                label={"Show All"}
                // variant={theme === "dark" ? "solid" : "lightSolid"}
                variant={"outline"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetTheTeam;
