import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import {PortfolioContext} from '../../providers/portfolio.provider';
import './featured_projects.style.scss';
import  {ReactComponent as Planet} from '../../img/planet-outline.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import  {ReactComponent as Star} from '../../img/star-outline.svg';


const projectList = [
    {id:1,name: 'Online Shop', img:'ecommerce.png', description:'Lorem impsum dolor, sit amet .....'},
    {id:2,name: 'Calendar', img:'react-calendar_main.png', description:'Lorem impsum dolor, sit amet .....'},
    {id:3,name: 'FAQ Page', img:'FAQ_main.png', description:'Lorem impsum dolor, sit amet .....'}
    
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
                        REACT | SASS | D3.JS
                    </div>
                    <div className="project__icons">
                        <motion.div
                        whileHover={{scale:1.1, color: '#ffd700'}}
                        className="icon"><Planet alt='planet'/></motion.div>
                        <motion.div className="icon"
                        whileHover={{scale:1.1, fill: '#ffd700'}}
                        ><Git/></motion.div>
                        <div className="icon"><Star/></div>
                    </div>
                </motion.div>
                )}
                
            </motion.div>
            
        </div>
    )
}


export default FeaturedProjects;
