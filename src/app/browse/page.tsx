'use client'

import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('recommended');
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [yearRange, setYearRange] = useState([2010, 2025]);
  const [mileageRange, setMileageRange] = useState([0, 100000]);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedBodyStyles, setSelectedBodyStyles] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleMakeSelection = (make: string) => {
    setSelectedMakes(
      selectedMakes.includes(make)
        ? selectedMakes.filter(m => m !== make)
        : [...selectedMakes, make]
    );
  };
  const handleBodyStyleSelection = (style: string) => {
    setSelectedBodyStyles(
      selectedBodyStyles.includes(style)
        ? selectedBodyStyles.filter(s => s !== style)
        : [...selectedBodyStyles, style]
    );
  };
  const handleFuelTypeSelection = (type: string) => {
    setSelectedFuelTypes(
      selectedFuelTypes.includes(type)
        ? selectedFuelTypes.filter(t => t !== type)
        : [...selectedFuelTypes, type]
    );
  };
  const handleTransmissionSelection = (transmission: string) => {
    setSelectedTransmissions(
      selectedTransmissions.includes(transmission)
        ? selectedTransmissions.filter(t => t !== transmission)
        : [...selectedTransmissions, transmission]
    );
  };
  const clearAllFilters = () => {
    setSelectedMakes([]);
    setSelectedBodyStyles([]);
    setSelectedFuelTypes([]);
    setSelectedTransmissions([]);
    setPriceRange([0, 200000]);
    setYearRange([2010, 2025]);
    setMileageRange([0, 100000]);
  };
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
                {/* Car Card 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=2023%2520Tesla%2520Model%25203%2520in%2520sleek%2520white%2520color%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520modern%2520design%252C%2520LED%2520headlights%2520visible%252C%2520minimalist%2520interior%2520visible%2520through%2520windows%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car1&orientation=landscape"
                      alt="Tesla Model 3"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">Tesla Model 3</h3>
                      <p className="text-lg font-bold text-blue-600">$42,990</p>
                    </div>
                    <p className="text-gray-600 mb-3">2023 • 1,200 miles • Electric</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Autopilot</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">AWD</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Long Range</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
                        <span className="text-sm text-gray-500">San Francisco, CA</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                {/* Car Card 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=2022%2520BMW%2520M4%2520Competition%2520in%2520metallic%2520blue%252C%2520professional%2520automotive%2520photography%2520on%2520clean%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520aggressive%2520styling%252C%2520LED%2520headlights%252C%2520carbon%2520fiber%2520details%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car2&orientation=landscape"
                      alt="BMW M4 Competition"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">BMW M4 Competition</h3>
                      <p className="text-lg font-bold text-blue-600">$78,500</p>
                    </div>
                    <p className="text-gray-600 mb-3">2022 • 8,450 miles • Gasoline</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">503 HP</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Carbon Package</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">M Drive</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
                        <span className="text-sm text-gray-500">Miami, FL</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                {/* Car Card 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=2021%2520Porsche%2520911%2520Carrera%2520S%2520in%2520classic%2520silver%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520iconic%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car3&orientation=landscape"
                      alt="Porsche 911 Carrera S"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">Porsche 911 Carrera S</h3>
                      <p className="text-lg font-bold text-blue-600">$124,900</p>
                    </div>
                    <p className="text-gray-600 mb-3">2021 • 12,350 miles • Gasoline</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">443 HP</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Sport Chrono</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">PDK</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
                        <span className="text-sm text-gray-500">Los Angeles, CA</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                {/* Car Card 4 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=2023%2520Mercedes-Benz%2520S-Class%2520in%2520elegant%2520black%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520luxury%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car4&orientation=landscape"
                      alt="Mercedes-Benz S-Class"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">Mercedes-Benz S-Class</h3>
                      <p className="text-lg font-bold text-blue-600">$109,800</p>
                    </div>
                    <p className="text-gray-600 mb-3">2023 • 3,200 miles • Gasoline</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">429 HP</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">4MATIC</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Burmester 3D</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
                        <span className="text-sm text-gray-500">New York, NY</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                {/* Car Card 5 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=2022%2520Audi%2520e-tron%2520GT%2520in%2520modern%2520gray%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520sleek%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car5&orientation=landscape"
                      alt="Audi e-tron GT"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">Audi e-tron GT</h3>
                      <p className="text-lg font-bold text-blue-600">$102,400</p>
                    </div>
                    <p className="text-gray-600 mb-3">2022 • 5,800 miles • Electric</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">522 HP</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Quattro</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Fast Charging</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
                        <span className="text-sm text-gray-500">Chicago, IL</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                {/* Car Card 6 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=2023%2520Ford%2520Mustang%2520GT%2520in%2520vibrant%2520red%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520muscular%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car6&orientation=landscape"
                      alt="Ford Mustang GT"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">Ford Mustang GT</h3>
                      <p className="text-lg font-bold text-blue-600">$56,270</p>
                    </div>
                    <p className="text-gray-600 mb-3">2023 • 2,100 miles • Gasoline</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">480 HP</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">V8 Engine</span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Performance Pack</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
                        <span className="text-sm text-gray-500">Dallas, TX</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Car List Item 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img
                        src="https://readdy.ai/api/search-image?query=2023%2520Tesla%2520Model%25203%2520in%2520sleek%2520white%2520color%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520modern%2520design%252C%2520LED%2520headlights%2520visible%252C%2520minimalist%2520interior%2520visible%2520through%2520windows%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car1&orientation=landscape"
                        alt="Tesla Model 3"
                        className="w-full h-full object-cover object-top"
                      />
                      <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Tesla Model 3</h3>
                        <p className="text-xl font-bold text-blue-600">$42,990</p>
                      </div>
                      <p className="text-gray-600 mb-4">2023 • 1,200 miles • Electric • San Francisco, CA</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Autopilot</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">AWD</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Long Range</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Premium Interior</span>
                      </div>
                      <p className="text-gray-600 mb-4">The Tesla Model 3 is an electric four-door sedan with minimalist styling and cutting-edge technology. This Long Range AWD model features enhanced range and dual motor all-wheel drive.</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded flex items-center">
                            <i className="fas fa-check-circle mr-1"></i> Verified Seller
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">Home Delivery Available</span>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Car List Item 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img
                        src="https://readdy.ai/api/search-image?query=2022%2520BMW%2520M4%2520Competition%2520in%2520metallic%2520blue%252C%2520professional%2520automotive%2520photography%2520on%2520clean%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520aggressive%2520styling%252C%2520LED%2520headlights%252C%2520carbon%2520fiber%2520details%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car2&orientation=landscape"
                        alt="BMW M4 Competition"
                        className="w-full h-full object-cover object-top"
                      />
                      <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">BMW M4 Competition</h3>
                        <p className="text-xl font-bold text-blue-600">$78,500</p>
                      </div>
                      <p className="text-gray-600 mb-4">2022 • 8,450 miles • Gasoline • Miami, FL</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">503 HP</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Carbon Package</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">M Drive</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Harman Kardon</span>
                      </div>
                      <p className="text-gray-600 mb-4">The BMW M4 Competition delivers exhilarating performance with its twin-turbocharged inline-six engine. This example features the desirable Carbon Package and M Drive performance features.</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded flex items-center">
                            <i className="fas fa-check-circle mr-1"></i> Verified Seller
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">Virtual Tour Available</span>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Car List Item 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img
                        src="https://readdy.ai/api/search-image?query=2021%2520Porsche%2520911%2520Carrera%2520S%2520in%2520classic%2520silver%252C%2520professional%2520automotive%2520photography%2520with%2520clean%2520studio%2520background%252C%2520front%2520three-quarter%2520view%2520showing%2520iconic%2520design%252C%2520LED%2520headlights%2520visible%252C%2520premium%2520wheels%252C%2520high-resolution%2520detailed%2520image%2520with%2520perfect%2520lighting&width=600&height=400&seq=car3&orientation=landscape"
                        alt="Porsche 911 Carrera S"
                        className="w-full h-full object-cover object-top"
                      />
                      <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Porsche 911 Carrera S</h3>
                        <p className="text-xl font-bold text-blue-600">$124,900</p>
                      </div>
                      <p className="text-gray-600 mb-4">2021 • 12,350 miles • Gasoline • Los Angeles, CA</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">443 HP</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Sport Chrono</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">PDK</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Bose Sound</span>
                      </div>
                      <p className="text-gray-600 mb-4">The Porsche 911 Carrera S continues the iconic sports car legacy with its flat-six engine and precision handling. This example includes the desirable Sport Chrono package and PDK transmission.</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded flex items-center">
                            <i className="fas fa-check-circle mr-1"></i> Verified Seller
                          </span>
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded">Hot Deal</span>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">AutoMarket</h3>
              <p className="text-gray-400 mb-4">
                The premier marketplace for buying and selling quality vehicles. Making car transactions simple, secure, and enjoyable since 2020.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="https://readdy.ai/home/7d2f6682-563e-44ca-9def-a9cd63f9d9cb/757d36b2-83c7-4398-9b9e-11c99f997459" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Browse Cars</a></li>
                <li><a href="https://readdy.ai/home/7d2f6682-563e-44ca-9def-a9cd63f9d9cb/d82bb03a-1ece-402b-a4eb-fa2a5b5e4e4e" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sell Your Car</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Safety Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates on new listings and automotive news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-none w-full"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 AutoMarket. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App
