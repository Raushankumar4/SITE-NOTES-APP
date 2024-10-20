import React from "react";
import { Link } from "react-router-dom";
import OurMission from "./OurMission";
import AboutUs from "./AboutUs";
import GetInTouch from "./GetInTouch";
import OurTeam from "./OurTeam";
import Footer from "./Footer";

const Home = () => {
  const handleScrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-5xl mt-4 mx-auto">
      {/* Welcome Section */}
      <div className="flex justify-center items-center box-border md:h-[87.8vh] h-[90vh]">
        <div className="backdrop-blur-sm backdrop-filter rounded-3xl shadow-lg dark:bg-[#36363653] w-[90%] md:w-[96%] h-auto md:h-[92%] grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-10 mb-2">
          {/* Left Side Content */}
          <div className="flex flex-col items-center text-center">
            <img
              src="Logo.png"
              alt="Illustration"
              className="object-cover w-20 mb-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-blue-300">
              Welcome to
            </h1>
            <p className="text-2xl font-bold text-[#878484]">SITE NOTES</p>
            <p className="w-full text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Download all previous semester papers for every branch and year
              easily. Our platform provides access to materials for study and
              collaboration, helping you stay organized.
            </p>

            <Link
              to="/semesterPaper"
              className="mt-4 bg-[#000000] text-white dark:bg-[#0F3BFE] dark:text-white  px-4 py-2 rounded-xl no-underline shadow-md hover:shadow-lg transition"
            >
              Get Started
            </Link>
          </div>
          {/* Right Side Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://r2.erweima.ai/imgcompressed/img/compressed_6a91ef87563da7bf0eba917d6848f0e4.webp"
              alt="Notes Illustration"
              className="object-cover h-[50vh] md:block hidden rounded-md"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mx-4">
          <OurMission />
        </div>
        <div className="mx-4">
          <AboutUs />
        </div>
        <div className="mx-4">
          <OurTeam />
        </div>
        <div>
          <GetInTouch />
        </div>
        <div className="mx-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
