import React, { useEffect } from 'react';
import './projects.style.scss';
import PortfolioList from '../../components/portfolio-list/portfolio-list.component';
import Description from '../../components/description/description.component';
// import {AnimatePresence} from 'framer-motion';
// import {PortfolioContext} from '../../providers/portfolio.provider';
// import { useContext } from 'react';

import {motion} from 'framer-motion';
import { useLocation, useRouteMatch } from 'react-router-dom';

const Project = () => {

    // let location = useLocation();
    // console.log(location)

    //trying different approach with routematch

    let projectMatch = useRouteMatch('/projects');
    
    // useEffect(() => !showPortfolio ? togglePortfolio(true) : '' , [])

    // const {showPortfolio, togglePortfolio} = useContext(PortfolioContext)
    // const showPortfolio = true

    const variants = {
        hidden: {
            x: '-100%',
            transformOrigin: 'right top',            
            transition: {
                duration: .8,
                delay: 0.2,                       
                ease: [.6, .05, -.01, .9],
            }
        },
        show: {
            x:0,            
            transition: {
                duration: .7,
                // delay: 0.2,                       
                ease: [.6, .05, -.01, .9],
            }
        },
        
    }

    //orginalnie mialem animatepresent ktore tworzylo dziwny effekt, po tym jak to wywalilem wokol calego componentu to wszystko chodzi dobrze

    return (
        <>
        
        
        
        <motion.div className='background'
         initial='hidden'
         
         animate={projectMatch.isExact ? 'show' : 'hidden'}
         exit='hidden'
         variants={variants}
        ></motion.div>
        <motion.div className="project__list"
        initial={{ x: '-100%', transformOrigin: 'right top',
        skewX: 2 }}
                        exit={{ x: '-100%', opacity:0 }}
                        animate={{ x: projectMatch.isExact ? 0 : '-100%', skewX: 0}}
                        transition={{
                            duration: .8 ,
                            delay: projectMatch.isExact ? 0.05 : 0.1,
                            ease: [.6, .05, -.01, .9]
                        }}
        
        >
        
        <PortfolioList/>
        <Description/>
        </motion.div>
       
        </>
    )
}

export default Project;