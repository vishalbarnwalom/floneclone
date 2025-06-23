import { useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoTumblr } from "react-icons/io";
import { FaVimeoV } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const { pathname } = useLocation();

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h1>

        {/* Google Map */}
        <div className="mb-12">
          <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-md">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0 w-full h-full"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.4819834457074!2d-122.17810738436878!3d47.44469897917413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490613f1525cbcf%3A0xabf42b8df69c4566!2sGoogle%20Kirkland!5e0!3m2!1sen!2sin!4v1719131935425!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-2xl">
             
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Phone</h4>
                
                <p className="text-gray-600">+012 345 678 102</p>
                <p className="text-gray-600">+012 345 678 103</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-2xl">
                <i className="fa fa-globe" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  Website & Email
                </h4>
                <p className="text-gray-600">
                  <a
                    href="mailto:yourname@email.com"
                    className="text-blue-600 hover:underline"
                  >
                    yourname@email.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="https://yourwebsitename.com"
                    className="text-blue-600 hover:underline"
                  >
                    yourwebsitename.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-2xl">
                <i className="fa fa-map-marker" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  Address
                </h4>
                <p className="text-gray-600">Address goes here,</p>
                <p className="text-gray-600">Street, Crossroad 123.</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Follow Us
              </h4>
              <div className="flex justify-center gap-5 text-gray-600 text-xl">
                <a href="//facebook.com" className="hover:text-blue-600">
                  <FaFacebook />
                </a>
                <a href="//pinterest.com" className="hover:text-red-600">
                  <FaPinterest />
                </a>
                <a href="//thumblr.com" className="hover:text-purple-600">
                  <IoLogoTumblr />
                </a>
                <a href="//vimeo.com" className="hover:text-indigo-600">
                  <FaVimeoV />
                </a>
                <a href="//twitter.com" className="hover:text-blue-400">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message*"
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-[#404040] hover:bg-[#a749ff] text-white font-semibold px-10 py-3 transition duration-200"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
