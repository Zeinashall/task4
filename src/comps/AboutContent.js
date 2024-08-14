import React from "react";

const AboutContent = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => {
        const isImageLeft = section.imagePosition === "left";
        const isImageRight = section.imagePosition === "right";
        const isImageCenter = section.imagePosition === "center";

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 p-4 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300 ${index % 2 === 1 ? "bg-blue-100" : ""}`}
          >
            {isImageLeft && (
              <img
                src={section.image}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg mt-4 md:mt-0 md:w-1/2 w-80 h-80 object-cover"
              />
            )}
            <div
              className={`md:w-1/2 text-center ${isImageLeft ? "md:pl-8" : isImageRight ? "md:pr-8" : ""}`}
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p>{section.paragraph}</p>
            </div>
            {isImageRight && (
              <img
                src={section.image}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg mt-4 md:mt-0 md:w-1/2 w-80 h-80 object-cover"
              />
            )}
            {isImageCenter && (
              <div className="w-full text-center mt-4">
                <img
                  src={section.image}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg shadow-lg mx-auto w-80 h-80 object-cover"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AboutContent;
