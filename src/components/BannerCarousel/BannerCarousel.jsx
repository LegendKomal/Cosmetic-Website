import "./BannerCarousel.css";
import { Box, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BannerCarousel = ({ w, m, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Use useEffect to handle video autoplay when the component mounts
  useEffect(() => {
    const video = document.querySelector("video");

    if (video) {
      video.play().catch(error => {
        // Autoplay may be blocked, handle the error here
        console.error("Autoplay was blocked: " + error);
      });
    }
  }, []);

  const handleChange = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex < images.length - 1) {
        return prevIndex + 1;
      }

      return 0;
    });
  };

  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <video className="img-fluid" autoPlay loop muted playsInline>
          <source
            src="https://user-images.githubusercontent.com/85386116/266759872-104bd5df-81eb-4985-bb52-ec6b79f8c820.mp4"
            type="video/mp4"
          />
        </video>
        <div className="carousel-caption d-none d-md-block"></div>
      </div>
    </div>
  );
};

export { BannerCarousel };
