import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import GradientText from "../components/GradientText";


const DashboardWP = () => {
    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate();


  return (
    <div className="h-screen">
  
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class brush ml-44 pl-60 mt-10 text-5xl font-extrabold text-center"
      >
        Hello, {user.firstName}
      </GradientText>
   
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-zinc-500 border-dashed rounded-lg dark:border-zinc-500">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded-sm bg-zinc-500 dark:bg-zinc-500">
            <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
              </svg>

              <p className="text-2xl text-white dark:text-white">
                <button
                  onClick={() => navigate("/projects")}
                  type="button"
                  className="text-white ml-4"
                >
                  My Projects
                </button>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-sm bg-zinc-500 dark:bg-zinc-500">
              <p className="text-2xl text-white dark:text-white">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-sm bg-zinc-500 dark:bg-zinc-500">
              <p className="text-2xl text-white dark:text-white">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default DashboardWP;