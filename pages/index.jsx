import Image from "next/image";

//components
import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer-motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";
import { Profiler } from "react";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
              <span className="text-[1rem] font-light">Hi, I&apos;m <br /></span>
              <span className="text-accent h1 text-[4rem] font-bold">Rodnie Galvan</span>
              </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
             A Fullstack Developer who values clean, maintainable, and efficient
            code. I build scalable and high-performance applications with best
            practices in mind.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative z-30">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* bg-image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0 mix-blend-color-dodge"></div>
        {/* Particles */}
        <ParticlesContainer />
        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[800px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
