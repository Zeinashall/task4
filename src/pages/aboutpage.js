import React from "react";
import TextStyle from "../comps/TextStyle";

export default function AboutPage()  {
  return (
    <div>

      <div className="container mx-auto py-12 px-4">
      <div className="h-16"></div>
      <TextStyle
          fontStyle="italic"
          color="text-gray-600"
          alignment="text-left"
          size="text-4xl"

        />

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12 bg-blue-40 p-4 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300">
          <div className="md:w-1/2 md:pr-8 order-1 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Revolution in Travel
            </h2>
            <p>
              Cars have revolutionized the way we travel, providing unparalleled
              convenience and flexibility. From the early days of the automobile
              to the advanced electric vehicles of today, technology has
              continually pushed the boundaries of performance and efficiency.
              Modern cars come equipped with a myriad of features such as
              advanced safety systems, connectivity options, and autonomous
              driving capabilities. As a result, driving has become not only
              safer but also more enjoyable and sustainable.
            </p>
          </div>
          <img
            src="/about1.webp"
            alt="Image 1"
            className="rounded-lg shadow-lg mt-4 md:mt-0 md:order-2 md:w-1/2 w-80 h-80 object-cover"
          />
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center mb-12 bg-blue-50 p-4 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300">
          <img
            src="/about2.webp"
            alt="Image 2"
            className="rounded-lg shadow-lg mt-4 md:mt-0 md:w-1/2 w-80 h-80 object-cover"
          />
          <div className="md:w-1/2 md:pl-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Evolving Industry</h2>
            <p>
              The automotive industry is constantly evolving, with manufacturers
              competing to offer the best in design, functionality, and
              innovation. Sleek, aerodynamic designs are now the norm, enhancing
              both the aesthetic appeal and fuel efficiency of vehicles. Hybrid
              and electric cars are gaining popularity as consumers become more
              environmentally conscious and seek to reduce their carbon
              footprint. These advancements are paving the way for a greener
              future in transportation.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center mb-12 bg-blue-40 p-4 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300">
          <div className="md:w-1/2 md:pr-8 order-1 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Performance and Craftsmanship
            </h2>
            <p>
              Car enthusiasts have a deep appreciation for the craftsmanship and
              engineering that goes into creating high-performance vehicles.
              Sports cars, in particular, are celebrated for their speed,
              agility, and cutting-edge technology. Manufacturers like Nissan
              are continually pushing the limits with models that offer
              thrilling driving experiences and state-of-the-art features.
              Collectors and hobbyists often seek out classic cars, which embody
              a rich history and timeless elegance.
            </p>
          </div>
          <img
            src="/about3.webp"
            alt="Image 3"
            className="rounded-lg shadow-lg mt-4 md:mt-0 md:order-2 md:w-1/2 w-80 h-80 object-cover"
          />
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row items-center mb-12 bg-blue-50 p-4 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300">
          <img
            src="/about4.webp"
            alt="Image 4"
            className="rounded-lg shadow-lg mt-4 md:mt-0 md:w-1/2 w-80 h-80 object-cover"
          />
          <div className="md:w-1/2 md:pl-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Future of Automobiles
            </h2>
            <p>
              The future of cars is incredibly exciting, with developments in
              electric powertrains, autonomous driving, and smart connectivity
              leading the charge. Electric vehicles (EVs) are becoming more
              accessible, with improved battery technology extending their range
              and reducing charging times. Autonomous vehicles promise to
              transform urban mobility, reducing traffic congestion and
              increasing safety on the roads. As cars become more integrated
              with digital ecosystems, the driving experience is set to become
              more personalized and connected than ever before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

