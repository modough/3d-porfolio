/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { slideIn } from "../../utils/motion";
import { EarthCanvas } from "./canvas";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => { };
  const handleSubmit = (e) => { };
  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={(slideIn('left', 'tween', .2, 1))}
        className=" flex-[0.75] bg-[#1A2954] rounded-2xl p-8"
      >
        <p
          className="uppercase sm:text-[18px] text-[14px] text-secondary tracking-wider"
        >
          Contactez-moi !
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">
              Votre nom
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg outlined-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">
              Votre adresse email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre adresse email?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg outlined-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">
              Votre message
            </span>
            <input
              type='text'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Ecrivez votre message ici..."
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg outlined-none
              border-none font-medium"
            />
          </label>
          <button
            type='submit'
            className="bg-tertiary py-3 px-8 
            outline-none w-fit text-white font-bold 
            shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Envoi en cours' : 'Envoyer'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={(slideIn('right', 'tween', .2, 1))}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact') 