import React from 'react';
import './header.styles.scss';

import  {ReactComponent as LinkedIn} from '../../img/logo-linkedin.svg';
import  {ReactComponent as Git} from '../../img/logo-github.svg';
import  {ReactComponent as Twitter} from '../../img/logo-twitter.svg';
import  {ReactComponent as Chart} from '../../img/stats-chart-outline.svg';

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
                
                <motion.div className="icon">
                <a href="https://github.com/KubaJ88" target="_blank" rel="noopener noreferrer">
                <Git/></a></motion.div>
               <motion.div
               
               className="icon">
                 
                 <a href="https://www.linkedin.com/in/jakub-jaros-6a9a6b81/" target="_blank" rel="noopener noreferrer">
                <LinkedIn alt='linkedin'/></a></motion.div>
               <motion.div className="icon"
              
               ><a href="https://twitter.com/jarosk88" target="_blank" rel="noopener noreferrer"><Twitter/></a></motion.div>

               <motion.div className="icon"
               
               ><a href="https://public.tableau.com/profile/jakub.jaros#!/" target="_blank" rel="noopener noreferrer"><Chart/></a></motion.div>
               
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
