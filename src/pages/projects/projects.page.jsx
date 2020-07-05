import React from 'react';
import './projects.style.scss';
import PortfolioList from '../../components/portfolio-list/portfolio-list.component';
import Description from '../../components/description/description.component';
import {AnimatePresence} from 'framer-motion';
import {PortfolioContext} from '../../providers/portfolio.provider';
import { useContext } from 'react';
import {motion} from 'framer-motion';

const Project = () => {

    // const {showPortfolio} = useContext(PortfolioContext)
    const showPortfolio = true

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

    return (
        <>
        <AnimatePresence>
        {showPortfolio && ( 
            <>
      
        <motion.div className='background'
         initial='hidden'
         animate={showPortfolio ? 'show' : 'hidden'}
         exit='hidden'
         variants={variants}
        ></motion.div>
        <motion.div className="project__list"
        initial={{ x: '-100%', transformOrigin: 'right top',
        skewX: 2 }}
                        exit={{ x: '-100%' }}
                        animate={{ x: showPortfolio ? 0 : '-100%', skewX: 0}}
                        transition={{
                            duration: .8 ,
                            delay: showPortfolio ? 0.05 : 0.1,
                            ease: [.6, .05, -.01, .9]
                        }}
        
        >
        
        <PortfolioList/>
        <Description/>
        </motion.div>
        </>
        )
        }
        </AnimatePresence>
        </>
    )
}

export default Project;