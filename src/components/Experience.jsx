/* eslint-disable react-refresh/only-export-components */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { styles } from "../../styles";
import { experiences } from "../constants";
import { textVariant } from "../../utils/motion";
import Sectionwrapper from "../hoc/Sectionwrapper";
import PropTypes from "prop-types";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      contentStyle={{ background: '#1A2954', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #1A2954' }}
      data={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
      <div className='absolute flex flex-row gap-5'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-[#E94100]' />
          <div className='w-1 h-40 sm:h-80 orange-gradient' />
        </div>
        <motion.div
          variants={textVariant()}
        >
          <p className={`${styles.sectionSubText} `}>
            Ce que j&lsquo;ai fait jusqu&lsquo;a présent
          </p>
          <h2 className={`${styles.sectionHeadText} fontSize`}>Mes expériences.</h2>
        </motion.div>
      </div>
      <div className="pt-40 mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}
ExperienceCard.propTypes = {
  experience: PropTypes.object,

}
export default Sectionwrapper(Experience, 'work')