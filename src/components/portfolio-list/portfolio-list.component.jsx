import React, {useContext} from 'react';
import './portfolio-list.style.scss';
import {motion, AnimatePresence} from 'framer-motion';
import  {ReactComponent as Planet} from '../../img/planet-outline.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import {PortfolioContext} from '../../providers/portfolio.provider';
import {project} from '../../data/projects'


// const projectList = [
//     {id:1,name: 'Star Wars', img:'1.png'},
//     {id:2,name: 'Calendar', img:'react-calendar.PNG'},
//     {id:3,name: 'FAQ Page', img:'FAQ.PNG'},
//     {id:4,name: 'E-Commerce', img:'2.png'},
//     {id:5,name: 'Naturus', img:'1.png'},
//     {id:6,name: 'D3.js Bubble', img:'buble.PNG'},
//     {id:7,name: 'FAQ Page', img:'FAQ.PNG'},
//     {id:8,name: 'E-Commerce', img:'2.png'},
//     {id:9,name: 'Naturus', img:'1.png'},
//     {id:10,name: 'D3.js Bubble', img:'buble.PNG'}

// ]

const ease = [.6, .05, -.01, .9];

const fadeInUp = {
    initial: {
      x: -60,
      opacity: 0
    },
    animate: {
      x:0,
      opacity:1,
      transition: {
        duration: 0.8,
        ease: ease,
        
      }
    }
}

const stagger = {
    animate: {
      transition: {
        when:'beforeChildren',
        staggerChildren: .2,
        ease: ease,
        delayChildren: .2
        
      }
    }
  }

const PortfolioList = () => {
    const {changeProject} = useContext(PortfolioContext)
    
    return (
      <AnimatePresence>
        <motion.div className="portfolio"
          initial={{ opacity: 0 }}
        exit={{ opacity: 0   }}
        animate={{ opacity: 1}}
        transition={{
            duration: .5,
            ease: ease
        }}>

                  <motion.div 
        initial={{x:0, y:0}}
        animate={{x: '1rem', y: '25rem'}}
     
        transition={{
            duration:8,
            yoyo: Infinity,
            ease:"easeInOut"
        }}
        
        className="project__circle"></motion.div>
            <motion.ul className='portfolio__list'
             variants={stagger}
             initial='initial'
             animate='animate'
            >
                {project.map(project => (
                    <motion.li key={project.id} className='portfolio__list__item'
                    variants={fadeInUp}
                    onHoverStart={() => changeProject(project,true)}
                    onHoverEnd={() => changeProject(project,false)}
                    whileHover={{translateY: -4, scaleY: 1.05}}
                    //adding seperate transition to whileHover
                   
                    >
                    <div className="portfolio__list__item__box">          
                    <div className="project__name">{project.name}</div>
                    <div className="project__skill">{project.details.join(' | ')}</div>
                    </div>
                    {project.url && <a target='_blank' rel="noopener noreferrer" href={project.url}>                    
                    <Planet className="icon"/>
                    </a> }
                    { project.git && 
                    <a target='_blank' rel="noopener noreferrer" href={project.git}>       
                    <Git className="icon"/>                  
                    </a> }
                    </motion.li>
                ))}
                
     
                               
            </motion.ul>
        </motion.div>
        </AnimatePresence>
    )
}

export default PortfolioList;