/* eslint-disable react-refresh/only-export-components */
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc"
import BallCanvas from "./canvas/Ball";


const Tech = () => {
  return (
    <div
      className="flex flex-row flex-wrap mb-2"
    >
      {technologies.map((tech) => {
        return (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        )
      })}
    </div>
  )
}

export default SectionWrapper(Tech, '');