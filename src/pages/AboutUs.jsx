import { Fragment } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      {/* SEO could be integrated using react-helmet if needed */}

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-6 text-sm text-gray-700">
        <div className="max-w-7xl mx-auto">
          <span className="mr-2">
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>
          </span>
          /
          <span className="ml-2 text-gray-500">About Us</span>
        </div>
      </div>

      {/* Section Title with Text */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Welcome to our company. We provide the best quality products to our customers and always strive for excellence.
        </p>
      </div>

      {/* Banner Section */}
      <div className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <img src="/assets/about-banner.jpg" alt="About Banner" className="mx-auto rounded-md shadow-md" />
        </div>
      </div>

      {/* Text Grid Section */}
      <div className="py-16 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">To deliver high-quality products that bring value to our customers.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">To be the most trusted brand in our industry globally.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">Integrity, Innovation, and Customer Satisfaction.</p>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="py-20 bg-gray-200 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-700">Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-700">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-700">Team Members</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-700">Awards Won</p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4">
              <div className="w-full h-48 bg-gray-200 mb-4 rounded"></div>
              <h4 className="font-semibold text-lg">Member {i}</h4>
              <p className="text-sm text-gray-500">Position</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Logo Slider */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`/assets/brand-logo-${i}.png`}
              alt={`Brand ${i}`}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default About;
