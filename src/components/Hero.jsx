import { motion } from 'framer-motion';
import { styles }  from '../styles';
import { ComputersCanvas } from './canvas';

 const Hero = () => {
  return (
    <section className='relative w-full  h-[400px] mx-auto'>
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col 
      justify-center items-center mt-5">
        <div className='w-1 sm:h-60 h-50
        orange-gradient' />
      </div>
      <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hey, I'm <span className='text-[#915eff]'>Rahman</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack applications <br className='sm:block hidden'/>and websites.
          </p>
        </div>
    </div>
    </section>
  )
}

export default Hero