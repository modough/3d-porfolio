/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { Tilt } from 'react-tilt';
import { github } from '../assets';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * .5, .75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 
              rounded-full flex justify-center 
              items-center cursor-pointer'
            >
              <Link to={source_code_link}>
                <img
                  src={github}
                  alt='github'
                  className='w-5 h-5'
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white text-[24px] font-bold'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} `}>
          Accomplissement
        </p>
        <h2 className={`${styles.sectionHeadText} fontSize`}>Quelques projets.</h2>
      </motion.div>
      <div className=" w-full flex ">
        <motion.p
          variants={fadeIn("", "", .1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Les projets suivants mettent en avant mes compétences et
          mon expérience à travers des exemples concrets de mon travail.
          Chaque projet est brièvement décrit,
          accompagné de liens vers les dépôts de code et des démonstrations en direct.
          Cela reflète ma capacité à résoudre des problèmes complexes,
          à travailler avec différentes technologies,
          et à gérer efficacement des projets.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, i) => (
          <ProjectCard
            key={`project-${i}`}
            index={i}
            {...project}
          />
        ))}
      </div>
    </>
  )
}
ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  source_code_link: PropTypes.string
}
export default SectionWrapper(Works, '') 