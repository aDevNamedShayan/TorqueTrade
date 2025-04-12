'use client'

import React, { useState, useEffect } from 'react';
import Cars from '@/../cars.json'
import { CarCardGrid, CarCardList } from '@/components/ui/CarCard';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('recommended');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="pt-20 container mx-auto px-4 py-6">
        {/* Page Title and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Browse Cars</h1>
            <p className="text-gray-600 mt-1">Find your perfect vehicle from our extensive collection</p>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0">
            {/* SEARCH VVV */}
            {/* <div className="relative">
              <input
                type="text"
                placeholder="Search by make, model, or keyword"
                className="w-full md:w-80 pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-black"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2"></i>
            </div> */}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Car Listings */}
          <div className="lg:w-full">
            {/* Results Controls */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-600"><span className="font-semibold text-gray-900">1,245</span> cars found</p>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                    <div className="relative">
                      <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 pr-8 appearance-none cursor-pointer"
                      >
                        <option value="recommended">Recommended</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="year-new">Year: Newest First</option>
                        <option value="year-old">Year: Oldest First</option>
                        <option value="mileage-low">Mileage: Low to High</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <i className="fas fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} cursor-pointer`}
                    >
                      <i className="fas fa-th-large"></i>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} cursor-pointer`}
                    >
                      <i className="fas fa-list"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Car Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Cars.map(car => (
                  <CarCardGrid key={car.id} {...car} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {Cars.map(car => (
                  <CarCardList key={car.id} {...car} />
                ))}
              </div>
            )}
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 cursor-pointer">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">1</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer">2</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer">3</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer">4</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer">5</button>
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Actions Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
          <i className="fas fa-filter"></i>
        </button>
        <button className="w-12 h-12 bg-white text-blue-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 cursor-pointer">
          <i className="fas fa-exchange-alt"></i>
        </button>
        <button className="w-12 h-12 bg-white text-blue-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 cursor-pointer">
          <i className="fas fa-heart"></i>
        </button>
        <a href="https://readdy.ai/home/7d2f6682-563e-44ca-9def-a9cd63f9d9cb/757d36b2-83c7-4398-9b9e-11c99f997459" data-readdy="true" className="w-12 h-12 bg-white text-blue-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 cursor-pointer">
          <i className="fas fa-home"></i>
        </a>
      </div>
    </div>
  );
}
export default App
