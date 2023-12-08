/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import Tilt from 'react-tilt';

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
      >
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

export default SectionWrapper(Works, '') 