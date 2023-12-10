/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../hoc';
import PropTypes from "prop-types";


const ServicesCards = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div
        variants={fadeIn("right", "spring", .5 * index, .75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col '
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
ServicesCards.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string,
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} fontSize`}>A propos.</h2>
      </motion.div>
      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn("", "", .1, 1)}
      >
        Développeur d&lsquo;applications innovant et proactif, capable de créer des sites web et des applications au concept élégant et novateur pour des clients exigeants. Polyvalent et hautement organisé avec une expertise dans la planification de projets, l&lsquo;amélioration des concepts et la verification de la programmation.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, i) =>
          <ServicesCards key={service.title} index={i} {...service} />
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")