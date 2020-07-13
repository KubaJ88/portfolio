import React, { useContext } from 'react';
import './header.styles.scss';
import {PortfolioContext} from '../../providers/portfolio.provider';
import { useEffect } from 'react';
import  {ReactComponent as Planet} from '../../img/planet-outline.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import  {ReactComponent as Star} from '../../img/star-outline.svg';

import {motion, AnimatePresence} from 'framer-motion';
import { Link } from 'react-router-dom';


const variants = {
    hidden: {
        x: 5,                  
        transition: {
            duration: .5,
            delay: 0.2,                       
            ease: [.6, .05, -.01, .9],
        }
    },
    show: {
        x:-48,
        backgroundColor: '#FF007D',
        padding:'0 2.4rem',                      
        transition: {
            duration: .5,
            // delay: 0.2,                       
            ease: [.6, .05, -.01, .9]
        }
    },
    initial: {
        opacity: 0
    },
    initial2: {
        opacity:1,
        x:0,
        backgroundColor: 'transparent',
        padding:'0',  
        
        
    }
    
}

const Header = () => {

    const {togglePortfolio, showPortfolio} = useContext(PortfolioContext)
    

    

    return ( 
        <>
        <header className="header">
            <AnimatePresence>
            <motion.nav className='header__nav'>
            <div className="header__icons">
            <motion.div
                        whileHover={{scale:1.1, color: '#ffd700'}}
                        className="icon"><Planet alt='planet'/></motion.div>
                        <motion.div className="icon"
                        whileHover={{scale:1.1, fill: '#ffd700'}}
                        ><Git/></motion.div>
                        <div className="icon"><Star/></div>
                        </div>
            <Link to={              
            !showPortfolio ? '/projects' : '/'} >
            <motion.p onClick={togglePortfolio}
             initial='initial'
             exit='hidden'
             variants={variants}
 
             animate={showPortfolio ? 'show' : 'initial2'}
             whileHover={{scale:1.05, backgroundColor:'#00e9ff', padding:'0 2.4rem'}}
             whileTap={{scale:0.95}}
            
            >{showPortfolio ? 'Close' : 'Projects'}</motion.p>
            </Link>

            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}

            >{showPortfolio ? null : 'About Me'}</motion.p>
            </motion.nav>
            </AnimatePresence>
        </header>
        </>
    )
}

export default Header;
