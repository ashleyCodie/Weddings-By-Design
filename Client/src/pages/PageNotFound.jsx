import React from "react";
import { Link } from "react-router";
import TextAnim from "../components/TextAnim";
import countrycake from "../assets/images/countrycake.jpg";

const PageNotFound = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <div>
            <TextAnim
              text="404"
              className="text-7xl brush font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div>
            <TextAnim
              text=" Something's missing."
              className="text-5xl brush font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div>
            <TextAnim
              text=" Sorry, we can't find that page. You'll find lots to explore on the home page."
              className="text-2xl brush font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          <Link
            to="/"
            className="inline-flex brush text-black underline bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
               <img
                  src={countrycake}
                  alt="Cake"
                  className="mx-auto h-80 w-auto mt-10 border border-zinc-500 border-4 rounded-lg"
                />
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;