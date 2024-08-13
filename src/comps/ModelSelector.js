import React, { useState } from "react";

const ModelSelector = ({ onChoose }) => {
  const [selectedModels, setSelectedModels] = useState([]);
  const models = ["2020", "2021", "2022", "2023", "2024"];

  const handleCheckboxChange = (event) => {
    const model = event.target.value;
    setSelectedModels((prevSelectedModels) =>
      prevSelectedModels.includes(model)
        ? prevSelectedModels.filter((m) => m !== model)
        : [...prevSelectedModels, model]
    );
  };

  const handleChooseClick = () => {
    if (selectedModels.length > 0) {
      onChoose(selectedModels);
    }
  };

  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Choose your favorite models:
      </h2>
      <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
        {models.map((model) => (
          <label
            key={model}
            className="flex items-center space-x-2 mb-4 sm:mb-0 cursor-pointer"
          >
            <input
              type="checkbox"
              value={model}
              checked={selectedModels.includes(model)}
              onChange={handleCheckboxChange}
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-gray-800 font-medium">{model}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleChooseClick}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
      >
        Choose
      </button>
    </div>
  );
};

export default ModelSelector;
