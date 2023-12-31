/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import PropTypes from "prop-types";


const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * .5, .75)}
      className='bg-black-200 p-10 rounded-3xl w-full'
    >
      <p className='text-white font-black text-[48px]'>
        {'"'}
      </p>
      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>
          {testimonial}
        </p>
        <div className='mt-7 flex gap-1 justify-between items-center'>
          <div className='flex flex-1 flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span>
              {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} chez {company}
            </p>
          </div>
          <img
            src={image}
            alt={name}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>)
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-[#1A2954] rounded-[20px] '>
      <div
        className="sm:px-16 px-6 sm:py-16 py-10 
        bg-tertiary rounded-tr-2xl 
        rounded-tl-2xl min-h-[300px]"
      >
        <motion.div
          variants={textVariant()}
        >
          <p
            className="uppercase sm:text-[18px] text-[14px] text-secondary tracking-wider"
          >
            Ce que d&apos;autres pensent de nous
          </p>
          <h2
            className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          >Recommandations</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 flex-col`}>
        {testimonials.map((test, i) => (
          <FeedbackCard
            key={test.name}
            index={i}
            {...test}
          />
        ))}
      </div>
    </div>
  )
}
FeedbackCard.propTypes = {
  index: PropTypes.number,
  testimonial: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  company: PropTypes.string,
  image: PropTypes.string
}
export default SectionWrapper(Feedbacks, "") 