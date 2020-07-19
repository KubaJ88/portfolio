import React, {useContext} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { PortfolioContext } from '../../providers/portfolio.provider';
import './photo.style.scss';
import  {ReactComponent as Triangle} from '../../img/triangle-outline.svg';

const ease = [.6, .05, -.01, .9];

const showPhoto = {
    initial: {
      x: -100,
      opacity: 0
    },
    animate: {
      x:0,
      opacity:1,
      transition: {
        duration: 1.5,
        ease: ease
      }
    }
}



const Photo = () => {

  const {featuredProject} = useContext(PortfolioContext)

    return (
      <AnimatePresence>
      <motion.div className="photo"
      initial='initial'
      animate='animate'
      
      >
        <motion.div className="photo__portfolio"
        
        variants={showPhoto}
        transition={{
            duration:1,
            ease:ease,
            when:'beforeChildren',
            staggerChildren: 0.3
        }}
        >
        <AnimatePresence initial={false} exitBeforeEnter>
        <motion.img src={
          !featuredProject.show ? require('../../img/photo.JPG') : require(`../../img/projects/${featuredProject.img}`)
        }
        key={featuredProject.show ? featuredProject.key : 100 }
        initial={{ opacity: 0 }}
        exit={{ opacity: 0   }}
        animate={{ opacity: 1}}
        transition={{
            duration: 1,
            delay: .5,
            ease: ease
        }}
        alt="welcome" className="photo__portfolio__img"/>
        </AnimatePresence>
        <motion.div 
        initial={{x:-100}}
        animate={{x: '5rem', y: '3rem'}}
        transition={{
            duration:5,
            yoyo: Infinity,
            ease:ease
        }}
        className="photo__portfolio__circle photo__portfolio__circle--1"></motion.div>
        <motion.div

        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            
        }}

        transition={{duration:10, loop:Infinity, ease:ease}}
        
        className="photo__portfolio__circle photo__portfolio__circle--2"></motion.div>
        <motion.div className="photo__portfolio__circle photo__portfolio__circle--3"
        animate={{
          x: [10, 20, 50, 80, 100],
          rotate: [0, 0, 90, 90, 0],
          y: [-10, -20, -50, -80, -100],
          
      }}

      transition={{duration:10, yoyo:Infinity, ease:ease}}
        >
        <Triangle className='triangle-icon'/>
        </motion.div>
        <motion.div 
         initial={{x:0}}
         animate={{x: '-5rem', y: '-3rem'}}
         transition={{
             duration:5,
             yoyo: Infinity,
             ease:ease,
             delay: .5
             
         }}
        
        className="photo__portfolio__circle photo__portfolio__circle--4">
        <Triangle className='triangle-icon'/>
        </motion.div>
        
        </motion.div>

      </motion.div>
      </AnimatePresence>
    )
}


export default Photo;