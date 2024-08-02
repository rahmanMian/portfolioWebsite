import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc';

const ServiceCard = ({index, title, icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * 
        index, 0.75)}
        className='w-full  p-[1px] rounded-[5px] shadow-card border border-black'
        >
          <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          style={{ backgroundImage: `url(${icon})` }}
          className='bg-cover bg-center aspect-w-16 aspect-h-9 rounded-[5px]
           min-h-[360px] 
          justify-between items-center flex flex-col'>
            <h3 className='text-playing-card-red text-[23px] font-card font-bold'>{title}</h3>
            <h3 className='text-playing-card-red text-[23px] rotate-180 font-card font-bold'>{title}</h3>
          </div>
        
      </motion.div>
    </Tilt>
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
          <ServiceCard key={service.title} 
          index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")