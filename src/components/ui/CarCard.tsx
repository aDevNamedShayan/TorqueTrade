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
  description?: string;
  isVerified?: boolean;
  deliveryAvailable?: boolean;
}

export function CarCardGrid({ title, price, year, mileage, fuelType, location, features, image }: CardProps) {
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
          <h3 className="text-lg font-bold text-gray-900">{year} {title}</h3>
          <p className="text-lg font-bold text-blue-600">{price}</p>
        </div>
        <p className="text-gray-600 mb-3">{mileage} • {fuelType}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
          <span className="text-sm text-gray-500">{location}</span>
        </div>
      </div>
    </div>
  );
};

export function CarCardList({ title, price, year, mileage, fuelType, location, features, image, description, isVerified, deliveryAvailable}: CardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
          <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            <i className="far fa-heart"></i>
          </button>
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-xl font-bold text-blue-600">{price}</p>
          </div>
          <p className="text-gray-600 mb-4">
            {year} • {mileage} • {fuelType} • {location}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center space-x-2">
            {isVerified && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded flex items-center">
                <i className="fas fa-check-circle mr-1"></i> Verified Seller
              </span>
            )}
            {deliveryAvailable && (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
                Home Delivery Available
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};