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
      contentStyle={{ background: '#e94100', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #e94100' }}
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
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} `}>
          Ce que j&lsquo;ai fait jusqu&lsquo;a présent
        </p>
        <h2 className={`${styles.sectionHeadText} fontSize`}>Mes expériences.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
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