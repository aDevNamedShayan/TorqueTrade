import React from 'react';

interface CardProps {
  title: string;
  price: string;
  year: number;
  mileage: string;
  fuelType: string;
  location: string;
  features: string[];
  image: string;
}

export default function CarCard({ title, price, year, mileage, fuelType, location, features, image }: CardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
        <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-lg font-bold text-blue-600">{price}</p>
        </div>
        <p className="text-gray-600 mb-3">{year} • {mileage} • {fuelType}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
            <span className="text-sm text-gray-500">{location}</span>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};