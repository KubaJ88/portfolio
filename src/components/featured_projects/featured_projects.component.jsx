import React from 'react';
import {motion} from 'framer-motion';
import './featured_projects.style.scss';
import  {ReactComponent as Planet} from '../../img/planet-outline.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import  {ReactComponent as Star} from '../../img/star-outline.svg';



const ease = [.6, .05, -.01, .9];

const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y:0,
      opacity:1,
      transition: {
        duration: 1.5,
        ease: ease,
        
      }
    }
}

const stagger = {
    animate: {
      transition: {
        when:'beforeChildren',
        staggerChildren: .5,
        ease: ease,
        delayChildren: 3.0
        
      }
    }
  }

const FeaturedProjects = () => {

    return( 
        <div className="featured__container">
            <h1 className="title">
                featured projects
            </h1>

            <motion.div className="projects"
            variants={stagger}
            initial='initial'
            animate='animate'
            // transition={{
            //     de
            // }}

            >
                <motion.div className="project"
               variants={fadeInUp}
               whileHover={{scale:1.05, backgroundColor:'#424242', color: '#fff'}}
               whileTap={{scale:0.95}} 
                
                >
                    <div className="project__title">
                        Project Name
                    </div>
                    <div className="project__description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, dolorum?
                    </div>
                    <div className="project__icons">
                        <motion.div
                        whileHover={{scale:1.05}}
                        className="icon"><Planet/></motion.div>
                        <div className="icon"><Git/></div>
                        <div className="icon"><Star/></div>
                    </div>
                </motion.div>
                <motion.div className="project"
                variants={fadeInUp}
                
                >
                    <div className="project__title">
                        Project Name-2
                    </div>
                    <div className="project__description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, dolorum?
                    </div>
                    <div className="project__icons">
                    <div className="icon"><Planet/></div>
                        <div className="icon"><Git/></div>
                        <div className="icon"><Star/></div>
                    </div>
                </motion.div>
                <motion.div className="project"
                variants={fadeInUp}
                >
                    <div className="project__title">
                        Project Name-2
                    </div>
                    <div className="project__description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, dolorum?
                    </div>
                    <div className="project__icons">
                    <div className="icon"><Planet/></div>
                        <div className="icon"><Git/></div>
                        <div className="icon"><Star/></div>
                    </div>
                </motion.div>
            </motion.div>
            
        </div>
    )
}


export default FeaturedProjects;
