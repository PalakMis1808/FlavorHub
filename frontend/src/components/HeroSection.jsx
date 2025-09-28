import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        {/* First Banner */}
        <div className="banner flex flex-col md:flex-row items-center gap-8">
          <div className="largeBox flex-1">
            <h1 className="title text-5xl font-bold text-primary">Delicious</h1>
          </div>

          <div className="combined_boxes flex-1 flex flex-col md:flex-row items-center gap-6">
            {/* Image Box */}
            <div className="imageBox flex-1">
              <img src="./hero1.png" alt="hero" className="rounded-lg shadow-lg" />
            </div>

            {/* Text & Logo */}
            <div className="textAndLogo flex-1 flex flex-col items-start gap-4">
              <div className="textWithSvg flex items-center gap-3">
                <div>
                  <h1 className="title text-4xl font-bold">Food</h1>
                  <h1 className="title dishes_title text-4xl font-bold text-secondary">
                    Dishes
                  </h1>
                </div>
                <img src="./threelines.svg" alt="threelines" className="w-8 h-8" />
              </div>
              <img className="logo w-20 h-20" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>

        {/* Second Banner */}
        <div className="banner flex flex-col items-center mt-10 gap-4">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" className="rounded-lg shadow-lg" />
          </div>
          <h1 className="title dishes_title text-4xl font-bold text-center mt-2">
            Dishes
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
