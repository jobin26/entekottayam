import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-6 w-6" />
              <span className="text-xl font-bold">Kerala News</span>
            </div>
            <p className="text-gray-400">
              Your trusted source for local news from Kerala and Kottayam.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/kerala-news" className="text-gray-400 hover:text-white transition">Kerala News</Link></li>
              <li><Link to="/kottayam-news" className="text-gray-400 hover:text-white transition">Kottayam News</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic">
              <p>123 News Street</p>
              <p>Kottayam, Kerala</p>
              <p>India 686001</p>
              <p className="mt-2">Email: info@keralanews.com</p>
              <p>Phone: +91 123 456 7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kerala News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;