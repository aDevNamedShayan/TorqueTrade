export default function Footer() {
  return (
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
  );
}