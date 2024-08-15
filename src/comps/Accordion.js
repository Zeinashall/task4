import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full text-left p-4 bg-gray-200 rounded-t-lg hover:bg-gray-300"
      >
        <span className="font-bold">{title}</span>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
