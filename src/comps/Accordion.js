import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <button
        onClick={toggleAccordion}
        className={`w-full text-left p-4 flex items-center justify-between bg-gray-200 rounded-t-lg hover:bg-gray-300 ${
          isOpen ? 'text-blue-600' : ''
        }`}
      >
        <span className="font-bold">{title}</span>
        <span className="ml-2">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
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
