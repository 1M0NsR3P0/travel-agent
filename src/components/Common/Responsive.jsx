import React, { createContext, useContext, useEffect, useState } from "react";

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState("");

  const handleResize = () => {
    const { innerWidth } = window;
    if (innerWidth <= 576) {
      setScreenSize("sm");
    } else if (innerWidth <= 768) {
      setScreenSize("md");
    } else if (innerWidth <= 1024) {
      setScreenSize("lg");
    }
    else if (innerWidth <= 1400) {
      setScreenSize("xl")
    }
    else if (innerWidth <= 2000) {
      setScreenSize('xxl')
    }
    else {
      setScreenSize("bigScreen");
    }
  };

  useEffect(() => {
    // Update the screen size on initial mount and window resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);
