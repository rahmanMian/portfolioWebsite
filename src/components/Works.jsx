import { styles } from '../styles';
import { motion } from 'framer-motion';
import { github, link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant} from '../utils/motion'

const ProjectCard = ({index, name, description,
  tags, img, source_code_link, isGithubLink}) => {
    return (
   <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)}  >
     <div
     className='bg-tertiary p-5 rounded-2xl
     sm:w-[400px] w-full'>
      <div className='relative w-full h-[240px]'>
        <img
          src={img}
          alt={name}
          className='w-full h-full object-cover
          rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={()=> window.open(source_code_link,"_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer group"
            >
              <img
              src={isGithubLink ? github: link}
              alt="github"
              className='w-7 h-7 group-hover:w-8 group-hover:h-8
              object-contain'
              />
  
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
     </div>
   </motion.div>
    )
  }

  const Works = () => {
    return (
      <>
       <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>
  
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Each Project has a link to my GitHub code. Feel free to look at the quick video demos or check out my code.
          </motion.p>
        </div>
  
        <div className="mt-10 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </>
    );
  };
  
export default SectionWrapper(Works, "");