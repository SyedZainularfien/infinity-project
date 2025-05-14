// import React from "react";
import { useRoutes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import EmptyLayout from "./layouts/EmptyLayout";

import HomePage from "./pages/home-page/HomePage";
import Company from "./pages/company/page";
import Investor from "./pages/investor/page";
import Marketplace from "./pages/marketplace/page";
import Partners from "./pages/partners/page";
import Learn from "./pages/learn/page";
import MyInfin from "./pages/my-infin/page";
import SeedroundPage from "./pages/seed-round/SeedRoundPage";
// import Login from "./pages/login/Login";
import ContactUs from "./pages/contact-us/ContactUs";
// import Register from "./pages/register/SignUp";
// import Forget from "./pages/forget-password/ForgetPassword";
import Custom404 from "./pages/NotFoundPage";
import Infinassets from "./pages/press-center/page";
import ComingSoon from "./pages/coming-soon/page";
import TermsNconditions from "./pages/terms-and-conditions/page";
import PrivacyPolicy from "./pages/privacy-policy/page";
import Disclaimer from "./pages/disclaimer/page";
import RefundPolicy from "./pages/refund-policy/page";
// import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "seed-round", element: <SeedroundPage /> },
        { path: "company", element: <Company /> },
        { path: "investor", element: <Investor /> },
        { path: "marketplace", element: <Marketplace /> },
        { path: "partners", element: <Partners /> },
        { path: "learn", element: <Learn /> },
        { path: "my-infin", element: <MyInfin /> },
        { path: "contact-us", element: <ContactUs /> },
        { path: "press-center", element: <Infinassets /> },
        { path: "terms-and-conditions", element: <TermsNconditions /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "disclaimer", element: <Disclaimer /> },
        { path: "refund-policy", element: <RefundPolicy /> },
        { path: "coming-soon", element: <ComingSoon /> },
      ],
    },
    // {
    //   element: <AuthLayout />,
    //   children: [
    //     { path: "login", element: <Login /> },
    //     { path: "forget-password", element: <Forget /> },
    //     { path: "register", element: <Register /> },
    //   ],
    // },
    {
      path: "*",
      element: <Custom404 />,
    },
  ]);

  return routes;
};

export default AppRoutes;
