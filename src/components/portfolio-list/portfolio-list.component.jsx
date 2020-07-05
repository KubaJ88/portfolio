import React, {useContext} from 'react';
import './portfolio-list.style.scss';
import {motion} from 'framer-motion';
import  {ReactComponent as Planet} from '../../img/planet-outline.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import {PortfolioContext} from '../../providers/portfolio.provider';


const projectList = [
    {id:1,name: 'Star Wars', img:'1.png'},
    {id:2,name: 'Calendar', img:'2.png'},
    {id:3,name: 'FAQ Page', img:'2.png'},
    {id:4,name: 'E-Commerce', img:'2.png'},
    {id:5,name: 'Naturus', img:'1.png'}

]

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
        staggerChildren: .5,
        ease: ease,
        delayChildren: 1
        
      }
    }
  }

const PortfolioList = () => {
    const {changeProject} = useContext(PortfolioContext)
    
    return (
        <div className="portfolio">
                  <motion.div 
        // initial={{x:-100}}
        animate={{x: '1rem', y: '8rem'}}
     
        transition={{
            duration:5,
            yoyo: Infinity,
            ease:"easeInOut"
        }}
        
        className="project__circle"></motion.div>
            <motion.ul className='portfolio__list'
             variants={stagger}
             initial='initial'
             animate='animate'
            >
                {projectList.map(project => (
                    <motion.li key={project.id} className='portfolio__list__item'
                    variants={fadeInUp}
                    onHoverStart={() => changeProject(project,true)}
                    onHoverEnd={() => changeProject(project,false)}
                    >
                    <div className="project__name">{project.name}</div>
                    <motion.a target='_blank' href='https://google.com'>                    
                    <Planet className="icon"/>
                    </motion.a>     
                    <motion.a target='_blank' href='https://google.com'>       
                    <Git className="icon"/>                  
                    </motion.a>         
                    </motion.li>
                ))}
                
     
                               
            </motion.ul>
        </div>
    )
}

export default PortfolioList;