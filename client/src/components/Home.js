import React, { useState, useEffect } from "react";

const Home = () => {

  const imageClassArray = [
    "home-page-background-0",
    "home-page-background-1",
    "home-page-background-2",
    "home-page-background-3",
    "home-page-background-4",
  ];

  let slideIndex = 0;
  const newBackground = () => {
    slideIndex++;
    if (slideIndex >= imageClassArray.length) {
      slideIndex = 0;
    }
    setTimeout(newBackground, 6000);
    setClassName(imageClassArray[slideIndex]);
  };
  const [className, setClassName] = useState(imageClassArray[slideIndex]);

  useEffect(() => {
    newBackground();
  }, []);

  return (
    <div className={`home-page-body ${className}`}>
      <div className="home-header">
        <h1>Find Your Next Adventure</h1>
      </div>
    </div>
  );
};

export default Home;
