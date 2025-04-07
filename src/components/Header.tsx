import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Menu, X } from 'lucide-react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header className={`w-full bg-white ${isSticky ? 'fixed top-0 shadow-md' : ''}`}>
      <div className="bg-yellow-400 text-black py-1">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold">
            {currentDateTime.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8" />
            <span className="text-2xl font-bold">EnteKottayam</span>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`${
            isMenuOpen
              ? 'absolute top-full left-0 right-0 bg-white shadow-md md:relative md:shadow-none'
              : 'hidden'
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
              <li>
                <Link to="/" className="block py-2 hover:text-yellow-600">Home</Link>
              </li>
              <li>
                <Link to="/kerala-news" className="block py-2 hover:text-yellow-600">Kerala News</Link>
              </li>
              <li>
                <Link to="/kottayam-news" className="block py-2 hover:text-yellow-600">Kottayam News</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 hover:text-yellow-600">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4">BREAKING NEWS: Latest updates from Kottayam district...</span>
          <span className="mx-4">COVID-19: New guidelines announced for public gatherings...</span>
          <span className="mx-4">Weather Alert: Heavy rainfall expected in Central Kerala...</span>
        </div>
      </div>
    </header>
  );
};

export default Header;