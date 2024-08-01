import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({index, title, icon}) =>{
  return (
    <p>{title}</p>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
     </motion.div>

     <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[19px]
      max-w-3xl leading-[30px]'
     >
      I am a software developer who started his journey as a full stack engineer. I love making visually appleaing and responive applications with an equally robust backend.
     </motion.p>

     <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default About