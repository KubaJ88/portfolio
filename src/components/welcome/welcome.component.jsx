import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import {PortfolioContext} from '../../providers/portfolio.provider';
import './welcome.style.scss';
import { NavLink } from 'react-router-dom';



const ease = [.6, .05, -.01, .9];

const Welcome = () => {

    const {togglePortfolio} = useContext(PortfolioContext)

    return (
        <div className="welcome">
            <div className="welcome__hello">
            <motion.span className='hello'
            initial={{ y: 250 , skewY: 7, transformOrigin: 'right top' }}
            animate={{ y: 0, skewY:0 }}
            transition={{ ease: ease, duration: 2.5 }}>Hello, I'm</motion.span>
            </div>
            <motion.div className="welcome__name">
            <motion.span className='name'
            initial={{ y: -250 , skewY: 7, transformOrigin: 'right top' }}
            animate={{ y: 0, skewY:0 }}
            transition={{ ease: ease, duration: 2.5 }}
            >Kuba Jaros</motion.span>
            <motion.div
            initial={{backgroundSize: '0% 80%'}}
            animate={{backgroundSize: '100% 80%'}}
            transition={{
                duration:4,
                delay: 1.5,                
                ease:ease
            }}
            className="color-line"></motion.div>
            </motion.div>

            <div className="cta">

                <button className="cta__portfolio"
                onClick={() => togglePortfolio(true)}
                >
                <NavLink exact to={         
                    '/projects'} 
                    activeClassName='selected'>
                        Portfolio
                 </NavLink>
                </button>
                <button className="cta__aboutme"><NavLink exact to={         
                    '/about-me'} 
                    activeClassName='selected'>
                        About Me
                 </NavLink></button>
            </div>
        </div>
    )
}


export default Welcome;
