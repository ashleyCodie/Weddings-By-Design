import React from "react";

const SidePackages = () => {
  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-28 left-0 z-10 w-64  h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-auto px-3 py-4 mt-24 ml-2 overflow-y-auto bg-pink-300 dark:bg-pink-300 rounded-lg">
            <h1 className="text-zinc-500 brush text-3xl">Choose from one of these packages or create your own package to customize your wedding planning needs. We are here to make your dreams come true and help you plan the most perfect wedding. Make your day as special as it can be!
                Contact us today so we can get a Wedding Planner assigned to you and start planning today!
            </h1>
        </div>
      </aside>
    </div>
  );
};

export default SidePackages;