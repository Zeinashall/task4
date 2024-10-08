import React, { useState } from "react";
import TextStyle from "../comps/TextStyle";
import CarCard from "../comps/carCard";
import ModelSelector from "../comps/ModelSelector";

const Detailspage = () => {
  const cars = [
    { id: 1, image: "/details1.webp", name: "Nissan Altima", model: "2024", price: "Starting at $25,000" },
    { id: 2, image: "/details6.webp", name: "Nissan Rogue", model: "2023", price: "Starting at $28,000" },
    { id: 3, image: "/details3.webp", name: "Nissan Sentra", model: "2020", price: "Starting at $20,000" },
    { id: 4, image: "/details4.webp", name: "Nissan Maxima", model: "2021", price: "Starting at $35,000" },
    { id: 5, image: "/details5.webp", name: "Nissan Pathfinder", model: "2020", price: "Starting at $33,000" },
    { id: 6, image: "/details2.webp", name: "Nissan Murano", model: "2021", price: "Starting at $31,000" },
    { id: 7, image: "/details7.webp", name: "Nissan Kicks", model: "2024", price: "Starting at $19,000" },
    { id: 8, image: "/details8.webp", name: "Nissan Leaf", model: "2023", price: "Starting at $29,000" },
    { id: 9, image: "/details9.webp", name: "Nissan Frontier", model: "2022", price: "Starting at $27,000" },
  ];

  const [filteredCars, setFilteredCars] = useState(cars);

  const handleModelSelection = (models) => {
    const filtered = cars.filter((car) => models.includes(car.model));
    setFilteredCars(filtered);
  };

  return (
    <div >
<div className="h-48 md:h-20 lg:h-20 " ></div>

      <div className="container mx-auto py-12 mt-16 px-4 md:px-0">
        <TextStyle
          fontStyle="font-serif"
          color="text-orange-500"
          alignment="text-center"
          shadow="shadow-lg"
          size="text-5xl"
          hoverColor="hover:text-gray-300"
        />
        
        <ModelSelector onChoose={handleModelSelection} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isHighlighted={true}  
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
