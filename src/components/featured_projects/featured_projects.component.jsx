import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import {PortfolioContext} from '../../providers/portfolio.provider';
import './featured_projects.style.scss';
import  {ReactComponent as Planet} from '../../img/planet-outline.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import  {ReactComponent as Star} from '../../img/star-outline.svg';


const projectList = [
    {id:1,name: 'Online Shop', img:'ecommerce.png',  url:'https://kuba88-shop.herokuapp.com/', 
    git:'https://github.com/KubaJ88/react-e-commerce',
    details: ['React', 'Redux','Firebase']},
    {id:2,name: 'Calendar', img:'react-calendar_main.png',   url:'https://kubaj88.github.io/react-calendar/', 
    git:'https://github.com/KubaJ88/react-calendar', 
    details: ['React', 'SASS', 'date-fns']},
    {id:3,name: 'FAQ Page', img:'FAQ_main.png', url:'https://kubaj88.github.io/react-faq-page/', 
    git:'https://github.com/KubaJ88/react-faq-page',
    details: ['React', 'SASS']}
    
]

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
        delayChildren: 1.0
        
      }
    }
  }

const FeaturedProjects = () => {

    const {showFeatureProject, featuredProject} = useContext(PortfolioContext)
    
    

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

                {projectList.map(project => 
                <motion.div className="project"
               variants={fadeInUp}
               whileHover={{scale:1.05, backgroundColor:'#424242', color: '#fff'}}
               whileTap={{scale:0.95}} 
               key={project.id}
               onHoverStart={() =>  showFeatureProject(project,true)}
               onHoverEnd={() =>  showFeatureProject(project,false)}
               
                
                >
                    <div className="project__title">
                        {project.name}
                    </div>
                    <div className="project__description">
                       {project.details.join(' | ')}
                    </div>
                    <div className="project__icons">
                        
                        
                        
                        {project.url && <a target='_blank' href={project.url}>                    
                        <Planet className='icon'/>
                        </a> } 
                        
                        

                  { project.git && 
                    <a target='_blank' href={project.git}>       
                    <Git className='icon'/>                  
                    </a> }
                      

                      {/* <a><Star className="icon"/></a> */}
                    </div>
                </motion.div>
                )}
                
            </motion.div>
            
        </div>
    )
}


export default FeaturedProjects;
