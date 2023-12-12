import { motion } from 'framer-motion';
import { styles } from '../../styles';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='pt-20'>
          <h1
            className={`${styles.heroHeadText} text-white`}
            style={{ fontSize: '40px', fontWeight: 'bold' }}
          >
            Salut ! Moi c&apos;est &nbsp;<span className='text-[#E94100]'>
              Mouhamed
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je développe des applications react avec un visuel 3D, <br className='sm:block hidden' /> avec la stack MERN !
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div
            className='w-[38px} h-[38px] 
            rounded-3xl border-4 border-white 
            flex justify-center items-start p-2'
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full mb-1 bg-white'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero