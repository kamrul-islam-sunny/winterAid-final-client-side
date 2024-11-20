import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-4 mx-4 lg:mx-0">
      <footer className="border rounded-tr-xl rounded-tl-xl footer text-base-content p-10 max-w-6xl mx-auto">
        <aside className="">
          <img className="size-40" src="../../src/assets/logo.png" alt="" />
          <p className="text-base font-normal">WInterAid Foundation.</p>
        </aside>
        <nav>
          <h6 className="footer-title">Donors</h6>
          <a className="link link-hover">Ways to Give</a>
          <a className="link link-hover">Donate in Honor</a>
          <a className="link link-hover">Start a Fundraiser</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Our Team</a>
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
    </div>
  );
};

export default Footer;
