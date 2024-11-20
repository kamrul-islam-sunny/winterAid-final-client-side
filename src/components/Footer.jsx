import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-4 mx-4 md:mx-2 ">
      <footer className="border-2 rounded-tr-xl rounded-tl-xl footer text-base-content p-10 max-w-6xl mx-auto">
        <aside className="">
          <img className="size-40" src="/assets/logo.png" alt="" />
          <p className="text-base font-normal">WInterAid Foundation.</p>
        </aside>
        <nav>
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 ">Contact Us</h3>
            <p className="text-sm">
              📍 Address: 123 WinterAid Street, Dhaka, Bangladesh
            </p>
            <p className="text-sm">📧 Email: support@winteraidfoundation.com</p>
            <p className="text-sm">📞 Phone: +880-1234-567890</p>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <div className="flex gap-4">
            <a className="link link-hover text-3xl">
              <FaYoutube />
            </a>
            <a className="link link-hover text-3xl">
              <FaFacebook />
            </a>
            <a className="link link-hover text-3xl">
              <FaTwitter />
            </a>
          </div>
        </nav>
      </footer>
      <div className="border-x-2  max-w-6xl mx-auto text-center text-base-content p-4">
        <aside>
          <p>&copy; 2024 WinterAid Foundation. All rights reserved.</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
