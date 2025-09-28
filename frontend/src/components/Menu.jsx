import React from "react";
import { data } from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu py-16 bg-gray-50" id="menu">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="heading_section text-center mb-12">
          <h1 className="heading text-4xl font-bold mb-4">POPULAR DISHES</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our most loved dishes crafted by our chefs. Each plate is made
            with fresh ingredients, bursting with flavors that will delight your taste buds.
          </p>
        </div>

        {/* Dishes Container */}
        <div className="dishes_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data[0].dishes.map((element) => (
            <div
              className="card bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
              key={element.id}
            >
              <img
                src={element.image}
                alt={element.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors">
                  {element.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
