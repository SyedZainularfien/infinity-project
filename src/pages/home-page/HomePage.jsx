import React from "react";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Roadmap from "../components/roadmap/roadmap";
import GlobalNetWealth from "../components/Home/GlobalNet";
import SocialCommunity from "../components/socialCommunity/socialCommunity";
import MeetTheTeam from "../components/Home/MeetTheTeam";
import SeedRoundHome from "../components/Home/SeedRound";

const HomePage = () => {
  return (
    <div className="page-index home max-w-[1600px] mx-auto">
      <Hero />
      <SeedRoundHome />
      <HowItWorks />
      <Roadmap />
      <GlobalNetWealth />
      <div className="relative pt-10">
        <SocialCommunity />
      </div>
      <div className="relative py-20">
        <MeetTheTeam />
      </div>
    </div>
  );
};

export default HomePage;
