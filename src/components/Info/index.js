import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

// import icons
import MapPin from '../Icons/MapPin';
import Phone from '../Icons/Phone';
import Clock from '../Icons/Clock';
import Instagram from '../Icons/Instagram';
import Facebook from '../Icons/Facebook';

const Info = () => (
  <section id="info">
    <div className="w-full md:h-screen">
      <StaticImage src="../../images/info/top-border.png" alt="" className="w-full" />
      <div className="bg-[#222] py-4 md:py-0">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Información
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          viewport={{ once: true }}
        >
          <p className="mb-8 text-white text-center italic">
            Cerrado los LUNES, ciertos días festivos y durante cierres programados.<br />
          </p>

          <div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-4 mx-auto px-4 text-white">
            <div className="flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.3345781763664!2d-1.8650492879264868!3d38.98485974141973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd665f7a9cfab79b%3A0x12f825a9fcbf3bb0!2sRestaurante%20Taperia%20Ed%C3%A9n!5e0!3m2!1ses!2ses!4v1755770129241!5m2!1ses!2ses"
                width="100%"
                height="300"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación de Restaurante Taperia Edén"
              ></iframe>
            </div>
            {/* CONTACT INFO */}
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex self-start items-center">
                <span className="w-[20px] h-[20px] text-[#84cc16] mr-3"><MapPin /></span>
                <p className="font-medium uppercase">Dirección :</p>
              </div>
              <div>
                <p>
                  Paseo Circunvalación, 115<br />
                  02006 Albacete<br />
                  España
                </p>
              </div>
              <div className="flex self-start items-center">
                <span className="w-[18px] h-[18px] text-[#84cc16] mr-3"><Phone /></span>
                <p className="font-medium uppercase">Teléfono :</p>
              </div>
              <div>
                <p>967-741-447</p>
              </div>
              {/* HOURS OF OPERATION */}
              <div className="flex self-start items-center">
                <span className="w-[20px] h-[20px] text-[#84cc16] mr-3"><Clock /></span>
                <p className="font-medium uppercase">Horario :</p>
              </div>
              <div></div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Dom</p>
              </div>
              <div className="flex items-center">
                <p>12:00 a 19:00 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Lun</p>
              </div>
              <div className="flex items-center">
                <p>CERRADO</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Mar & Jue</p>
              </div>
              <div className="flex items-center">
                <p>12:00 a 22:00 h</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Mié</p>
              </div>
              <div className="flex items-center">
                <p>12:00 a 22:00 h</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Vie</p>
              </div>
              <div className="flex items-center">
                <p>12:00 a 22:00 h</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Sáb</p>
              </div>
              <div className="flex items-center">
                <p>12:00 a 22:00 h</p>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto mt-10 flex justify-center items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
            >
              <button className="mx-4 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#84cc16] hover:bg-white text-white hover:text-[#84cc16]">
                <span className="w-[30px] h-[30px]"><Instagram /></span>
              </button>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
            >
              <button className="mx-4 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#84cc16] hover:bg-white text-white hover:text-[#84cc16]">
                <span className="w-[30px] h-[30px]"><Facebook /></span>
              </button>
            </a>
            {/* <Link to="https://www.instagram.com/elSitio/" target="_blank">
              <button className="mx-4 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#84cc16] hover:bg-white text-white hover:text-[#84cc16]">
                <span className="w-[30px] h-[30px]"><Instagram /></span>
              </button>
            </Link>
            <Link to="https://www.facebook.com/elSitio" target="_blank">
              <button className="mx-4 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#84cc16] hover:bg-white text-white hover:text-[#84cc16]">
              <span className="w-[30px] h-[30px]"><Facebook /></span>
              </button>
            </Link> */}
          </div>
        </motion.div>

      </div>
      <StaticImage src="../../images/info/btm-border.png" alt="" className="w-full" />
    </div>
  </section>
);
export default Info;