"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Computer Engineer & Full Stack Developer with expertise in building
          modern web applications. With a strong foundation in both frontend and
          backend technologies, I create seamless user experiences and robust
          server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate" 
        >*/}
          {/* <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-primary mb-2">
              Cabtm Nepal Pvt. Ltd. • Jan 2023 – Nov 2024
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Implemented responsive web applications using React and Next.js
              </li>

              <li>
                Collaborated with designers to create user-friendly interfaces
              </li>
              <li>
                Optimized application performance, reducing load times by 30%
              </li>
            </ul>
          </motion.div> */}

          {/* <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Web Development Intern
            </h3>
            <p className="text-primary mb-2">
              Cabtm Nepal Pvt. Ltd. • July 2022 – Dec 2022
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>
                Built responsive user interfaces with modern JavaScript
                frameworks
              </li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section> */}

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Technology in Computer Science & Engineering
            </h3>
            <p className="text-primary mb-2">
              Kurukshetra University, Kurukshetra • 2015-2020
            </p>
            <p className="text-secondary">
              Graduated. Focused on software engineering and web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Certification Section */}
      <motion.section className="mt-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Certifications
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">MERN Stack</h3>
            <p className="text-primary mb-2">
              Broadway Infosys Pvt. Ltd., Kathmandu, Nepal      • 3 months
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Mastered MongoDB, Express.js, React, and Node.js</li>
              <li>Built full-stack applications with RESTful APIs</li>
              <li>Implemented authentication and authorization</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
               Certified Registered Engineer 
            </h3>
            <p className="text-primary mb-2">
              Nepal Engineering Council, Kathmandu, Nepal  •  Jan 2022 
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Recognized as a certified engineer in Nepal</li>
              <li>Demonstrated proficiency in engineering principles</li>
              <li>Committed to ethical engineering practices</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
