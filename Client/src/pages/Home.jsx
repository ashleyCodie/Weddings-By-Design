import React from "react";
import weddingcake1 from "../assets/images/weddingcake1.jpg";
import weddingcake2 from "../assets/images/weddingcake2.jpg";
import weddingcake3 from "../assets/images/weddingcake3.jpg";
import weddingcake4 from "../assets/images/weddingcake4.jpg";
import countrycake2 from "../assets/images/countrycake2.jpg";
import weddingcake6 from "../assets/images/weddingcake6.jpg";
import flowers from "../assets/images/flowers.jpg";
import venue from "../assets/images/venue.jpg";
import venue1 from "../assets/images/venue1.jpg";
import venue2 from "../assets/images/venue2.jpg";
import venue3 from "../assets/images/venue3.jpg";

import GradientText from "../components/GradientText";
import ClickSpark from "../components/ClickSpark";

const Home = () => {
  return (
    <div className="mb-10">
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={34}
        sparkRadius={100}
        sparkCount={15}
        duration={900}
      />

      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class brush text-7xl"
      >
        Design Your Dream Theme Wedding
      </GradientText>
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-4xl text-center text-zinc-500 brush"
      >
        with Ashley Codie
      </GradientText>

      <img
        src={countrycake2}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border border-zinc-500 border-4 rounded-lg"
      />
      <p className="brush mt-10 ps-10 pe-10 text-5xl text-zinc-500">
        Weddings By Design is a specialized wedding planning service that
        focuses on creating unique and memorable wedding experiences for couples
        who want to celebrate their love in a distinctive way. A Wedding Planner
        will work closely with couples to understand their vision, preferences,
        and desired theme, and then create a customized wedding plan that
        incorporates various elements to bring the theme to life. Weddings By
        Design works with the couple to develop a cohesive and engaging theme
        for their wedding. This could be anything from a specific era, such as a
        1920s Gatsby-themed wedding, or a Country Western-themed, to a
        particular color scheme, such as a Beach-inspired wedding with a blue
        and white color palette.
      </p>
      <div className="grid gap-6 pb-10 md:grid-cols-4 ps-20 pe-20 mt-10">
        <div>
        <img
        src={venue3}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
        </div>
        <div>
        <img
        src={venue}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
        </div>
        <div>
        <img
        src={venue1}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
        </div>
        <div>
        <img
        src={venue2}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
        </div>
      </div>
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class brush text-6xl text-center"
      >
          Weddings By Design has several different packages available that include
          services such as:
      </GradientText>
      {/* <p className="brush mt-10 ps-10 pe-10 text-4xl text-zinc-500">
        Weddings By Design has several different packages available that include
        services such as: </p> */}
        <p className="brush mt-10 ps-14 pe-14 text-3xl text-zinc-500 "><span className="underline"> Venue Selection:</span> Weddings By Design helps the couple find
        the perfect venue that aligns with their theme and accommodates their
        guest list. This could include historic mansions, beachfront resorts, or
        even unique locations like a vineyard or a castle.</p> 
        <p className="brush mt-10 ps-14 pe-14 text-3xl text-zinc-500 "> <span className="underline">Decor and Floral
        Design:</span> Weddings By Design designs and sources decor and floral arrangements
        that complement the wedding theme. This could include custom-made
        centerpieces, table settings, and floral arrangements that incorporate
        the chosen theme.</p> 
        <p className="brush mt-10 ps-14 pe-14 text-3xl text-zinc-500  "><span className="underline">Attire and Accessories:</span> Weddings By Design assists the
        couple in selecting wedding attire and accessories that fit the theme.
        This could include custom-made gowns, suits, and accessories, as well as
        rental options for those who prefer not to invest in new attire.</p> 
        <p className="brush mt-10 ps-14 pe-14 text-3xl text-zinc-500  "> <span className="underline">
        Entertainment and Activities:</span> Weddings By Design helps the couple plan
        entertainment and activities that align with the theme, such as live
        music, photo booths, or themed games and activities for guests.</p>  
        <p className="brush mt-10 ps-14 pe-14 text-3xl text-zinc-500  ">
        <span className="underline">Catering and Menu:</span> Weddings By Design works with caterers to create a menu that
        complements the theme, incorporating signature dishes, cocktails, and
        desserts that fit the overall wedding concept.</p> 
        <p className="brush mt-10 ps-14 pe-14 text-3xl text-zinc-500  "><span className="underline">Photography and
        Videography:</span> Weddings By Design collaborates with photographers and
        videographers who specialize in capturing unique and memorable moments
        for theme weddings. They work closely with the couple to ensure that the
        wedding photos and videos reflect the theme and tell the story of their
        special day.</p> 
        <p className="brush mt-10 ps-14 pe-14 text-3xl text-zinc-500  "> <span className="underline">Wedding Planning and Coordination:</span> Weddings By Design takes
        care of all aspects of wedding planning, from coordinating vendors and
        managing the budget to ensuring that every detail is executed according
        to the couple's vision.</p>

        <div className="grid gap-6 pb-10 md:grid-cols-5 ps-20 pe-20 mt-10">
        <div>
        <img
        src={weddingcake1}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
        </div>
        <div>
        <img
        src={weddingcake2}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
        </div>
        <div>
        <img
        src={weddingcake3}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
        </div>
        <div>
        <img
        src={weddingcake4}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
      
        </div>
        <div>
        <img
        src={weddingcake6}
        alt="Cake"
        className="mx-auto h-80 w-auto mt-10 border-zinc-500 border-4 rounded-lg"
      />
      
        </div>
      </div>
      
    </div>
  );
};

export default Home;