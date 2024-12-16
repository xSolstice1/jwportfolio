import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.button}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

const styles = {
    button: {
      position: "fixed",
      bottom: "40px",
      right: "40px",
      background: "white",
      color: "#a0a0a0",
      fontFamily: "Outfit, sans-serif", // Include fallback font
      fontSize: "18px",
      outline: "none",
      border: "none",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "background-color 0.3s, transform 0.2s", // Add transition effects
    },
  };
  
export default BackToTopButton;
