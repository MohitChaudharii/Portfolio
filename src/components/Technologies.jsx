import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiEclipseide } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaJava className="text-7xl text-orange-600"></FaJava>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <BiLogoSpringBoot className="text-7xl text-green-500"></BiLogoSpringBoot>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <SiMysql className="text-8xl text-blue-600"></SiMysql>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.8)}
          className="p-4"
        >
          <BiLogoPostgresql className="text-7xl text-blue-600 border-white"></BiLogoPostgresql>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <VscVscode className="text-7xl text-blue-500"></VscVscode>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiEclipseide className="text-7xl text-blue-900"></SiEclipseide>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <FaGithub className="text-7xl text-white"></FaGithub>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
