import React from "react";
import logo from "../../assets/logo.png"

export default function FooterP() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* Logo + Copyright */}
        <div>
          <h2 className="text-2xl font-bold mb-2"><img src={logo} alt="" /></h2>
          <p className="text-sm text-gray-600">© 2025 Flone.</p>
          <p className="text-sm text-gray-600">All Rights Reserved</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-sm font-bold mb-4 uppercase">About Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-purple-700">About us</a></li>
            <li><a href="#" className="hover:text-purple-700">Store location</a></li>
            <li><a href="#" className="hover:text-purple-700">Contact</a></li>
            <li><a href="#" className="hover:text-purple-700">Orders tracking</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-sm font-bold mb-4 uppercase">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-purple-700">Returns</a></li>
            <li><a href="#" className="hover:text-purple-700">Support Policy</a></li>
            <li><a href="#" className="hover:text-purple-700">Size guide</a></li>
            <li><a href="#" className="hover:text-purple-700">FAQs</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-sm font-bold mb-4 uppercase">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-purple-700">Facebook</a></li>
            <li><a href="#" className="hover:text-purple-700">Twitter</a></li>
            <li><a href="#" className="hover:text-purple-700">Instagram</a></li>
            <li><a href="#" className="hover:text-purple-700">Youtube</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-sm font-bold mb-4 uppercase">Subscribe</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full border-b border-gray-400 bg-transparent py-1 text-sm mb-2 outline-none placeholder-gray-500"
          />
          <button className="text-sm text-black border-b border-black hover:text-purple-700">
            SUBSCRIBE
          </button>
        </div>

      </div>
    </footer>
  );
}
