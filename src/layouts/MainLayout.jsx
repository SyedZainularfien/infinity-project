import { Outlet } from "react-router-dom";
import Header from "../pages/components/Layout/Header";
import Footer from "../pages/components/Layout/Footer";
import useScrollToTop from "../use-scrolltotop";

const MainLayout = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
