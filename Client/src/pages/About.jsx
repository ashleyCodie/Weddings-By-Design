import React from 'react'
import { Link } from "react-router"
import GradientText from "../components/GradientText";

const About = () => {
  return (
    <div className="h-screen">  
        <GradientText
              colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class  brush text-center mt-10 text-5xl font-extrabold text-center"
            >
              About Us
            </GradientText>
      <p className="brush mt-10 ps-10 pe-10 text-3xl text-zinc-500">
    Weddings By Design is a specialized wedding planning service that
    focuses on creating unique and memorable wedding experiences for couples
    who want to celebrate their love in a distinctive way. Plan your dream theme wedding. 
    A Wedding Planner will work closely with couples to understand their vision, preferences,
    and desired theme, and then create a customized wedding plan that
    incorporates various elements to bring the theme to life. Weddings By
    Design works with the couple to develop a cohesive and engaging theme
    for their wedding. This could be anything from a specific era, such as a
    1920s Gatsby-themed wedding, or a Country Western-themed, to a
    particular color scheme, such as a Beach-inspired wedding with a blue
    and white color palette. We are here to help make you special day a dream come true.
    Eliminate the amount Of stress wedding planning can cause, let us take care of the planning/scheduling for you. 
  </p>
  <p className="brush mt-10 ps-10 pe-10 text-3xl text-center text-zinc-500">
    Weddings By Design was established in 2025, we are a family owned and operated. Great customer service offered around the valley each and everyday!
    We promise you 100% customer satisfaction guarenteed! <span className="underline text-blue-600"><Link to="/contact-us">Contact Us</Link></span> today!
  </p>
  </div>
  )
}

export default About