'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "../ui/NavLink";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const path = usePathname()
  const isLandingPage = path === '/'

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
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isLandingPage && !isScrolled ? 'bg-transparent' : 'bg-white/90 backdrop-blur-md shadow-sm'
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            <i className="fas fa-car-side mr-2"></i>
            AutoMarket
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/browse" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">Browse Cars</NavLink>
          <NavLink href="/sell" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">Sell Your Car</NavLink>
          <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">About Us</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="font-medium text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
            Sign Up
          </button>
        </div>
        <button
          className="md:hidden text-gray-800 focus:outline-none cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">Home</a>
              <a href="https://readdy.ai/home/7d2f6682-563e-44ca-9def-a9cd63f9d9cb/f5af73f1-889f-4737-99a1-dd98e3777cfe" data-readdy="true" className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">Browse Cars</a>
              <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">Sell Your Car</a>
              <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2">About Us</a>
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                <button className="font-medium text-gray-800 hover:text-blue-600 transition-colors py-2 text-left cursor-pointer">
                  Sign In
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}