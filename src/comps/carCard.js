// components/CarCard.js
import React from "react";
import clsx from "clsx";

const CarCard = ({ car, isHighlighted }) => {
  return (
    <div
      className={clsx(
        "bg-white p-4 rounded-lg shadow-md transition duration-300 flex flex-col items-center",
        {
          "hover:shadow-lg hover:bg-gray-300": !isHighlighted, // Regular hover effect for non-highlighted cards
          "shadow-lg bg-gray-400": isHighlighted,             // Highlighted effect (gray-300 background)
        }
      )}
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover mb-4"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold">{car.name}</h2>
        <p className="text-gray-600 mb-2">{car.model}</p>
        <p className="text-gray-800 font-semibold">{car.price}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CarCard;
