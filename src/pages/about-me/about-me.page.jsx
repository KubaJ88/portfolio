import React from 'react';
import Contact from '../../components/contact/contact.component';
import './about-me.style.scss';
import {motion, AnimatePresence} from 'framer-motion';
import {useRouteMatch} from 'react-router-dom'



const AboutMe = () => {

    let aboutMatch = useRouteMatch('/about-me');
    // console.log(aboutMatch)

    const variants = {
        hidden: {
            y: '-100%',
            transformOrigin: 'right top',            
            transition: {
                duration: .8,
                delay: 0.2,                       
                ease: [.6, .05, -.01, .9],
            }
        },
        show: {
            y:0,            
            transition: {
                duration: .7,
                // delay: 0.2,                       
                ease: [.6, .05, -.01, .9],
            }
        },
        
    }

    return (
        <>
        
        
        <motion.div className='background-about'
         initial='hidden'
         
         animate={aboutMatch.isExact ? 'show' : 'hidden'}
         exit='hidden'
         variants={variants}
        ></motion.div>
               
        <motion.div className="about-me"
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity:0}}
        initial={{ y: '-100%', transformOrigin: 'right top',
        skewY: 2 }}
                        exit={{ y: '-100%', opacity:0 }}
                        animate={{ y: aboutMatch.isExact ? 0 : '-100%', skewY: 0}}
                        transition={{
                            duration: .8 ,
                            delay: aboutMatch.isExact ? 0.05 : 0.1,
                            ease: [.6, .05, -.01, .9]
                        }}
        >
        <motion.div className="about-me-container"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
           <Contact/>
        </motion.div>
        </motion.div>
        
        </>
        
    )
}


export default AboutMe;