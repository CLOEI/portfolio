import React from "react";
import {
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import Image from "next/image";
import Profile from "../public/profile.jpeg";
import { motion } from "framer-motion";

function Orbit() {
  return (
    <div className="orbit">
      <div className="relative w-36 h-36 overflow-hidden rounded-lg z-10">
        <Image src={Profile} alt="Cendy" placeholder="blur" layout="fill" />
      </div>
      <div>
        <ul className="orbit_item">
          <motion.li
            animate={{
              transform: "rotate(90deg) translate(10rem) rotate(-90deg)",
              transition: {
                duration: 0.3,
              },
            }}
          >
            <div>
              <SiTypescript size={25} />
            </div>
          </motion.li>
          <motion.li
            animate={{
              transform: "rotate(180deg) translate(10rem) rotate(-180deg)",
              transition: {
                duration: 0.6,
              },
            }}
          >
            <div>
              <SiReact size={25} />
            </div>
          </motion.li>
          <motion.li
            animate={{
              transform: "rotate(270deg) translate(10rem) rotate(-270deg)",
              transition: {
                duration: 0.9,
              },
            }}
          >
            <div>
              <SiPostgresql size={25} />
            </div>
          </motion.li>
          <motion.li
            animate={{
              transform: "rotate(360deg) translate(10rem) rotate(-360deg)",
              transition: {
                duration: 1,
              },
            }}
          >
            <div>
              <SiTailwindcss size={25} />
            </div>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Orbit;
