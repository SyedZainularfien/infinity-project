import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    // Apply theme class to document body or root element
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return <div className={`theme-${theme}`}>{children}</div>;
};

export default ThemeWrapper;
