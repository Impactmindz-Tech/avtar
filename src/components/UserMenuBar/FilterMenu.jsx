import  { useState } from 'react';
import FilterUserCard from '../Cards/FilterCard/FilerUserCard';

const FilterMenu = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ['All', 'Places', 'City', 'State','Country'];

  return (
    <div className="">
    <div className="lg:overflow-x-auto lg:overflow-y-hidden  ">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded border ${
              activeTab === tab ? "bg-backgroundFill-900 border-backgroundFill-900 text-white" : "bg-white text-grey-800"
            } hover:bg-backgroundFill-900 hover:border-backgroundFill-900 hover:text-white`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>

    {activeTab === "All" && (
      <div className="my-5 grid grid-cols-4 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <FilterUserCard />
        <FilterUserCard />
        <FilterUserCard />
        <FilterUserCard />
      </div>
    )}





   
  </div>
    // <div className="flex space-x-2">
    //   {buttons.map((button) => (
    //     <button
    //       key={button}
    //       className={`px-4 py-2 rounded border  ${activeButton === button ? 'bg-backgroundFill-900 border-backgroundFill-900 text-white' : 'bg-white text-grey-800'}`}
    //       onClick={() => setActiveButton(button)}
    //     >
    //       {button}
    //     </button>
    //   ))}
    // </div>
  );
};

export default FilterMenu;
