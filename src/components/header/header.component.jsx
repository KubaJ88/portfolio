import React, { useContext } from 'react';
import './header.styles.scss';
import {PortfolioContext} from '../../providers/portfolio.provider';
import { useEffect } from 'react';
import  {ReactComponent as Planet} from '../../img/planet-outline.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import  {ReactComponent as Star} from '../../img/star-outline.svg';

import {motion, AnimatePresence} from 'framer-motion';
import { NavLink } from 'react-router-dom';


// const variants = {
//     hidden: {
//         x: 5,                  
//         transition: {
//             duration: .5,
//             delay: 0.2,                       
//             ease: [.6, .05, -.01, .9],
//         }
//     },
//     showProject: {
//         // x:-48,
//         backgroundColor: '#FF007D',
//         padding:'0 2.4rem',                      
//         transition: {
//             duration: .5,
//             // delay: 0.2,                       
//             ease: [.6, .05, -.01, .9]
//         }
//     },
//     showHome: {
//         // x:-48,
//         backgroundColor: '#00e9ff',
//         color: '#000',
//         padding:'0 2.4rem',                      
//         transition: {
//             duration: .5,
//             // delay: 0.2,                       
//             ease: [.6, .05, -.01, .9]
//         }
//     },
//     initial: {
//         opacity: 1,
//         padding:'0 2.4rem',     
//         transition: {
//             duration: .5,
//             // delay: 0.2,                       
//             ease: [.6, .05, -.01, .9]
//         }
//     },
//     initialHome: {
//         opacity: 1,
//         padding: 0,
//         color: '#fff',    
//         backgroundColor: 'transparent',
//         transition: {
//             duration: .5,
//             // delay: 0.2,                       
//             ease: [.6, .05, -.01, .9]
//         }
//     },
//     initial2: {
//         opacity:1,
//         x:0,
//         backgroundColor: 'transparent',
//         padding:'0', 
//         color: '#fff'
        
        
//     }
    
// }

const ease = [.6, .05, -.01, .9];

const fadeInUp = {
    initial: {
      y: -60,
      opacity: 0
    },
    animate: {
      y:0,
      opacity:1,
      transition: {
        duration: .4,
        ease: ease,
        
      }
    }
}

const stagger = {
    animate: {
      transition: {
        when:'beforeChildren',
        staggerChildren: .1,
        ease: ease,
        delayChildren: .1
        
      }
    }
  }

const Header = () => {

    // const {togglePortfolio, showPortfolio} = useContext(PortfolioContext)
    

    

    return ( 
        <>
        <header className="header">
            <AnimatePresence>
            <motion.nav className='header__nav'
            >
            <div className="header__icons">
            <motion.div
                        whileHover={{scale:1.1, color: '#ffd700'}}
                        className="icon"><Planet alt='planet'/></motion.div>
                        <motion.div className="icon"
                        whileHover={{scale:1.1, fill: '#ffd700'}}
                        ><Git/></motion.div>
                        <div className="icon"><Star/></div>
            </div>
            <motion.div className="header__nav__links"
            variants={stagger}
            initial='initial'
            animate='animate'>
            <NavLink exact to={         
             '/'} 
             activeClassName='selected'
             >
            <motion.p
            //  initial={{opacity:0}}
            //  animate={{opacity:1}}
            //  exit={{opacity:0}}
            variants={fadeInUp}
            // onClick={() => togglePortfolio(false)}
            // initial='initial'
            // exit='hidden'
            // variants={variants}
            // animate={!showPortfolio ? 'showHome' : 'initialHome'}
            // whileHover={{scale:1.05, backgroundColor:'#00e9ff', padding:'0 2.4rem'}}
            // whileTap={{scale:0.95}}
            


            >Home</motion.p>
            </NavLink>
            <NavLink exact to={         
             '/projects'} 
             activeClassName='selected'>
            <motion.p
            //  initial={{opacity:0}}
            //  animate={{opacity:1}}
            //  exit={{opacity:0}}
            variants={fadeInUp}
            //  initial='initial'
            //  exit='hidden'
            //  variants={variants} 
            //  animate={showPortfolio ? 'showProject' : 'initial2'}
            

            //  whileHover={{scale:1.05, backgroundColor:'#00e9ff', padding:'0 2.4rem'}}
            //  whileTap={{scale:0.95}}
            
            >Projects</motion.p>
            </NavLink>
            
            <NavLink exact to='/about-me' 
            activeClassName='selected'>
            <motion.p
            // initial={{opacity:0}}
            // animate={{opacity:1}}
            // exit={{opacity:0}}
            variants={fadeInUp}
            // onClick={() => togglePortfolio(false)}

            >About Me</motion.p>
            </NavLink>
            </motion.div>
            </motion.nav>
            </AnimatePresence>
        </header>
        </>
    )
}

export default Header;
