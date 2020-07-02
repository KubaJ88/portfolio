import React from 'react';
import {motion} from 'framer-motion';
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

const stagger = {
    animate: {
      transition: {
        staggerChildren: .2
      }
    }
  }

const Photo = () => {

    return (
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
        <img src={require('../../img/photo.JPG')} alt="photo" className="photo__portfolio__img"/>
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
        <div className="photo__portfolio__circle photo__portfolio__circle--3">
        <Triangle className='triangle-icon'/>
        </div>
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
    )
}


export default Photo;