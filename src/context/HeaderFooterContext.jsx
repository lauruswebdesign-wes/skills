import { createContext, useContext, useEffect, useRef, useState } from "react";

const HeaderFooterContext = createContext();

export const HeaderFooterProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const updateHeights = () => {
      setHeaderHeight(headerRef.current?.offsetHeight || 0);
      setFooterHeight(footerRef.current?.offsetHeight || 0);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <HeaderFooterContext.Provider value={{ headerHeight, footerHeight, headerRef, footerRef }}>
      {children}
    </HeaderFooterContext.Provider>
  );
};

// Custom hook for using the context
export const useHeaderFooter = () => useContext(HeaderFooterContext);
