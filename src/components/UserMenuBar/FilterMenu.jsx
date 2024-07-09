import  { useState } from 'react';

const FilterMenu = () => {
  const [activeButton, setActiveButton] = useState('All');

  const buttons = ['All', 'Places', 'City', 'State','Country'];

  return (
    <div className="flex space-x-2">
      {buttons.map((button) => (
        <button
          key={button}
          className={`px-4 py-2 rounded border border-borderFill-700 ${activeButton === button ? 'bg-backgroundFill-900 border-backgroundFill-900 text-white' : 'bg-white text-grey-800'}`}
          onClick={() => setActiveButton(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default FilterMenu;
