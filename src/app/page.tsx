'use client'

import React, { useState } from 'react';
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('featured');
  
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      {/* <section className="relative pt-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxurious%20modern%20sports%20car%20on%20a%20minimalist%20background%20with%20soft%20gradient%20lighting%2C%20professional%20automotive%20photography%20with%20dramatic%20shadows%20and%20highlights%2C%20sleek%20design%20details%20visible%2C%20high-end%20finish%20with%20metallic%20paint%20reflecting%20environment%2C%20cinematic%20composition%20with%20shallow%20depth%20of%20field&width=1440&height=800&seq=hero1&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.7)'
          }}
        ></div>
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Perfect Drive
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover thousands of quality vehicles from verified sellers across the country. Your dream car is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
                Browse Cars
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium !rounded-button whitespace-nowrap cursor-pointer">
                Sell Your Car
              </button>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 appearance-none cursor-pointer">
                      <option value="">Any Make</option>
                      <option value="audi">Audi</option>
                      <option value="bmw">BMW</option>
                      <option value="ford">Ford</option>
                      <option value="honda">Honda</option>
                      <option value="toyota">Toyota</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 appearance-none cursor-pointer">
                      <option value="">Any Model</option>
                      <option value="a4">A4</option>
                      <option value="3-series">3 Series</option>
                      <option value="mustang">Mustang</option>
                      <option value="civic">Civic</option>
                      <option value="camry">Camry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 appearance-none cursor-pointer">
                      <option value="">Any Price</option>
                      <option value="10000">Under $10,000</option>
                      <option value="20000">Under $20,000</option>
                      <option value="30000">Under $30,000</option>
                      <option value="50000">Under $50,000</option>
                      <option value="100000">Under $100,000</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                <button className="mt-6 md:mt-0 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer flex items-center justify-center">
                  <i className="fas fa-search mr-2"></i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=A%20luxury%20modern%20sports%20car%20on%20a%20scenic%20coastal%20road%20at%20sunset%2C%20with%20dramatic%20lighting%20and%20reflections%20on%20the%20car%20surface.%20The%20car%20is%20positioned%20at%20an%20angle%20that%20showcases%20its%20sleek%20design%20and%20aerodynamic%20profile.%20The%20background%20features%20a%20stunning%20gradient%20sky%20with%20soft%20clouds%20and%20ocean%20views%2C%20creating%20an%20aspirational%20atmosphere.&width=1440&height=800&seq=1&orientation=landscape"
            alt="Luxury Car"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Find Your Perfect Drive
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover the best selection of premium vehicles with transparent
              pricing and verified sellers.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-medium cursor-pointer whitespace-nowrap !rounded-button">
                Browse Cars
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg font-medium cursor-pointer whitespace-nowrap !rounded-button">
                Sell Your Car
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Make
                  </label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 appearance-none cursor-pointer">
                      <option value="">Any Make</option>
                      <option value="audi">Audi</option>
                      <option value="bmw">BMW</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="tesla">Tesla</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model
                  </label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 appearance-none cursor-pointer">
                      <option value="">Any Model</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="coupe">Coupe</option>
                      <option value="convertible">Convertible</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range
                  </label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 appearance-none cursor-pointer">
                      <option value="">Any Price</option>
                      <option value="0-20000">$0 - $20,000</option>
                      <option value="20000-40000">$20,000 - $40,000</option>
                      <option value="40000-60000">$40,000 - $60,000</option>
                      <option value="60000+">$60,000+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>

                <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-md hover:bg-indigo-700 transition-colors font-medium cursor-pointer whitespace-nowrap !rounded-button">
                  <i className="fas fa-search mr-2"></i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Listings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Listings</h2>
              <p className="text-gray-600">Discover our handpicked selection of premium vehicles</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button
                className={`px-4 py-2 rounded-lg transition-colors !rounded-button whitespace-nowrap cursor-pointer ${activeTab === 'featured' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                onClick={() => setActiveTab('featured')}
              >
                Featured
              </button>
              <button
                className={`px-4 py-2 rounded-lg transition-colors !rounded-button whitespace-nowrap cursor-pointer ${activeTab === 'newest' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                onClick={() => setActiveTab('newest')}
              >
                Newest
              </button>
              <button
                className={`px-4 py-2 rounded-lg transition-colors !rounded-button whitespace-nowrap cursor-pointer ${activeTab === 'popular' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                onClick={() => setActiveTab('popular')}
              >
                Popular
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=2023%20Tesla%20Model%203%20in%20sleek%20white%20color%2C%20professional%20automotive%20photography%20with%20clean%20studio%20background%2C%20front%20three-quarter%20view%20showing%20modern%20design%2C%20LED%20headlights%20visible%2C%20minimalist%20interior%20visible%20through%20windows%2C%20high-resolution%20detailed%20image%20with%20perfect%20lighting&width=600&height=400&seq=car1&orientation=landscape"
                  alt="Tesla Model 3"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Tesla Model 3</h3>
                  <p className="text-lg font-bold text-blue-600">$42,990</p>
                </div>
                <p className="text-gray-600 mb-4">2023 • 1,200 miles • Electric</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Autopilot</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Premium Interior</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">AWD</span>
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
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=2022%20BMW%20M4%20Competition%20in%20metallic%20blue%2C%20professional%20automotive%20photography%20on%20clean%20background%2C%20front%20three-quarter%20view%20showing%20aggressive%20styling%2C%20LED%20headlights%2C%20carbon%20fiber%20details%20visible%2C%20premium%20wheels%2C%20high-resolution%20detailed%20image%20with%20perfect%20lighting&width=600&height=400&seq=car2&orientation=landscape"
                  alt="BMW M4 Competition"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Certified
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">BMW M4 Competition</h3>
                  <p className="text-lg font-bold text-blue-600">$78,500</p>
                </div>
                <p className="text-gray-600 mb-4">2022 • 8,450 miles • Gasoline</p>
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
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=2021%20Porsche%20911%20Carrera%20S%20in%20classic%20silver%2C%20professional%20automotive%20photography%20with%20clean%20studio%20background%2C%20front%20three-quarter%20view%20showing%20iconic%20design%2C%20LED%20headlights%20visible%2C%20premium%20wheels%2C%20high-resolution%20detailed%20image%20with%20perfect%20lighting&width=600&height=400&seq=car3&orientation=landscape"
                  alt="Porsche 911 Carrera S"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Hot Deal
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Porsche 911 Carrera S</h3>
                  <p className="text-lg font-bold text-blue-600">$124,900</p>
                </div>
                <p className="text-gray-600 mb-4">2021 • 12,350 miles • Gasoline</p>
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
          </div>
          <div className="flex justify-center mt-12">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
              View All Listings
            </button>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've simplified the process of buying and selling cars to make your experience seamless and enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Browse Listings</h3>
              <p className="text-gray-600">
                Explore thousands of verified listings with detailed information and high-quality photos.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-car text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Seller</h3>
              <p className="text-gray-600">
                Connect directly with sellers to ask questions, schedule test drives, or make offers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Purchase</h3>
              <p className="text-gray-600">
                Finalize your purchase with our secure payment system and convenient delivery options.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Signals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AutoMarket</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have found their perfect vehicles through our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Sellers</h3>
              <p className="text-gray-600">
                All sellers undergo a thorough verification process to ensure safety and trust.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-history text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vehicle History</h3>
              <p className="text-gray-600">
                Access comprehensive vehicle history reports for every listing on our platform.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-credit-card text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Our secure payment system protects both buyers and sellers during transactions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is always available to assist you with any questions.
              </p>
            </div>
          </div>
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to find your dream car?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of satisfied customers who have found their perfect vehicles through AutoMarket.
                  Whether you're buying or selling, we make the process simple, secure, and enjoyable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
                    Browse Cars
                  </button>
                  <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
                    Sell Your Car
                  </button>
                </div>
              </div>
              <div className="md:w-1/3">
                <img
                  src="https://readdy.ai/api/search-image?query=Happy%20diverse%20couple%20receiving%20car%20keys%20from%20dealer%20in%20modern%20car%20showroom%2C%20professional%20lifestyle%20photography%2C%20bright%20and%20clean%20environment%2C%20focus%20on%20smiling%20faces%20and%20handshake%2C%20high-quality%20detailed%20image%20with%20natural%20lighting&width=400&height=300&seq=happy-customers&orientation=landscape"
                  alt="Happy Customers"
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="ml-2 text-gray-300">5.0</span>
              </div>
              <p className="text-gray-300 mb-6">
                "I found my dream car on AutoMarket within days of searching. The process was incredibly smooth, and the seller was verified which gave me peace of mind. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-white">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-gray-400 text-sm">Purchased a Tesla Model 3</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="ml-2 text-gray-300">5.0</span>
              </div>
              <p className="text-gray-300 mb-6">
                "Selling my car on AutoMarket was a breeze. I had multiple inquiries within hours of listing, and the secure payment system made the transaction worry-free. Great platform!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-white">JS</span>
                </div>
                <div>
                  <h4 className="font-bold">Jane Smith</h4>
                  <p className="text-gray-400 text-sm">Sold a BMW 5 Series</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="ml-2 text-gray-300">4.5</span>
              </div>
              <p className="text-gray-300 mb-6">
                "The detailed listings and high-quality photos made it easy to find exactly what I was looking for. Customer support was also incredibly helpful throughout the process."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-white">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Robert Johnson</h4>
                  <p className="text-gray-400 text-sm">Purchased a Porsche Cayenne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                <li><a href="https://readdy.ai/home/7d2f6682-563e-44ca-9def-a9cd63f9d9cb/f5af73f1-889f-4737-99a1-dd98e3777cfe" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Browse Cars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sell Your Car</a></li>
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
