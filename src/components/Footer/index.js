import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
// import icons
import Instagram from '../Icons/Instagram';
import Facebook from '../Icons/Facebook';

const Footer = () => (
  <footer>
    <motion.div
      className="fixed z-50 bottom-0 left-0 w-full flex justify-between items-center p-3 bg-[#1b1b1b] border-t border-gray-300 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <StaticImage
          src="../../images/footer/logoEdenMini.png"
          alt="Heden Mini Logo"
          placeholder="none"
          className="w-[40px]"
        />
      </div>

      <div className="text-xs md:text-base font-normal tracking-wider">
        <p>
          © {new Date().getFullYear()} &middot; E
          <span className="text-[#84cc16]">d</span>én. All rights reserved.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="h-[30px] flex items-center mr-1 md:mr-2 text-white hover:text-[#84cc16]"
        >
          <span className="w-[20px] h-[20px]"><Instagram /></span>
        </a>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="h-[30px] flex items-center ml-1 md:ml-2 text-white hover:text-[#84cc16]"
        >
          <span className="w-[19px] h-[19px]"><Facebook /></span>
        </a>
        {/* <Link to="https://www.instagram.com/elSitio/" target="_blank">
          <button className="h-[30px] flex items-center mr-1 md:mr-2 text-white hover:text-[#84cc16]">
            <span className="w-[20px] h-[20px]"><Instagram /></span>
          </button>
        </Link>
        <Link to="https://www.facebook.com/elSitio" target="_blank">
          <button className="h-[30px] flex items-center ml-1 md:ml-2 text-white hover:text-[#84cc16]">
            <span className="w-[19px] h-[19px]"><Facebook /></span>
          </button>
        </Link> */}
      </div>
    </motion.div>
  </footer>
);

export default Footer;